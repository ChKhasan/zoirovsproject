<template>
  <div class="">
    <div class="section mt-140 p-30">
      <div class="col-10 sm_w-100 sm_p-0 section_title">
        <h1 data-aos="fade-left" data-aos-duration="1000">
          {{ $store.state.translations["main.about_us"] }}
        </h1>
      </div>
      <div class="col-12 mt-32">
        <div class="relative" data-aos="zoom-in" data-aos-duration="1000">
          <video
            ref="video"
            width="320"
            height="240"
            class="videomodal_img w-100"
            autoplay
            muted
            playsinline
            loop
          >
            <source src="@/assets/videos/pexels.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="mt-60">
          <div class="flex col-10 mx-auto justify-center gap-24 sm_flex-wrap">
            <div
              class="w-50 sm_w-100 section_title"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <h3 class="mb-24 sm_mb-8">
                {{ $store.state.translations["main.aboutCompany_title"] }}
              </h3>
              <p>
                {{ $store.state.translations["aboutUs.text"] }}
              </p>
            </div>
            <div class="w-50 sm_w-100">
              <div class="flex send_app_stat justify-between">
                <div class="" data-aos="fade-right" data-aos-duration="800">
                  <p
                    v-html="$store.state.translations['main.countUp_text1']"
                  ></p>
                  <div class="flex">
                    <count-to
                      :startVal="0"
                      :endVal="$store.state.translations['main.count_up1']"
                      :duration="4000"
                    ></count-to
                    ><span>+</span>
                  </div>
                </div>
                <div class="" data-aos="zoom-in" data-aos-duration="800">
                  <p
                    v-html="$store.state.translations['main.countUp_text2']"
                  ></p>
                  <div class="flex">
                    <count-to
                      :startVal="0"
                      :endVal="$store.state.translations['main.count_up2']"
                      :duration="4000"
                    ></count-to
                    ><span>+</span>
                  </div>
                </div>
                <div class="" data-aos="fade-left" data-aos-duration="800">
                  <p
                    v-html="$store.state.translations['main.countUp_text3']"
                  ></p>
                  <div class="flex">
                    <count-to
                      :startVal="0"
                      :endVal="$store.state.translations['main.count_up3']"
                      :duration="4000"
                    ></count-to
                    ><span>+</span>
                  </div>
                </div>
              </div>
              <div class="sm_w-100" data-aos="zoom-in" data-aos-duration="800">
                <a tag="button" href="#feedback" class="show_more mt-32">
                  {{ $store.state.translations["aboutUs.btn_text"] }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="section p-30">
      <div class="flex gap-24 dv">
        <h3 class="flex items-center font-64 sm_font-32">
          {{ $store.state.translations["aboutUs.our_team"] }}
        </h3>
      </div>
      <div class="team dv" data-aos="fade-right" data-aos-duration="800">
        <div class="team-member" v-for="(el, index) in workers" :key="index">
          <img :src="el.avatar" alt="" />
          <p>{{ el.full_name }}</p>
          <span>{{ el.title }}</span>
        </div>
      </div>
      <carouselTeam
        class="mv team-owl owl-item-6"
        :item="6"
        label="avatar"
        :projects="workers"
      />
    </div> -->
    <div class="section mt-30 md_mt-90 sm_mt-56">
      <div class="col-10 sm_w-90 sm_px-0 section_title">
        <p class="opacity-05">
          {{ $store.state.translations["main.portfolio_title"] }}
        </p>
        <div class="flex gap-24">
          <h1>{{ $store.state.translations["main.portfolio_subtitle"] }}</h1>
        </div>
      </div>
      <carouselComponent
        :res_item="3"
        v-if="projects[0]"
        class="mt-20 owl-item-3"
        :item="3"
        :projects="projects[0]"
      />
    </div>
    <div class="section mt-120 sm_mt-56">
      <div class="feedback" id="feedback">
        <div class="col-10 mx-auto sm_px-16 sm_w-100">
          <div class="row px-48">
            <div class="col-6 my-auto sm_w-100">
              <div
                class="feedback_input"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-offset="500"
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
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-offset="500"
            >
              <img
                class="w-90"
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
import carouselTeam from "@/components/carouselTeam.vue";
import countTo from "vue-count-to";
export default {
  components: { countTo, carouselTeam },
  data() {
    return {
      tab: 1,
      partners: [],
      form: {},
      workers: [],
      projects: [],
      play: false,
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
    playF() {
      if (this.play) {
        this.play = false;
        this.$refs.video.pause();
      } else {
        this.play = true;
        this.$refs.video.play();
      }
    },
  },
  computed: {
    targetLangCode() {
      return this.$i18n.locale;
    },
  },
  async fetch() {
    const [workers, partners, projects] = await Promise.all([
      this.$axios.get("/workers", {
        headers: {
          Language: this.$i18n.locale,
        },
      }),
      this.$axios.get("/partners", {
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
    this.workers = workers?.data?.results;
    this.partners = partners?.data?.results;
    this.projects = projects?.data?.results;
    this.projects.forEach((el) => {
      el?.images.forEach((k) => {
        k.title = el?.name;
      });
    });
  },

  watch: {
    targetLangCode(val) {
      this.$axios
        .get("/workers", {
          headers: {
            Language: val,
          },
        })
        .then((el) => {
          this.workers = el?.data?.results;
        });
      this.$axios
        .get("/partners", {
          headers: {
            Language: val,
          },
        })
        .then((el) => {
          this.partners = el?.data?.results;
        });
      this.$axios
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
    },
  },
};
</script>
