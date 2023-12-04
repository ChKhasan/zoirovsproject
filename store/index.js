export const state = () => ({
  translations: {},
  static_info: {},
});
export const mutations = {
  getStaticInfo(state, payload) {
    state.static_info = payload;
  },
  getTranslations(state, payload) {
    state.translations = payload;
  },
};
