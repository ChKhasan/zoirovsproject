import Locale from "./locale/index";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "DIYOR PROJECTS",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.scss",
    "~/assets/css/colors.scss",
    "~/assets/css/variable.scss",
    "~/assets/css/media.scss",
    "aos/dist/aos.css",
    "vue-cool-lightbox/dist/vue-cool-lightbox.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "./plugins/mask.js",
    { src: "plugins/owl.js", ssr: false },
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/cool-lightbox", ssr: false },
    { src: "@/plugins/yandex.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  toast: {
    position: "top-center",
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/toast",
    "@nuxtjs/axios",
    "@nuxtjs/i18n",
    "bootstrap-vue/nuxt",
    "@nuxtjs/style-resources",
  ],
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
    vueI18n: {
      fallbackLocale: "en",
      messages: Locale,
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://admin.diyorproject.uz/api/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["aos"],
    babel: {
      compact: true,
    },
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
  },
  target: "server",
};
