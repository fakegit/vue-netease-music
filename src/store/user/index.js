import state from './state'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'
import { createNamespacedHelpers } from 'vuex'

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

export const { mapState, mapMutations, mapGetters, mapActions } = createNamespacedHelpers('user')
