<template>
  <div class="search-page">
    <div class="section mt-140">
      <div class="col-10 section_title">
        <div class="flex flex-col gap-24 items-center">
          <p class="search-res_p">Вы искали:</p>
          <h1 class="search-res_h">{{$route?.query?.search}}</h1>
          <span v-if="result.length==0" class="h-60v_100p search-res_nospan">к сожалению, ничего не найдено</span>
        </div>
      </div>
      <carouselComponent :res_item="3" v-for="el,index in result" :key="index" class="mt-40 owl-item-5" :item="5" :projects="el" />
    </div>
    <Footer />
  </div>
</template>
<script>
import Icons from "@/components/icons.vue"
export default {
  components: { Icons},
    data () {
      return {
        form: {},
        tab: 1,
        result: [],
      }
    },
    watch:{
     '$route.query': {
        immediate: true,
        handler(newVal) {
            this.$axios.get('/projects',{params:{search:this.$route.query.search}}).then((res)=>{
               this.result = res && res.data && res.data.results
               for(let k=0;k<this.result.length;k++){
                  for(let i=0;i<6;i++){
                    this.result[k]?.images?.push(...this.result[k]?.images)
                  }
                }
               this.result && this.result.forEach(el=>{
                  el?.images.forEach(k=>{
                    k.title = el?.name
                  })
                })
            })
          }
      }
    },
}
</script>