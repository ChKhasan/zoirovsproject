<template>
  <div class="b-menu">
    <div class="row h-100">
      <div class="col-5 sm_w-100 h-100">
        <div class="flex flex-col justify-between h-100">
          <div class="row py-24 px-30 sm_p-0">
            <div class="col-5 open-navbar">
              <nuxt-link @click.native="$emit('close', false)" class="flex" to="/">
                <img class="nav-logo" src="~/assets/svg/logo.svg" alt="err" />
              </nuxt-link>
            </div>
            <div class="col-7 open-navbar flex items-center sm_flex-end">
              <button
                @click="$emit('close', false)"
                class="nav_btn flex items-center gap-6"
              >
                <img src="@/assets/svg/close.svg" alt="" />
                {{ $store.state.translations["main.nav_close"] }}
              </button>
            </div>
          </div>
          <div class="flex justify-center items-end">
            <div class="flex b-menu-m flex-col gap-24 justify-center">
              <nuxt-link @click.native="$emit('close', false)" :to="localePath('/')">{{
                $store.state.translations["main.nav_home"]
              }}</nuxt-link>
              <nuxt-link
                @click.native="$emit('close', false)"
                :to="localePath('/catalog')"
                >{{ $store.state.translations["main.nav_catalog"] }}</nuxt-link
              >
              <nuxt-link
                @click.native="$emit('close', false)"
                :to="localePath('/about')"
                >{{ $store.state.translations["main.nav_company"] }}</nuxt-link
              >
              <nuxt-link
                @click.native="$emit('close', false)"
                :to="localePath('/contact')"
                >{{ $store.state.translations["main.nav_contact"] }}</nuxt-link
              >
            </div>
          </div>
          <div class="flex gap-24 flex-col">
            <div class="mv">
              <div class="flex justify-end b-menu_contact px-30">
                <div class="flex">
                  <nuxt-link
                    class="langs"
                    v-for="lang in langs"
                    :key="lang.id"
                    @click.native="$emit('close', false)"
                    :class="{ active: lang.code == langVal }"
                    :to="switchLocalePath(lang.code)"
                    >{{ lang.name }}</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-24">
              <div class="b-menu_contact flex justify-between items-center px-30">
                <a :href="`mailto:${$store.state.static_info['email']}`">{{
                  $store.state.static_info["email"]
                }}</a>
                <a :href="`tel:${$store.state.static_info['nbm']}`">{{
                  $store.state.static_info["nbm"]
                }}</a>
                <div class="flex dv">
                  <nuxt-link
                    class="langs"
                    v-for="lang in langs"
                    :key="lang.id"
                    @click.native="$emit('close', false)"
                    :class="{ active: lang.code == langVal }"
                    :to="switchLocalePath(lang.code)"
                    >{{ lang.name }}</nuxt-link
                  >
                </div>
              </div>
              <div class="flex b-menu_contact justify-between p-30 justify-between">
                <a :href="$store.state.static_info['telegram']">Telegram</a>
                <a :href="$store.state.static_info['instagram']">Instagram</a>
                <a :href="$store.state.static_info['facebook']">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dv col-7 h-100 relative">
        <img class="b-menu-bg" :src="projectImg?.image" alt="" />
        <div class="b-menu-link">
          <nuxt-link to="/catalog"
            >{{ project?.name }}<img src="@/assets/svg/vectorArr.svg" alt=""
          /></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      langVal: "ru",
      project: null,
      projectImg: null,
    };
  },
  props: {
    langs: {
      type: Array,
      default: [
        { id: 1, code: "ru", name: "Ру" },
        {
          id: 2,
          code: "en",
          name: "En",
        },
      ],
    },
  },
  async fetch() {
    const project = await this.$axios.get("/random_project");
    this.project = project?.data;
    this.projectImg = this.project?.images[
      Math.floor(Math.random() * this.project?.images.length)
    ];
  },
};
</script>
