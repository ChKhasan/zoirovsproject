<template>
  <div
    class="icon"
    :class="this.color"
    :id="id"
  >
    <svg :id="id" v-if="this.size == 'sm'" width="16" height="16" viewBox="0 0 24 24" fill="none" v-html="chosenIcon" xmlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else-if="this.size == 'middle'" width="20" height="20" viewBox="0 0 24 24" fill="none" v-html="chosenIcon" xmlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else-if="this.size == '32'" width="32" height="32" viewBox="0 0 24 24 " fill="none" v-html="chosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else-if="this.size == 'large'" width="36" height="36" viewBox="0 0 24 24 " fill="none" v-html="chosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else-if="this.size == '48'" width="48" height="48" viewBox="0 0 24 24 " fill="none" v-html="chosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else width="24" height="24" viewBox="0 0 24 24 " fill="none" v-html="chosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
  </div>
</template>

<script>
export default {
  name: 'chosenIcon',

  data() {
    return {
      icons: {
        arrow: `
          <path d="M10.3333 3.25L2 11.5833M2 11.5833L10.3333 19.9167M2 11.5833L22 11.5833" stroke="${this.color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        `,
      },
    }
  },

  computed: {
    chosenIcon() {
      return this.icons[this.icon]
    },
  },

  props: {
    icon: String,
    size: String,
    color: String,
    id: String,
  },
}
</script>

<style>

</style>