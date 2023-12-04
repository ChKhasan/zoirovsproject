<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "default",
  mounted(){
    this.$axios.setHeader('Language', this.$i18n.locale)
  }
}
</script>

<style scoped>

</style>
