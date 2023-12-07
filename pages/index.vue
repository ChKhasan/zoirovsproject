<template>
  <div class="master">
    <div class="section mt-176 hero">
      <HomeSwiper />
      <HomeAbout />
      <HomeServices />
    </div>

    <div class="section mt-120 sm_mt-32">
      <div
        class="col-10 sm_w-90 sm_px-0 section_title"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-offset="300"
      >
        <div class="port__header">
          <h1 class="port__title">Bizning ishlarimiz</h1>

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

    <div class="section" id="feedback">
      <div class="feedback">
        <div class="col-10 mx-auto sm_px-16 sm_w-100">
          <div class="flexer">
            <div class="">
              <div
                class="feedback_input"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-offset="400"
              >
                <h1>Buyurtma berish</h1>
                <span>
                  Hizmatlarimizdan foydlanish uchun ariza qoldiring va bizning
                  managerlarimiz sizga aloqaga chiqishadi
                </span>
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
            <div class="">
              <div class="cardo">
                <div class="vector">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="447"
                    height="436"
                    viewBox="0 0 447 436"
                    fill="none"
                  >
                    <path
                      d="M729.319 325.743C717.027 169.604 599.926 -34.8191 436.454 6.36782C284.887 44.5551 356.791 155.99 229.52 229.463C102.248 302.937 -34.8195 145.311 -154.399 244.743C-223.805 302.456 -240.002 414.46 -180.096 515.28C-120.196 616.098 15.8012 705.725 250.784 718.693C472.753 730.938 594.171 655.377 659.206 565.419C724.241 475.455 732.889 371.097 729.319 325.743Z"
                      stroke="white"
                      stroke-width="0.87"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M258.743 705.737C462.315 717.264 574.368 648.474 634.714 565.976C694.527 483.926 703.116 388.541 700.25 346.075C690.028 201.569 582.725 12.0979 431.538 46.0671C291.941 77.4321 353.373 177.559 235.731 244.344C232.436 246.201 229.072 247.933 225.646 249.536C134.442 292.216 38.7709 221.467 -49.6635 233.654C-73.671 236.962 -97.1873 246.265 -119.804 265.536C-184.86 320.969 -199.03 424.848 -143.05 517.719C-86.6933 610.989 40.7748 693.205 258.743 705.737Z"
                      stroke="white"
                      stroke-width="0.87"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M266.703 692.78C451.878 703.584 554.564 641.571 610.224 566.534C664.815 492.396 673.475 405.979 671.181 366.409C663.478 233.509 565.553 59.0277 426.623 85.7674C299.021 110.326 350.165 199.5 241.941 259.225C238.821 260.947 235.685 262.504 232.55 263.938C147.923 302.752 59.643 241.952 -21.0907 255.587C-43.1386 259.31 -64.6896 268.355 -85.2139 286.332C-145.915 339.504 -158.059 435.236 -106.003 520.164C-53.1854 605.884 65.7539 680.678 266.703 692.78Z"
                      stroke="white"
                      stroke-width="0.87"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M274.662 679.817C441.442 689.91 534.953 634.811 585.733 567.085C635.289 500.999 643.758 423.422 642.112 386.741C636.666 265.471 548.421 105.976 421.707 125.466C306.136 143.241 346.83 221.231 248.15 274.105C245.264 275.651 242.357 277.045 239.455 278.338C161.403 313.286 80.504 262.457 7.48218 277.519C-12.606 281.662 -32.1863 290.456 -50.624 307.126C-106.958 358.064 -117.088 445.622 -68.9568 522.603C-19.6775 600.774 90.7275 668.157 274.662 679.817Z"
                      stroke="white"
                      stroke-width="0.87"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M282.621 666.861C430.985 676.54 515.204 627.946 561.243 567.643C605.626 509.503 614.035 440.867 613.043 407.072C609.821 297.439 531.339 152.956 416.792 165.164C313.294 176.194 343.477 242.938 254.36 288.984C251.707 290.355 249.029 291.585 246.36 292.738C174.884 323.818 101.354 282.989 36.0549 299.45C17.9264 304.019 0.32785 312.572 -16.0286 327.918C-67.9852 376.658 -76.2987 456.121 -31.9104 525.048C13.6427 595.786 115.679 655.973 282.621 666.861Z"
                      stroke="white"
                      stroke-width="0.87"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M290.582 653.909C420.543 662.915 495.447 621.087 536.752 568.206C575.954 518.012 584.302 458.32 583.973 427.408C582.932 329.42 514.319 199.996 411.876 204.867C320.504 209.211 340.098 264.621 260.57 303.869C258.148 305.063 255.7 306.13 253.265 307.143C188.364 334.357 122.193 303.566 64.6277 321.386C48.4534 326.393 32.8588 334.711 18.5613 348.717C-28.9901 395.299 -35.3549 466.532 5.13609 527.492C47.1231 590.704 140.647 643.518 290.582 653.909Z"
                      stroke="white"
                      stroke-width="0.87"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M298.54 640.947C410.102 649.263 475.677 614.217 512.26 568.757C546.266 526.504 554.553 475.77 554.904 447.74C555.987 361.405 497.369 247.128 406.961 244.567C327.772 242.322 336.689 286.257 266.779 318.749C264.588 319.767 262.373 320.671 260.169 321.545C201.845 344.891 143.032 324.196 93.2006 343.319C78.9749 348.776 65.4006 356.868 53.1512 369.511C10.0435 413.992 5.59975 476.934 42.1824 529.937C80.6089 585.616 165.615 631.042 298.54 640.947Z"
                      stroke="white"
                      stroke-width="0.87"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M306.499 627.99C399.662 635.589 455.886 607.335 487.769 569.315C516.557 534.986 524.78 493.224 525.834 468.072C528.962 393.396 480.925 290.238 402.044 284.265C334.718 279.168 333.24 307.83 272.988 333.63C271.027 334.469 269.043 335.213 267.072 335.946C215.325 355.427 163.882 344.899 121.768 365.252C109.502 371.181 97.97 379.052 87.741 390.306C49.149 432.764 46.571 487.325 79.2288 532.376C114.117 580.517 190.583 618.537 306.499 627.99Z"
                      stroke="white"
                      stroke-width="0.87"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M314.459 615.033C389.225 621.87 436.063 600.432 463.279 569.872C486.815 543.44 494.975 510.678 496.766 488.407C501.832 425.387 463.611 342.008 397.129 323.964C342.426 309.118 329.742 329.308 279.198 348.51C277.466 349.168 275.715 349.753 273.978 350.347C228.806 365.961 184.776 365.698 150.346 387.184C140.04 393.612 130.573 401.265 122.331 411.1C88.3704 451.642 87.5755 497.699 116.275 534.82C147.647 575.401 215.557 605.989 314.459 615.033Z"
                      stroke="white"
                      stroke-width="0.87"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M313.459 594.191C377.459 600.162 417.421 582.835 440.55 557.936C460.552 536.404 467.366 509.613 468.785 491.375C472.799 439.788 439.675 371.309 382.705 356.201C335.829 343.771 325.08 360.245 281.936 375.721C280.457 376.252 278.962 376.723 277.478 377.2C238.911 389.765 201.237 389.332 171.892 406.759C163.109 411.973 155.049 418.194 148.05 426.209C119.195 459.246 118.754 496.965 143.496 527.509C170.545 560.9 228.798 586.294 313.459 594.191Z"
                      stroke="white"
                      stroke-width="0.87"
                      stroke-miterlimit="10"
                    />
                  </svg>
                </div>
                <h4 class="title">Sizning qongirogingiz biz uchun muhim</h4>
                <img
                  src="@/assets/images/Rectangle 1305801.png"
                  alt=""
                  class="person"
                />
                <p class="name">MuhammadAzim Rasulov</p>
                <p class="sub">Manager</p>
              </div>
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
