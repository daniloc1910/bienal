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

      <nuxt-img
        class="poster"
        src="/poster/12.jpg"
        sizes="s:100vw m:100vw l:100vw"
      />

      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-2.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-3.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-4.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-5.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-6.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-7.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-8.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-9.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-10.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-11.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-12.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-13.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-14.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-15.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-16.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-17.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-18.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-19.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-20.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-21.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-22.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-23.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-24.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-25.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-26.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-27.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-28.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
      <nuxt-img
        class="poster-pq"
        src="/poster/12/12-29.jpg"
        sizes="s:50vw m:50vw l:50vw"
      />
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
}
</style>
