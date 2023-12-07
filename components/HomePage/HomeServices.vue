<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">Bizning hizmatlar</h4>
      <div class="items">
        <div class="item">
          <div class="left">
            <p class="name">
              <span> Arxitektura </span> chizmasini chizib beramiz
            </p>
            <p class="sub">
              Воплотите дом своей мечты в жизнь с помощью индивидуального
              дизайна и подобранных вручную продуктов, адаптированных к вашему
              стилю, пространству и бюджету.
            </p>
          </div>
          <div class="right">
            <button>Buyurtma berish</button>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <p class="name">
              Sizga va oyilangiz talablaridan kelib chiqib
              <span> uyingiz dizaynini </span>
              chizib beramiz
            </p>
            <p class="sub">
              Воплотите дом своей мечты в жизнь с помощью индивидуального
              дизайна и подобранных вручную продуктов, адаптированных к вашему
              стилю, пространству и бюджету.
            </p>
          </div>
          <div class="right">
            <button>Buyurtma berish</button>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <p class="name">
              <span> Qurilish jarayonini nazorat </span> qilib beramiz
              (Avtorskiy nadzor)
            </p>
            <p class="sub">
              Воплотите дом своей мечты в жизнь с помощью индивидуального
              дизайна и подобранных вручную продуктов, адаптированных к вашему
              стилю, пространству и бюджету.
            </p>
          </div>
          <div class="right">
            <button>Buyurtma berish</button>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <p class="name">Mebelchilarni topib beramiz</p>
            <p class="sub">
              Воплотите дом своей мечты в жизнь с помощью индивидуального
              дизайна и подобранных вручную продуктов, адаптированных к вашему
              стилю, пространству и бюджету.
            </p>
          </div>
          <div class="right">
            <button>Buyurtma berish</button>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <p class="name">Qurilish va remont xizmatlarini ko’rsatamiz</p>
            <p class="sub">
              Воплотите дом своей мечты в жизнь с помощью индивидуального
              дизайна и подобранных вручную продуктов, адаптированных к вашему
              стилю, пространству и бюджету.
            </p>
          </div>
          <div class="right">
            <button>Buyurtma berish</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
