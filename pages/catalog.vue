<template>
  <div class="">
    <div class="section mt-176">
      <div class="nav_menu ml-auto mr-30 piece__of__shit">
        <div class="flex justify-between items-center gap-24 port__header">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            {{ $store.state.translations["main.nav_catalog"] }}
          </h1>
          <div
            class="flex gap-16 label_tag tags"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <button @click="tab = ''" :class="{ active: tab == '' }">
              {{ $store.state.translations["main.all_projects"] }}
            </button>
            <button
              v-for="(el, index) in categories"
              :key="index"
              @click="tab = el.id"
              :class="{ active: tab == el.id }"
            >
              {{ el.title }}
            </button>
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
    };
  },
  methods: {},
  watch: {
    async tab() {
      this.loading = false;
      if (!!this.tab) {
        await this.$axios
          .get("/projects", {
            params: { category: this.tab },
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
