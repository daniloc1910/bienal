<template>
  <div class="id-poster grid">
    <div class="anoautor">
      <div class="title white ano">{{ ano }}</div>
      <div class="title white autor">{{ artista }}</div>
    </div>

    <div class="description">
      <div class="p white">{{ descricao }}</div>
    </div>

    <img class="poster" :src="require('~/assets/poster/' + img + '.jpeg')" />
    <img
      v-if="img2"
      class="poster"
      :src="require('~/assets/poster/' + img2 + '.jpeg')"
    />
    <img
      v-if="img3"
      class="poster"
      :src="require('~/assets/poster/' + img3 + '.jpeg')"
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

@media (max-width: 1023px) {
  .title {
    font-size: 48px;
  }
  .anoautor {
    grid-column: 1/3;
    padding-top: 160px;
  }

  .description {
    grid-column: 1/3;
    margin-top: 32px;
  }

  .poster {
    grid-column: 1/3;
  }

  .info {
    grid-column: 1/3;
  }
}
</style>
