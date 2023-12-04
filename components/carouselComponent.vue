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
          <img src="@/assets/svg/arrow.svg" alt="" />
        </button>
        <button class="carousel_btn_r" @click="$refs.next.click()">
          <img src="@/assets/svg/arrow.svg" alt="" />
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
        <img src="@/assets/svg/closeCB.svg" alt="" />
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
