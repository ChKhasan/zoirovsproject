<template>
  <div class="wrap">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/images/hero.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/hero.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/hero.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/hero.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/hero.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/hero.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/hero.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/hero.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/hero.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/hero.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/hero.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/images/hero.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";

export default {
  mounted() {
    new Swiper(".swiper", {
      slidesPerView: 1.2,
      spaceBetween: 16,
      breakpoints: {
        1024: {
          slidesPerView: 1.5,
          spaceBetween: 24,
        },
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      loop: true,
      speed: 1000,
    });
  },
};
</script>

<style scoped>
.wrap {
  margin-bottom: 56px;
}
.swiper-slide img {
  width: 100%;
  height: 458px;
  display: flex;
  object-fit: cover;
}
@media screen and (max-width: 1024px) {
  .swiper-slide img {
    height: 224px;
  }
}
</style>
