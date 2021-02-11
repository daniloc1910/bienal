<template>
  <div class="container black-bg">

    <Header cor="white" />

    <div class="intro grid">
      <div class="intro-1 h1 white">1951</div>
      <div class="linha-div white-bg" />
      <div class="intro-2 h1 white">2021</div>
      <div class="linha-div white-bg" />
      <div class="intro-70 h1 white">70</div>
      <div class="intro-anos h1 white">anos</div>

      <div class="intro-text p white">
        Fundada em 8 de maio de 1962 pelo empresário Ciccillo Matarazzo, a instituição abriga ainda um arquivo histórico sobre arte moderna e contemporânea que é referência na América Latina. Suas ações têm como alvo democratizar o acesso à cultura e estimular o interesse pela criação artística.
        <br><br>
        A Bienal é a primeira exposição de arte moderna de grande porte realizada fora dos centros culturais europeus e norte-americanos. Sua origem articula-se a uma série de outras realizações culturais em São Paulo - Museu de Arte de São Paulo Assis Chateaubriand - Masp (1947), Teatro Brasileiro de Comédia - TBC (1948), Museu de Arte Moderna de São Paulo - MAM/SP (1949) e Companhia Cinematográfica Vera Cruz (1949) - que aponta para o forte impulso institucional que as artes recebem na época, beneficiado por mecenas como Ciccillo Matarazzo e Assis Chateaubriand (1892 - 1968).
        <br><br>
        Maior exposição do hemisfério sul, a Bienal é pautada por questões inovadoras do cenário contemporâneo e reúne mais de 500 mil pessoas por edição. Cada Bienal atrai olhares do mundo inteiro, movimenta a economia da cidade de São Paulo e reafirma as missões que guiaram seu surgimento: compromisso com as artes visuais, formação do olhar e desenvolvimento da cena cultural brasileira.
      </div>
    </div>

    <div class="posters grid">
      <PosterHome ano='51' img='1.jpg' link="/poster/1951" />
      <PosterHome ano='53' img='2.jpg' link="#" />
      <PosterHome ano='55' img='3.jpg' link="#" />
      <PosterHome ano='57' img='4.jpg' link="#" />
    </div>      

    <Footer corbg="white-bg" cor="white" />

  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.carousel {
  grid-column: 1/7;
  height: 100%;
}

.masonry {
  grid-column: 1/13;
}

.carousel-cell {
  width: 100%;
  height: 100vh;
}
</style>