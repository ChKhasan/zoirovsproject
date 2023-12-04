<template>
  <div class="conp mt-176">
    <div class="col-10 mx-auto sm_px-16 sm_w-100">
      <div class="col-10 sm_w-100 sm_p-0 section_title">
        <h1>{{ $store.state.translations["contact.title"] }}</h1>
      </div>
      <div class="row mt-80 sm_mt-40">
        <div class="col-6 sm_w-100">
          <div class="contact">
            <p>{{ $store.state.translations["main.our_number"] }}</p>
            <a tag="span" :href="`tel:${$store.state.static_info['nbm']}`">{{
              $store.state.static_info["nbm"]
            }}</a>
          </div>
          <div class="contact">
            <p>{{ $store.state.translations["main.our_email"] }}</p>
            <a tag="span" :href="`mailto:${$store.state.static_info['email']}`">{{
              $store.state.static_info["email"]
            }}</a>
          </div>
          <div class="contact">
            <p>{{ $store.state.translations["main.our_adress"] }}</p>
            <span>{{ $store.state.static_info["adres"] }}</span>
          </div>
          <div class="contact">
            <p>{{ $store.state.translations["main.our_mess"] }}</p>
            <div class="flex justify-between gap-24">
              <a :href="$store.state.static_info['telegram']">Telegram</a>
              <a :href="$store.state.static_info['instagram']">Instagram</a>
              <a :href="$store.state.static_info['facebook']">Facebook</a>
            </div>
          </div>
        </div>
        <div class="col-6 sm_w-100">
          <div class="contact_input">
            <div class="flex flex-col">
              <input
                v-model="form.full_name"
                type="text"
                :placeholder="$store.state.translations['main.contactName_placeholder']"
              />
              <input
                v-model="form.phone_number"
                v-mask="'+998-##-###-##-##'"
                type="text"
                :placeholder="$store.state.translations['main.contactNumber_placeholder']"
              />
              <button @click="sendForm">
                <p>{{ $store.state.translations["main.contact_btn"] }}</p>
              </button>
            </div>
            <div class="row contact_info">
              <div class="col-6">
                <span>{{ $store.state.translations["contact.text1"] }}</span>
              </div>
              <div class="col-6">
                <span>{{ $store.state.translations["contact.text2"] }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sm_mt-40 px-24 w-screen contact_map" v-html="$store.state.static_info['map']">
      <!-- <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.518982224086!2d69.29597237530507!3d41.31932680021525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7d761732dd%3A0x7b7e5180fa504771!2sIT%20Unity%20Academy!5e0!3m2!1sru!2s!4v1683191621341!5m2!1sru!2s"
        style="border: 0;width: 100%;height: 440px"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> -->
      <!-- <script
        type="text/javascript"
        charset="utf-8"
        src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab4a5b7c7b567b0013702debb6197fea2b9deef3de9947d60585f40c6c95b3112&amp;height=440&amp;lang=ru_RU&amp;scroll=true"
      ></script> -->
    </div>
    <div class="col-10 mx-auto my-40 sm_px-16 sm_w-100">
      <div class="flex justify-between sm_flex-col sm_gap-32">
        <div class="location">
          <a href="https://goo.gl/maps/fqEmgLhcFsJPEiUq8"
            ><img src="@/assets/svg/location.svg" alt="" />
            {{ $store.state.translations["main.show_map"] }}</a
          >
        </div>
        <div class="footer_menu flex gap-24">
          <nuxt-link to="/about">{{
            $store.state.translations["main.nav_company"]
          }}</nuxt-link>
          <nuxt-link to="/catalog">{{
            $store.state.translations["main.nav_catalog"]
          }}</nuxt-link>
          <nuxt-link to="/contact">{{
            $store.state.translations["main.nav_contact"]
          }}</nuxt-link>
        </div>
        <div class="certificate">
          <p>{{ $store.state.translations["main.footer_text"] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
    };
  },
  methods: {
    async sendForm() {
      await this.$axios.post("application/create", this.form);
      this.form = {};
    },
  },
};
</script>
