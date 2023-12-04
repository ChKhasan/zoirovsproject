<template>
    <div class="mx-30">
      <div class="flex justify-between items-center mb-32 mt-8">
        <div class="flex gap-24">
          <h3 class="flex items-center font-64 sm_font-32">Наши клиенты</h3>
        </div>
        <div class="carousel_btn mr-32 dv gap-12 flex">
          <button class="c02587C" @click="$refs.prev.click()">
              <Icons color="#02587C" icon="arrow"/>
          </button>
          <button class="carousel_btn_r c02587C" @click="$refs.next.click()">
              <Icons color="#02587C" icon="arrow"/>
          </button>
        </div>
      </div>
      <no-ssr>
        <carousel :dots="false" :nav="false" :margin="10" :loop="true" :autoplay="true" :responsive="{0:{items:3},900:{items:(item-2)}}" :items="item">
            <template slot="prev"><span ref="prev"></span></template>
            <template slot="next"><span ref="next"></span></template>
            <img v-for="el,index in partners" :key="index" :src="el.image">
      </carousel>
      </no-ssr>
    </div>
</template>
<script>
export default {
    props:{
        partners:{
          type:Array,
          default: [],
        },
        item:{
          type:Number,
          default: 3,
        },
    }
}
</script>