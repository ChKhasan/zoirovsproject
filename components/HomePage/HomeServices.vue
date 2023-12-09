<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">
        {{ $store.state.translations["main.our-services"] }}
      </h4>
      <div class="items">
        <div v-for="item in reviews" :key="item.id" class="item">
          <div class="left">
            <p class="name">
              {{ item.name }}
            </p>
            <div class="sub" v-html="item.text"></div>
          </div>
          <div class="right">
            <button @click="scrollElement('feedback')">
              {{ $store.state.translations["main.order-it"] }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["reviews"],

  mounted() {
    console.log(this.reviews);
  },

  methods: {
    scrollElement(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ block: "center", behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.wrap {
  padding: 144px 0 24px 0;
}
.title {
  margin-bottom: 44px;
  color: var(--ffda-79, #ffda79);
  font-family: Tinos;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 64px */
  letter-spacing: 2.56px;
}
.item {
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid#353437;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
  border-bottom: 0;
}
.name {
  color: var(--White, #fff);
  font-family: Bebas;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 12px;
  letter-spacing: 1.36px;
}
.name span {
  color: #ffda79;
}
.sub {
  color: var(--grey-8, #ebebeb);
  font-family: T1Interfaces;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  max-width: 750px;
  opacity: 0.8;
}
.right button {
  color: var(--Black, #020105);
  text-align: center;
  font-family: Bebas;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 20px;
  background: var(--ffda-79, #ffda79);
  padding: 24px 12px;
  border: 0;
  min-width: 200px;
}
.container {
  padding: 0;
  max-width: 1232px;
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 72px 0;
  }
  .container {
    padding: 0 16px;
  }
  .title {
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 43.2px */
    letter-spacing: 1.44px;
    text-align: center;
    margin-bottom: 32px;
  }
  .item {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .name {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: 0.96px;
  }
  .sub {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 24px;
  }
  .right button {
    padding: 12px;
    width: 100%;
    border-radius: 8px;
  }
  .right {
    width: 100%;
  }
}
</style>
