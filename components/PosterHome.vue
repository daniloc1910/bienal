<template>
  <div class="thumb">

    <div class="ano h1 white">{{ano}}</div>
    
    <n-link :to="link">
        <img class="header-logo" :src="require('~/assets/poster/'+img)" />
    </n-link>

  </div>
</template>

<script>
export default {
  props: {
    ano: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
    .thumb {
        grid-column: span 6;
        margin-bottom: 40px;
    }

    .ano {
        margin-bottom: 40px;
    }
</style>