const admin = require('firebase-admin')
const JWTDecode = require('jwt-decode')
const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')

const app = express()

const config = {
  dev: false
}

const nuxt = new Nuxt(config)

let isReady = false
const readyPromise = nuxt
  .ready()
  .then(() => {
    isReady = true
    return null
  })
  .catch(() => {
    process.exit(1)
  })

async function handleRequest(req, res) {
  if (!isReady) {
    await readyPromise
  }
  res.set('Cache-Control', 'public, max-age=1, s-maxage=1')

  // On check si la requete a l'authorization header qui est envoyé par le service worker firebase-auth-sw.js
  if (req.headers.authorization) {
    // On initialise Firebase si c'est pas déjà fait
    if (!admin.apps.length) {
      admin.initializeApp()
    }

    const user = await admin.auth().getUserByEmail('vincent5890@gmail.com')
    // Confirm user is verified.
    if (user.emailVerified) {
      // Add custom claims for additional privileges.
      // This will be picked up by the user on token refresh or next sign in on new device.
      return admin.auth().setCustomUserClaims(user.uid, {
        admin: true
      })
    }

    // Parse the injected ID token from the request header.
    const authorizationHeader = req.headers.authorization || ''
    const components = authorizationHeader.split(' ')
    const idToken = components.length > 1 ? components[1] : ''

    // Get authUser object from JWT
    const decodedAuthUser = JWTDecode(idToken)
    const authUser = {
      // Reproduce attributes of "official" authUser object
      uid: decodedAuthUser.user_id,
      email: decodedAuthUser.email,
      emailVerified: decodedAuthUser.email_verified
    }

    // Try to verify the id token:
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken)
      const uid = decodedToken.uid
      if (uid) {
        // If UID can be retrieved, user is officially verified.
        // Set authUser object to res so it can be accesses in nuxtServerInit with in `ctx.res`
        res.verifiedFireAuthUser = authUser
      }
    } catch (e) {
      console.error(e)
    }
  }

  // ATTENTION : en appellant nuxt.render, on n'execute par les serverMiddleware !!!
  await nuxt.render(req, res)
}

app.get('*', handleRequest)
app.use(handleRequest)
exports.nuxtssr = functions.https.onRequest(app)
