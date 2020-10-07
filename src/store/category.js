import firebase from 'firebase/app'

export default {
  actions: {
    /*eslint-disable */
    async fetchCategories ({commit, dispatch}) {
      try {
        const uid = await dispatch('getUid')
        const categories = (await firebase.database().ref(`/users/${uid}/categories`).once('value')).val() || {}
        return Object.keys(categories).map(key => ({...categories[key], id: key}))
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchCategoryById ({commit, dispatch}, id) {
      try {
        const uid = await dispatch('getUid')
        const category = (await firebase.database().ref(`/users/${uid}/categories`).child(id).once('value')).val() || {}
        return {...category, id: id}
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    /* eslint-enable */
    async updateCategory ({
      commit, dispatch
    }, {
      title, limit, id
    }) {
      try {
        const uid = await dispatch('getUid')
        /* eslint-disable */
        await firebase.database().ref(`/users/${uid}/categories`).child(id).update({title, limit})
        /* eslint-enable */
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async createCategory ({
      commit, dispatch
    },
    {
      title, limit
    }) {
      try {
        const uid = await dispatch('getUid')
        /* eslint-disable */
        const category = await firebase.database().ref(`/users/${uid}/categories`).push({title, limit})
        return {title, limit, id: category.key}
        /* eslint-enable */
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
