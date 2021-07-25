<template>
  <div class="id-poster grid">
    <div class="anoautor">
      <div class="title white ano">{{ ano }}</div>
      <div class="title white autor">{{ artista }}</div>
    </div>

    <div class="description">
      <div class="p white">{{ descricao }}</div>
    </div>

    <nuxt-img
      class="poster"
      :src="'/poster/' + img + '.jpg'"
      sizes="s:100vw m:100vw l:100vw"
    />

    <nuxt-img
      v-if="img2"
      class="poster"
      :src="'/poster/' + img2 + '.jpg'"
      sizes="s:100vw m:50vw l:50vw"
    />

    <nuxt-img
      v-if="img3"
      class="poster"
      :src="'/poster/' + img3 + '.jpg'"
      sizes="s:100vw m:50vw l:50vw"
    />

    <div class="info">
      <div class="medium-p gray" v-html="info" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ano: {
      type: String,
    },
    artista: {
      type: String,
    },
    descricao: {
      type: String,
    },
    img: {
      type: String,
    },
    img2: {
      type: String,
    },
    img3: {
      type: String,
    },
    info: {
      type: String,
    },
  },
}
</script>

<style scoped>
.title {
  font-family: 'Helvetica Neue Medium', Helvetica, Arial, sans-serif;
  font-size: 80px;
  line-height: 90%;
  letter-spacing: -0.03em;
}

.anoautor {
  grid-column: 7/13;
  padding-top: 44px;
}

.description {
  grid-column: 7/13;
  margin-top: 500px;
  margin-bottom: 48px;
}

.poster {
  grid-column: 1/13;
  margin-bottom: 48px;
}

.info {
  grid-column: 9/13;
  margin-bottom: 100px;
}
</style>
