<template>
  <div class="">
    <div class="section">
      <div
        class="flex justify-between xl_w-1206 md_w-1006 mt-176 md_flex-col md_items-center md_gap-40"
      >
        <div class="w-70 sm_w-90 send_app_text">
          <h1 class="mb-16">{{ $store.state.static_info["title"] }}</h1>
          <p class="mb-40">
            {{ $store.state.static_info["subtitle"] }}
          </p>
          <div class="flex send_app_stat justify-between">
            <div class="">
              <p v-html="$store.state.translations['main.countUp_text1']"></p>
              <div class="flex">
                <count-to
                  :startVal="0"
                  :endVal="Number($store.state.translations['main.count_up1'])"
                  :duration="4000"
                ></count-to
                ><span>+</span>
              </div>
            </div>
            <div class="">
              <p v-html="$store.state.translations['main.countUp_text2']"></p>
              <div class="flex">
                <count-to
                  :startVal="0"
                  :endVal="Number($store.state.translations['main.count_up2'])"
                  :duration="4000"
                ></count-to
                ><span>+</span>
              </div>
            </div>

            <div>
              <p v-html="$store.state.translations['main.countUp_text3']"></p>
              <div class="flex">
                <count-to
                  :startVal="0"
                  :endVal="Number($store.state.translations['main.count_up3'])"
                  :duration="4000"
                ></count-to
                ><span>+</span>
              </div>
            </div>
          </div>
        </div>
        <a
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-offset="100"
          class="send_app"
          href="#feedback"
        >
          <img
            style="width: 50%; height: unset"
            src="@/assets/svg/logo.svg"
            alt=""
          />
        </a>
      </div>
    </div>
    <div class="section">
      <div
        class="home_tblock mt-40"
        style="overflow: hidden"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-offset="100"
      >
        <h3>{{ $store.state.translations["main.banner_title"] }}</h3>
        <span>{{ $store.state.translations["main.banner_subtitle"] }}</span>
        <div class="flex w-100 justify-between">
          <div
            class="flex justify-center w-100 home_tblock_els"
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-offset="100"
          >
            <p>{{ $store.state.translations["main.banner_step1"] }}</p>
          </div>
          <div
            class="flex justify-center w-100 home_tblock_els"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-offset="100"
          >
            <p>{{ $store.state.translations["main.banner_step2"] }}</p>
          </div>
          <div
            class="flex justify-center w-100 home_tblock_els"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-offset="100"
          >
            <p>{{ $store.state.translations["main.banner_step3"] }}</p>
          </div>
        </div>
        <video autoplay muted loop id="myVideo">
          <source src="@/assets/videos/Dior.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="section mt-120 sm_mt-32">
      <div
        class="col-10 sm_w-90 sm_px-0 section_title"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-offset="300"
      >
        <p class="opacity-05">
          {{ $store.state.translations["main.portfolio_title"] }}
        </p>
        <div class="flex gap-24">
          <h1>{{ $store.state.translations["main.portfolio_subtitle"] }}</h1>
          <nuxt-link class="flex items-center dv" to="/catalog">{{
            $store.state.translations["main.portfolio_link"]
          }}</nuxt-link>
        </div>
        <div class="flex gap-16 label_tag tags">
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
      <div v-if="loading">
        <carouselComponent
          v-if="projects[0]"
          class="mt-45 owl-item-3"
          :res_item="2"
          :item="4"
          :projects="projects[0]"
        />
        <span v-for="(project, index) in projects.slice(1, 5)" :key="index">
          <carouselComponent
            v-if="projects[1]"
            class="mt-45 owl-item-3"
            :res_item="2"
            :item="5"
            :projects="project"
          />
        </span>
        <!-- <span v-for="(project, index) in projects" :key="index">
          <carouselComponent
            v-if="projects[0]"
            :res_item="3"

            class="mt-90 sm_mt-32 owl-item-5"
            :responsive="2"
            :item="5"
            :projects="project"
          />
        </span> -->
        <div v-if="projects.length" class="flex justify-center">
          <nuxt-link tag="button" to="/catalog" class="show_more mx-16 mt-40">
            {{ $store.state.translations["main.show_more"] }}</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="section mt-80 sm_mt-32 p-30 sm_px-16">
      <div class="col-10 sm_w-100 sm_p-0 section_title">
        <h1>{{ $store.state.translations["main.about_us"] }}</h1>
      </div>
      <div class="col-12 mt-32">
        <div class="relative">
          <video
            ref="video"
            width="320"
            height="240"
            class="videomodal_img w-100"
            autoplay
            loop
            muted
            playsinline
          >
            <source src="@/assets/videos/pexels.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="mt-40 sm_m-0">
        <div class="col-10 section_title sm_w-100 sm_px-16">
          <div class="flex mx-auto justify-center gap-24 sm_flex-wrap">
            <div
              class="w-50 sm_w-100 section_title"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-offset="500"
            >
              <h3 class="mb-24 sm_mb-8">
                {{ $store.state.translations["main.aboutCompany_title"] }}
              </h3>
              <p
                v-html="$store.state.translations['main.aboutCompany_text']"
              ></p>
            </div>
            <div class="w-50 sm_w-100">
              <div class="flex send_app_stat justify-between">
                <div
                  class=""
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-offset="500"
                >
                  <p
                    v-html="$store.state.translations['main.countUp_text1']"
                  ></p>
                  <div class="flex">
                    <count-to
                      :startVal="0"
                      :endVal="
                        Number($store.state.translations['main.count_up1'])
                      "
                      :duration="4000"
                    ></count-to>
                    <span>+</span>
                  </div>
                </div>
                <div
                  class=""
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-offset="400"
                >
                  <p
                    v-html="$store.state.translations['main.countUp_text2']"
                  ></p>
                  <div class="flex">
                    <count-to
                      :startVal="0"
                      :endVal="
                        Number($store.state.translations['main.count_up2']) * 1
                      "
                      :duration="4000"
                    ></count-to>
                    <span>+</span>
                  </div>
                </div>
                <div
                  class=""
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-offset="400"
                >
                  <p
                    v-html="$store.state.translations['main.countUp_text3']"
                  ></p>
                  <div class="flex">
                    <count-to
                      :startVal="0"
                      :endVal="
                        Number($store.state.translations['main.count_up3'])
                      "
                      :duration="4000"
                    ></count-to>
                    <span>+</span>
                  </div>
                </div>
              </div>
              <div class="sm_w-100">
                <button class="show_more mt-32">
                  {{ $store.state.translations["main.btn_more"] }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="col-10 section_title sm_w-100 sm_px-16">
        <div class="client_recommendations">
          <div class="w-50">
            <div class="client_recommendation">
              <div class="">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-offset="400"
                >
                  {{ $store.state.translations["main.clientsTitle_start"] }}
                </h1>
                <h1
                  class="ml-30p"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-offset="400"
                >
                  {{ $store.state.translations["main.clientsTitle_center"] }}
                </h1>
                <h1
                  class="ml-15p"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-offset="400"
                >
                  {{ $store.state.translations["main.clientsTitle_end"] }}
                </h1>
              </div>
              <p v-html="reviews[review]?.text"></p>
              <div
                class="client_recommendation_info"
                data-aos="fade-out"
                data-aos-duration="200"
                data-aos-easing="ease-in-out-cubic"
              >
                <div
                  class="flex gap-16 items-center"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-offset="400"
                >
                  <img :src="reviews[review]?.avatar" alt="" />
                  <span>{{ reviews[review]?.name }}</span>
                </div>
                <div class="carousel_btn gap-12 flex">
                  <button @click="review--">
                    <Icons color="#9A999B" icon="arrow" />
                  </button>
                  <button @click="review++" class="carousel_btn_r">
                    <Icons color="#9A999B" icon="arrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="w-50 owl-item-1"
            v-if="reviews?.[review]?.images.length"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-offset="400"
          >
            <no-ssr>
              <carousel
                :dots="false"
                :nav="false"
                :margin="10"
                :loop="true"
                :autoplay="true"
                :items="1"
              >
                <template slot="prev"><span ref="prev"></span></template>
                <template slot="next"><span ref="next"></span></template>
                <img
                  v-for="(el, index) in reviews[review].images"
                  :key="index"
                  :src="el?.image"
                />
              </carousel>
            </no-ssr>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="feedback">
      <div class="feedback">
        <div class="col-10 mx-auto sm_px-16 sm_w-100">
          <div class="row px-48">
            <div class="col-6 my-auto sm_w-100">
              <div
                class="feedback_input"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-offset="400"
              >
                <h1>{{ $store.state.translations["main.contact_title"] }}</h1>
                <span>{{
                  $store.state.translations["main.contact_text"]
                }}</span>
                <a href="#">{{
                  $store.state.translations["main.contact_link"]
                }}</a>
                <div class="flex flex-col">
                  <input
                    v-model="form.full_name"
                    type="text"
                    :placeholder="
                      $store.state.translations['main.contactName_placeholder']
                    "
                  />
                  <input
                    v-model="form.phone_number"
                    v-mask="'+998-##-###-##-##'"
                    type="text"
                    :placeholder="
                      $store.state.translations[
                        'main.contactNumber_placeholder'
                      ]
                    "
                  />
                  <button @click="sendForm" class="col-5">
                    {{ $store.state.translations["main.contact_btn"] }}
                  </button>
                </div>
              </div>
            </div>
            <div
              class="col-6 sm_w-100"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-offset="400"
            >
              <img
                class="w-90 sm_w-100"
                src="@/assets/images/Rectangle 1305789.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section" v-if="partners.length">
      <carouselPartners
        class="mt-80 owl-item-8"
        :item="8"
        :partners="partners"
      />
    </div>
    <Footer />
  </div>
</template>
<script>
import carouselPartners from "@/components/carouselPartners.vue";
import Icons from "@/components/icons.vue";
import countTo from "vue-count-to";

export default {
  components: { countTo, carouselPartners, Icons },
  data() {
    return {
      form: {},
      tab: "",
      review: 0,
      play: true,
      loading: true,
      partners: [],
      projects: [],
      categories: [],
      reviews: [],
      videoLoad: false,
    };
  },
  methods: {
    async sendForm() {
      if (!!this.form.full_name && !!this.form.phone_number) {
        await this.$axios.post("application/create", this.form);
        this.form = {};
        this.$toast.success("Успешнo");
      } else {
        this.$toast.error("Пожалуйста, заполните поля");
      }
    },
    videoLoaded() {
      this.videoLoad = !this.videoLoad;
    },
  },
  watch: {
    async tab() {
      this.loading = false;
      if (!!this.tab) {
        await this.$axios
          .get("/projects", { params: { category: this.tab } })
          .then((el) => {
            console.log(el);
            this.projects = el?.data?.results;
            this.projects.forEach((el) => {
              el?.images.forEach((k) => {
                k.title = el?.name;
              });
            });
          });
      } else {
        await this.$axios.get("/projects").then((el) => {
          console.log(el);

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
    review() {
      if (this.review == -1) {
        this.review = this.reviews.length - 1;
      } else if (this.review == this.reviews.length) {
        this.review = 0;
      }
    },
  },
  // async mounted() {
  //   const projects = await this.$axios.$get("/projects", {
  //     headers: {
  //       Language: this.$i18n.locale,
  //     },
  //   });
  //   this.projects = projects?.data?.results;
  //   this.projects.forEach((projects) => {
  //     projects?.images.forEach((k) => {
  //       k.title = projects?.name;
  //     });
  //   });
  //   console.log(this.projects);
  // },
  async mounted() {
    this.loading = false;
    const [partners, reviews, categories, projects] = await Promise.all([
      this.$axios.get("/partners", {
        headers: {
          Language: this.$i18n.locale,
        },
      }),
      this.$axios.get("/reviews", {
        headers: {
          Language: this.$i18n.locale,
        },
      }),
      this.$axios.get("/categories?page_size=10&page=1", {
        headers: {
          Language: this.$i18n.locale,
        },
      }),
      this.$axios.get("/projects", {
        headers: {
          Language: this.$i18n.locale,
        },
      }),
    ]);
    this.projects = projects?.data?.results;
    this.projects.forEach((projects) => {
      projects?.images.forEach((k) => {
        k.title = projects?.name;
      });
    });
    this.partners = partners?.data?.results;
    this.reviews = reviews?.data?.results;
    this.categories = categories?.data?.results;
    this.loading = true;
  },
  // async fetch() {
  //   this.loading = false;
  //   const [partners, reviews, categories, projects] = await Promise.all([
  //     this.$axios.get("/partners", {
  //       headers: {
  //         Language: this.$i18n.locale,
  //       },
  //     }),
  //     this.$axios.get("/reviews", {
  //       headers: {
  //         Language: this.$i18n.locale,
  //       },
  //     }),
  //     this.$axios.get("/categories?page_size=10&page=1", {
  //       headers: {
  //         Language: this.$i18n.locale,
  //       },
  //     }),
  //     this.$axios.get("/projects", {
  //       headers: {
  //         Language: this.$i18n.locale,
  //       },
  //     }),
  //   ]);
  //   this.projects = projects?.data?.results;
  //   this.projects.forEach((projects) => {
  //     projects?.images.forEach((k) => {
  //       k.title = projects?.name;
  //     });
  //   });
  //   this.partners = partners?.data?.results;
  //   this.reviews = reviews?.data?.results;
  //   this.categories = categories?.data?.results;
  //   this.loading = true;
  // },
};
</script>
