import Locale from "./locale/index";
export default {
  head: {
    title: "Zoov Design",
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

  css: [
    "~/assets/css/main.scss",
    "~/assets/css/colors.scss",
    "~/assets/css/variable.scss",
    "~/assets/css/media.scss",
    "aos/dist/aos.css",
    "vue-cool-lightbox/dist/vue-cool-lightbox.min.css",
  ],

  plugins: [
    "./plugins/mask.js",
    { src: "plugins/owl.js", ssr: false },
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/cool-lightbox", ssr: false },
    { src: "@/plugins/yandex.js", mode: "client" },
  ],

  components: true,

  buildModules: [],
  toast: {
    position: "top-center",
  },
  modules: [
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
  axios: {
    baseURL: "https://admin.zoirovdesign.uz/api",
  },

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
