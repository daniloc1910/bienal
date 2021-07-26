<template>
  <div class="container black-bg">
    <div @click="$router.go(-1)" class="close-button medium-p white">
      Fechar
    </div>

    <div class="id-poster grid">
      <div class="anoautor">
        <div class="title white ano">2012</div>
        <div class="title white autor">
          30 cartazes elaborados por diferentes autores brasileiros
        </div>
      </div>

      <div class="description">
        <div class="p white">
          Intitulada A iminência das poéticas, essa edição da Bienal adotou a
          metáfora da constelação como proposta curatorial e estabeleceu
          articulações discursivas entre passado e presente; centro e periferia;
          objeto e linguagem. Com grande número de obras de cada artista, a
          exposição privilegiou artistas latino-americanos e prestou homenagens
          a Arthur Bispo do Rosário e Waldemar Cordeiro. O projeto Mobile Radio
          montou uma estação de rádio no mezanino do pavilhão, com programação
          que se estendeu por todo o período da exposição.
        </div>
      </div>

      <img class="poster" :src="require('~/assets/poster/12.jpeg')" />

      <img class="poster-pq" :src="require('~/assets/poster/12/12-2.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-3.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-4.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-5.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-6.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-7.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-8.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-9.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-10.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-11.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-12.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-13.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-14.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-15.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-16.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-17.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-18.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-19.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-20.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-21.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-22.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-23.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-24.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-25.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-26.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-27.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-28.jpeg')" />
      <img class="poster-pq" :src="require('~/assets/poster/12/12-29.jpeg')" />
    </div>

    <div class="grid">
      <div class="info">
        <div class="medium-p gray">
          Presidente da Bienal: Heitor Martins<br />
          Curador: Luis Pérez-Oramas<br />
          Curadores-adjuntos: André Severo, Tobi Maier<br />
          Curadora-assistente: Isabela Villanueva
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '2012',
    }
  },
}
</script>

<style scoped>
.container {
  height: 100vh;
}

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
  margin-top: 16px;
}

.poster-pq {
  grid-column: span 4;
  margin-bottom: 32px;
}

@media (max-width: 1023px) {
  .container {
    height: 100%;
  }

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

  .poster-pq {
    grid-column: span 1;
    margin-bottom: 20px;
  }
}
</style>
