<template>
  <div class="navbar">
    <div class="flex items-center">
      <nuxt-link to="/" class="">
        <img class="nav-logo" src="~/assets/images/brand.svg" alt="err" />
      </nuxt-link>
    </div>
    <div class="flex justify-between nav_menu gap-24">
      <button @click="search = !search" class="nav_btn searcher">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M22 22L20 20M2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5Z"
            stroke="white"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button class="nav_btn" @click="menu = true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="27"
          viewBox="0 0 40 27"
          fill="none"
        >
          <line y1="1.5" x2="40" y2="1.5" stroke="white" stroke-width="2" />
          <line y1="13.5" x2="40" y2="13.5" stroke="white" stroke-width="2" />
          <line y1="25.5" x2="40" y2="25.5" stroke="white" stroke-width="2" />
        </svg>
        <p class="sm_menu">{{ $store.state.translations["main.nav_menu"] }}</p>
      </button>
      <div class="dv flex gap-40">
        <button @click="search = !search" class="nav_btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 22L20 20M2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5Z"
              stroke="white"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <a
          class="flex items-center font-T1Interfaces"
          href="tel:+998 93 510 00 59"
          >{{ $store.state.static_info.nbm }}</a
        >
        <div class="flex gap-24">
          <div class="soc">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 0.5C2.23858 0.5 0 2.73858 0 5.5V15.5C0 18.2614 2.23858 20.5 5 20.5H15C17.7614 20.5 20 18.2614 20 15.5V5.5C20 2.73858 17.7614 0.5 15 0.5H5ZM16 5.5C16.5523 5.5 17 5.05228 17 4.5C17 3.94772 16.5523 3.5 16 3.5C15.4477 3.5 15 3.94772 15 4.5C15 5.05228 15.4477 5.5 16 5.5ZM15 10.5C15 13.2614 12.7614 15.5 10 15.5C7.23858 15.5 5 13.2614 5 10.5C5 7.73858 7.23858 5.5 10 5.5C12.7614 5.5 15 7.73858 15 10.5ZM10 13.5C11.6569 13.5 13 12.1569 13 10.5C13 8.84315 11.6569 7.5 10 7.5C8.34315 7.5 7 8.84315 7 10.5C7 12.1569 8.34315 13.5 10 13.5Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div class="soc">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
              >
                <path
                  d="M0.896455 7.29686L16.2851 0.646242C17.0088 0.333489 17.7929 0.942073 17.6695 1.72072L15.5655 14.9967C15.4355 15.8167 14.4206 16.1304 13.8506 15.5266L10.3977 11.8691C9.72058 11.1518 9.66752 10.048 10.2727 9.26906L12.7107 6.13132C12.8501 5.95195 12.63 5.71597 12.4414 5.84253L7.59406 9.09435C6.77148 9.64618 5.77341 9.87317 4.79309 9.73139L1.15003 9.2045C0.15204 9.06016 -0.0291716 7.69689 0.896455 7.29686Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Transition name="bounce">
      <Menu :langs="locales" @close="closeClick($event)" v-if="menu" />
    </Transition>

    <div class="menu-mobile" :class="{ menu_mobile: search }">
      <div class="search">
        <button class="" @click="search = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.1872 16.9547C15.6754 17.4429 16.4668 17.4429 16.955 16.9547C17.4431 16.4666 17.4431 15.6751 16.955 15.187L10.7678 8.99981L16.955 2.81267C17.4431 2.32451 17.4431 1.53306 16.955 1.0449C16.4668 0.556746 15.6754 0.556746 15.1872 1.0449L9.00007 7.23204L2.81285 1.04483C2.3247 0.556672 1.53324 0.556672 1.04509 1.04483C0.556931 1.53298 0.55693 2.32444 1.04509 2.81259L7.2323 8.99981L1.04507 15.187C0.556916 15.6752 0.556916 16.4666 1.04507 16.9548C1.53323 17.443 2.32468 17.443 2.81284 16.9548L9.00007 10.7676L15.1872 16.9547Z"
              fill="white"
            />
          </svg>
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
          <button class="closer" @click="search = false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
            >
              <path
                d="M37.8996 18.1007L18.1006 37.8997M37.8996 37.8996L18.1006 18.1006"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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
