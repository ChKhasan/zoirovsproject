<template>
    <div class="">
      <div class="flex justify-between items-center mb-32 mt-8">
        <div class="flex gap-24">
          <h3 class="flex items-center font-64 sm_font-32">{{ $store.state.translations["aboutUs.our_team"] }}</h3>
        </div>
      </div>
      <no-ssr>
        <carousel :dots="false" :nav="false" :margin="10" :loop="true" :autoplay="true" :responsive="{0:{items:2},900:{items:(item-2)}}" :items="item">
            <template slot="prev"><span ref="prev"></span></template>
            <template slot="next"><span ref="next"></span></template>
            <div v-for="el,index in projects" :key="index" class="flex flex-col">
              <img :src="el?.[label]">
              <p class="team_name">{{el.full_name}} </p>
              <span class="team_position">{{el.full_name}}</span>
            </div>
      </carousel>
      </no-ssr>
    </div>
</template>
<script>
export default {
    props:{
        projects:{
          type:Array,
          default: [],
        },
        item:{
          type:Number,
          default: 3,
        },
        label:{
          type:String,
          default: 'image',
        },
    }
}
</script>