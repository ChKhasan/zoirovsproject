<template>
      <div class="modal-viewer">
        <div class="image-viewer" v-if="projects?.images.length">
            <no-ssr>
            <carousel :dots="false" :nav="false" :margin="10" :loop='true' :center='false' :items="1">
                <template slot="prev"><span ref="prev"></span></template>
                <template slot="next"><span ref="next"></span></template>
                <img v-for="el,index in projects.images" :key="index" :src="el?.image">
            </carousel>
            </no-ssr>
        </div>
      </div>
</template>

<script>
export default {
  data(){
    return {
      tab: 1,
      imageVw: false,
      imgs: [],
    }
  },
    props:{
        projects:{
          type:Object,
          default: {},
        },
    }
}
</script>