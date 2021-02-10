<template>
  <n-link class="thumb" :to="link">

    <div class="ano h1 white">{{ano}}</div>
    <img class="header-logo" :src="require('~/assets/poster/'+img)">

  </n-link>
</template>

<script>
export default {
  props: {
    ano: {
      type: String
    },
    img: {
      type: String
    },
    link: {
      type: String
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

  @media (max-width: 1023px) {

    .thumb {
        grid-column: span 2;
        margin-bottom: 100px;
    }
      
    .ano {
        margin-bottom: 20px;
    }
  }
</style>