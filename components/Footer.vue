<template>
  <div class="footer">
    <div class="col-10 mx-auto sm_px-16 sm_w-100">
      <div class="row sm_mb-32">
        <div v-if="$store.state.static_info" class="col-6 footer_contact">
          <p>{{ $store.state.translations["main.our_number"] }}</p>
          <a
            class="yellow__claw"
            tag="span"
            :href="`tel:${$store.state.static_info['nbm']}`"
            >{{ $store.state.static_info["nbm"] }}</a
          >
        </div>
        <div v-if="$store.state.static_info" class="col-6 footer_contact">
          <p>{{ $store.state.translations["main.our_email"] }}</p>
          <a tag="span" :href="`mailto:${$store.state.static_info['email']}`">{{
            $store.state.static_info["email"]
          }}</a>
        </div>
        <div v-if="$store.state.static_info" class="col-6 footer_contact">
          <p>{{ $store.state.translations["main.our_adress"] }}</p>
          <span>{{ $store.state.static_info["adres"] }}</span>
          <!-- <span>Чиланзарский район, массив Чиланзор, квартал И, 11</span> -->
        </div>
        <div v-if="$store.state.static_info" class="col-6 footer_contact">
          <p>{{ $store.state.translations["main.our_mess"] }}</p>
          <div class="flex justify-between gap-24">
            <a target="_blank" :href="$store.state.static_info['telegram']"
              >Telegram</a
            >
            <a target="_blank" :href="$store.state.static_info['instagram']"
              >Instagram</a
            >
            <a :href="$store.state.static_info['facebook']"></a>
          </div>
        </div>
      </div>
      <div
        v-if="$store.state.static_info"
        class="flex justify-between sm_flex-col sm_gap-32"
      >
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
export default {};
</script>
