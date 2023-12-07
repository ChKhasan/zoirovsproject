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
            <a :href="$store.state.static_info['telegram']">Telegram</a>
            <a :href="$store.state.static_info['instagram']">Instagram</a>
            <a :href="$store.state.static_info['facebook']">Facebook</a>
          </div>
        </div>
      </div>
      <div
        v-if="$store.state.static_info"
        class="flex justify-between sm_flex-col sm_gap-32"
      >
        <div class="location">
          <a class="mapper" href="https://yandex.uz/maps/-/CCU8FPv8wC"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <circle
                cx="12"
                cy="11.5"
                r="3"
                stroke="#FFDA79"
                stroke-width="1.5"
              />
              <path
                d="M21 11.3889C21 16.2981 15.375 22.5 12 22.5C8.625 22.5 3 16.2981 3 11.3889C3 6.47969 7.02944 2.5 12 2.5C16.9706 2.5 21 6.47969 21 11.3889Z"
                stroke="#FFDA79"
                stroke-width="1.5"
              /></svg
            >{{ $store.state.translations["main.show_map"] }}</a
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
export default {};
</script>
