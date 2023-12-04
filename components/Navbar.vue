<template>
  <div class="navbar">
    <div class="flex items-center">
      <nuxt-link to="/" class="">
        <img class="nav-logo" src="~/assets/svg/logo.svg" alt="err" />
      </nuxt-link>
    </div>
    <div class="flex justify-between nav_menu gap-24">
      <button @click="search = !search" class="mv nav_btn">
        <img src="@/assets/svg/loop.svg" alt="" />
      </button>
      <button class="nav_btn" @click="menu = true">
        <img src="@/assets/svg/menu.svg" alt="" />
        <p class="sm_menu">{{ $store.state.translations["main.nav_menu"] }}</p>
      </button>
      <div class="dv flex gap-40">
        <button @click="search = !search" class="nav_btn">
          <img src="@/assets/svg/loop.svg" alt="" />
        </button>
        <a class="flex items-center font-T1Interfaces" href="tel:+998 93 510 00 59">{{
          $store.state.static_info.nbm
        }}</a>
        <div class="flex gap-24">
          <nuxt-link
            class="langs"
            v-for="lang in locales"
            :key="lang.id"
            :class="{ active: lang.code == langVal }"
            :to="switchLocalePath(lang.code)"
            >{{ lang.name }}</nuxt-link
          >
        </div>
      </div>
    </div>
    <Transition name="bounce">
      <Menu :langs="locales" @close="closeClick($event)" v-if="menu" />
    </Transition>

    <div class="menu-mobile" :class="{ menu_mobile: search }">
      <div class="search">
        <button class="mv" @click="search = false">
          <img src="@/assets/svg/close.svg" alt="" />
        </button>
        <input
          type="text"
          v-model="search_text"
          :placeholder="$store.state.translations['main.navSearch_placeholder']"
        />
        <div class="dv flex gap-56">
          <button class="search-btn" @click="searchF">
            {{ $store.state.translations["main.nav_search"] }}
          </button>
          <button @click="search = false">
            <img src="@/assets/svg/close.svg" alt="" />
          </button>
        </div>
        <button class="mv search-btn w-screen" @click="searchF">
          {{ $store.state.translations["main.nav_search"] }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/menu.vue";
export default {
  name: "Navbar",
  components: { Menu },
  data() {
    return {
      menu: false,
      search_text: "",
      search: false,
      statics: {},
      langVal: "ru",
      locales: [
        { id: 1, code: "ru", name: "Ру" },
        {
          id: 2,
          code: "en",
          name: "En",
        },
      ],
      timeout: null,
    };
  },
  computed: {
    targetLangCode() {
      return this.$i18n.locale;
    },
    routerName() {
      return this.$route.path;
    },
  },
  async fetch() {
    const [statics, translations, locales] = await Promise.all([
      this.$axios.get("/static_infos", {
        headers: {
          Language: this.$i18n.locale,
        },
      }),
      this.$axios.get("/translations", {
        headers: {
          Language: this.$i18n.locale,
        },
      }),
      this.$axios.get("/languages"),
    ]);
    this.locales = locales?.data?.results;
    this.$store.commit("getStaticInfo", statics?.data);
    this.$store.commit("getTranslations", translations?.data);
  },

  methods: {
    closeClick(e) {
      this.menu = e;
    },
    searchF() {
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        if (!!this.search_text) {
          this.$router.push({
            path: "/search",
            query: {
              ...this.$route.query,
              search: this.search_text,
            },
          });
        }
        this.search = false;
      }, 1500);
    },
  },
  watch: {
    targetLangCode(val) {
      this.$axios
        .get("/static_infos", {
          headers: {
            Language: val,
          },
        })
        .then((el) => {
          this.statics = el?.data;
          this.$store.commit("getStaticInfo", el?.data);
        });
      this.$axios
        .get("/translations", {
          headers: {
            Language: val,
          },
        })
        .then((el) => {
          this.statics = el?.data;
          this.$store.commit("getTranslations", el?.data);
        });
    },
    routerName() {
      this.menu = false;
    },
  },
};
</script>

<style lang="css">
.bounce-enter-active {
  animation: bounce-in 0.7s;
}
.bounce-leave-active {
  animation: bounce-in 0.7s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(1%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
