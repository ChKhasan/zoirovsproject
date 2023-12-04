<template>
  <div class="">
    <div class="section mt-176">
      <div class="nav_menu ml-auto mr-30">
        <div class="flex justify-between items-center gap-24">
          <!-- <h1>{{ $store.state.translations["main.nav_catalog"] }}</h1> -->
          <h1>
            {{
              projects[0]?.styles.find((item) => item.id == $route.query.styles)?.title
            }}
          </h1>

          <div class="flex gap-16 label_tag tags">
            <!-- <button @click="tab = ''" :class="{ active: tab == '' }">
              {{ $store.state.translations["main.all_projects"] }}
            </button> -->

            <!-- <nuxt-link
              class="styles"
              v-for="(el, index) in projects[0]?.styles"
              :key="index"
              @click="tab = el.id"
              :to="localePath({ name: 'styles', query: { styles: el.id } })"
              :class="{ active: $route.query.styles == el.id }"
            >
              {{ el?.title }}
            </nuxt-link> -->
          </div>
        </div>
      </div>
      <div class="" v-if="loading">
        <carouselComponent
          :res_item="3"
          v-if="projects[0]"
          class="mt-45 owl-item-3"
          :item="3"
          :projects="projects[0]"
        />
        <carouselComponent
          :res_item="3"
          v-for="(el, index) in projects?.slice(1)"
          :key="index"
          class="mt-90 sm_mt-32 owl-item-5"
          :item="5"
          :projects="el"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import carouselPartners from "@/components/carouselPartners.vue";
import countTo from "vue-count-to";
export default {
  components: { countTo, carouselPartners },
  data() {
    return {
      loading: true,
      tab: "",
      projects: [],
      categories: [],
      styles: [],
    };
  },
  methods: {},
  computed: {
    routeQuery() {
      return this.$route.query.styles;
    },
  },
  watch: {
    "$route.query.styles"(val) {
      this.$axios
        .get("/projects", {
          headers: {
            Language: this.$i18n.locale,
          },
          params: {
            ...this.$route.query,
          },
        })
        .then((el) => {
          this.projects = el?.data?.results;
          this.projects.forEach((el) => {
            el?.images.forEach((k) => {
              k.title = el?.name;
            });
          });
        });
    },

    async tab() {
      this.loading = false;
      if (!!this.tab) {
        await this.$axios
          .get("/projects", {
            params: {
              ...this.$route.query,
            },
            headers: {
              Language: this.$i18n.locale,
            },
          })
          .then((el) => {
            this.projects = el?.data?.results;
            this.projects.forEach((el) => {
              el?.images.forEach((k) => {
                k.title = el?.name;
              });
            });
          });
      } else {
        await this.$axios
          .get("/projects", {
            headers: {
              Language: this.$i18n.locale,
            },
          })
          .then((el) => {
            this.projects = el?.data?.results;
            this.projects.forEach((el) => {
              el?.images.forEach((k) => {
                k.title = el?.name;
              });
            });
          });
      }
      this.loading = true;
    },
    async targetLangCode(val) {
      this.loading = false;
      await this.$axios
        .get("/projects", {
          headers: {
            Language: val,
          },
          params: {
            ...this.$route.query,
          },
        })
        .then((el) => {
          this.projects = el?.data?.results;
          this.projects.forEach((el) => {
            el?.images.forEach((k) => {
              k.title = el?.name;
            });
          });
        });

      await this.$axios
        .get("/categories?page_size=10&page=1", {
          headers: {
            Language: val,
          },
        })
        .then((el) => {
          this.categories = el?.data?.results;
        });

      this.loading = true;
    },
  },
  computed: {
    targetLangCode() {
      return this.$i18n.locale;
    },
  },
  async fetch() {
    this.loading = true;
    const [projects, categories] = await Promise.all([
      this.$axios.get("/projects", {
        headers: {
          Language: this.$i18n.locale,
        },
        params: {
          ...this.$route.query,
        },
      }),
      this.$axios.get("/categories?page_size=10&page=1", {
        headers: {
          Language: this.$i18n.locale,
        },
      }),
    ]);
    this.loading = true;

    this.projects = projects?.data?.results;
    this.projects.forEach((item) => {
      item?.images.forEach((k) => {
        k.title = item?.name;
      });
    });
    this.categories = categories?.data?.results;
  },
};
</script>
