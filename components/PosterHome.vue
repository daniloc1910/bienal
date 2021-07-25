<template>
  <n-link class="thumb" :to="'/poster/' + link">
    <div class="ano h1 white">{{ ano }}</div>
    <nuxt-img :src="'/poster/' + ano + '.jpg'" sizes="s:100vw m:50vw l:50vw" />
  </n-link>
</template>

<script>
export default {
  props: {
    ano: {
      type: String,
    },
    link: {
      type: String,
    },
  },
}
</script>

<style scoped>
.thumb {
  grid-column: span 6;
  margin-bottom: 40px;
  transition: 0.6s;
}

.thumb:hover img {
  opacity: 0.4;
  transition: 0.6s;
}

.ano {
  margin-bottom: 30px;
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
