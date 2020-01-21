export const actions = {
  /**
   * Cette méthode est appellée à chaque initialisation de Vuex
   * Elle permet de mettre en place l'utilisateur connecté quand on reload la page
   */
  async nuxtServerInit({ dispatch }, ctx) {
    const ssrVerifiedAuthUser = ctx.res.verifiedFireAuthUser
    const ssrVerifiedAuthUserClaims = ctx.res.verifiedFireAuthUserClaims
    if (ssrVerifiedAuthUser && ssrVerifiedAuthUserClaims) {
      console.log('salut', ssrVerifiedAuthUserClaims)
      await dispatch('auth/signIn', ssrVerifiedAuthUser)
    }
  },

  /**
   * Est appelé par la librarie nuxt-fire
   * Permet de sauver l'utilisateur dans le state qu'on il vient de se connecter
   */
  handleSuccessfulAuthentication({ dispatch }, { authUser }) {
    dispatch('auth/signIn', authUser)
  }
}
