<template>
  <div class="ml-30 sm_ml-16">
    <div
      class="flex justify-between items-center mb-36 sm_mb-16"
      data-aos="zoom-in"
      data-aos-duration="800"
    >
      <div class="flex gap-24 sm_gap-16 label_tag flex-wrap tags">
        <h3 class="flex items-center">{{ projects?.name }}</h3>
        <div class="flex gap-16 label_tag">
          <nuxt-link
            class="styles"
            v-for="(el, index) in projects?.styles"
            :key="index"
            :to="localePath({ name: 'styles', query: { styles: el.id } })"
            :class="{ active: $route.query.styles == el.id }"
            >{{ el?.title }}</nuxt-link
          >
        </div>
      </div>
      <div class="carousel_btn mr-32 gap-12 flex dv">
        <button @click="$refs.prev.click()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M18.3333 11.25L10 19.5833M10 19.5833L18.3333 27.9167M10 19.5833L30 19.5833"
              stroke="#9A999B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="carousel_btn_r" @click="$refs.next.click()">
          <svg
            style="transform: rotate(180deg)"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M21.6667 11.25L30 19.5833M30 19.5833L21.6667 27.9167M30 19.5833L10 19.5833"
              stroke="#9A999B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>

    <carousel
      :responsive="{ 0: { items: res_item }, 1000: { items: item } }"
      :dots="false"
      :nav="false"
      :center="false"
      :margin="10"
      :loop="true"
      :items="item"
    >
      <template slot="prev"><span ref="prev"></span></template>
      <template slot="next"><span ref="next"></span></template>
      <div
        v-for="(el, indexC) in projects?.images"
        :key="indexC"
        @click="changeIndex(indexC)"
      >
        <img :src="el?.image" />
      </div>
      <div
        v-for="(el, indexC) in projects?.images"
        :key="'k1' + indexC"
        @click="changeIndex(indexC)"
      >
        <img :src="el?.image" />
      </div>
      <div
        v-for="(el, indexC) in projects?.images"
        :key="'k2' + indexC"
        @click="changeIndex(indexC)"
      >
        <img :src="el?.image" />
      </div>
      <div
        v-for="(el, indexC) in projects?.images"
        :key="'k3' + indexC"
        @click="changeIndex(indexC)"
      >
        <img :src="el?.image" />
      </div>
      <div
        v-for="(el, indexC) in projects?.images"
        :key="'k4' + indexC"
        @click="changeIndex(indexC)"
      >
        <img :src="el?.image" />
      </div>
      <div
        v-for="(el, indexC) in projects?.images"
        :key="'k5' + indexC"
        @click="changeIndex(indexC)"
      >
        <img :src="el?.image" />
      </div>
      <div
        v-for="(el, indexC) in projects?.images"
        :key="'k6' + indexC"
        @click="changeIndex(indexC)"
      >
        <img :src="el?.image" />
      </div>
      <!-- <img
          @click="changeIndex(indexC)"
          v-for="(el, indexC) in projects?.images"
          :key="indexC"
          :src="el?.image"
        /> -->
      <!-- <img
          @click="changeIndex(indexC)"
          v-for="(el, indexC) in projects?.images"
          :key="'k1' + indexC"
          :src="el?.image"
        />
        <img
          @click="changeIndex(indexC)"
          v-for="(el, indexC) in projects?.images"
          :key="'k2' + indexC"
          :src="el?.image"
        />
        <img
          @click="changeIndex(indexC)"
          v-for="(el, indexC) in projects?.images"
          :key="'k3' + indexC"
          :src="el?.image"
        />
        <img
          @click="changeIndex(indexC)"
          v-for="(el, indexC) in projects?.images"
          :key="'k4' + indexC"
          :src="el?.image"
        />
        <img
          @click="changeIndex(indexC)"
          v-for="(el, indexC) in projects?.images"
          :key="'k5' + indexC"
          :src="el?.image"
        />
        <img
          @click="changeIndex(indexC)"
          v-for="(el, indexC) in projects?.images"
          :key="'k6' + indexC"
          :src="el?.image"
        /> -->
    </carousel>
    <CoolLightBox
      srcName="image"
      labelName="label"
      overlayColor="white"
      :fullScreen="false"
      :items="projects?.images"
      :index="index"
      @close="index = null"
    >
      <template #close>
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
            d="M15.187 16.9547C15.6751 17.4429 16.4666 17.4429 16.9547 16.9547C17.4429 16.4666 17.4429 15.6751 16.9547 15.187L10.7676 8.99981L16.9547 2.81267C17.4429 2.32451 17.4429 1.53306 16.9547 1.0449C16.4666 0.556746 15.6751 0.556746 15.187 1.0449L8.99982 7.23204L2.81261 1.04483C2.32445 0.556672 1.533 0.556672 1.04484 1.04483C0.556687 1.53298 0.556686 2.32444 1.04484 2.81259L7.23206 8.99981L1.04483 15.187C0.556672 15.6752 0.556672 16.4666 1.04483 16.9548C1.53298 17.443 2.32444 17.443 2.81259 16.9548L8.99982 10.7676L15.187 16.9547Z"
            fill="white"
          />
        </svg>
      </template>
      <template #icon-previous>
        <img src="@/assets/svg/arrow.svg" alt="" />
      </template>
      <template #icon-next>
        <img src="@/assets/svg/arrow.svg" alt="" />
      </template>
    </CoolLightBox>
    <!-- <imageviewer class="owl-item-imgVw-1" v-show="imageVw" :projects="projects"/> -->
  </div>
</template>
<script>
// import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  data() {
    return {
      imageVw: false,
      index: 1,
      value: 1,
    };
  },
  props: {
    projects: {
      type: Object,
      default: {},
    },
    responsive: {
      type: Number,
      default: 1,
    },
    res_item: {
      type: Number,
      default: 3,
    },
    item: {
      type: Number,
      default: 3,
    },
  },
  methods: {
    changeIndex(indexC) {
      this.index = indexC;
      console.log(this.index);
    },
  },
};
</script>
