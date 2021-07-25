<template>
  <div class="container black-bg">
    <Header cor="white" />

    <div class="intro grid">
      <div class="intro-1"><div class="intro-1-txt h1 white">1951</div></div>
      <div class="linha-div white-bg" />
      <div class="intro-2"><div class="intro-2-txt h1 white">2021</div></div>
      <div class="linha-div white-bg" />
      <div class="intro-70 h1 white">70</div>
      <div class="intro-anos h1 white">anos</div>

      <div class="intro-text p white">
        Fundada em 8 de maio de 1962 pelo empresário Ciccillo Matarazzo, a
        instituição abriga ainda um arquivo histórico sobre arte moderna e
        contemporânea que é referência na América Latina. Suas ações têm como
        alvo democratizar o acesso à cultura e estimular o interesse pela
        criação artística.
        <br /><br />
        A Bienal é a primeira exposição de arte moderna de grande porte
        realizada fora dos centros culturais europeus e norte-americanos. Sua
        origem articula-se a uma série de outras realizações culturais em São
        Paulo - Museu de Arte de São Paulo Assis Chateaubriand - Masp (1947),
        Teatro Brasileiro de Comédia - TBC (1948), Museu de Arte Moderna de São
        Paulo - MAM/SP (1949) e Companhia Cinematográfica Vera Cruz (1949) - que
        aponta para o forte impulso institucional que as artes recebem na época,
        beneficiado por mecenas como Ciccillo Matarazzo e Assis Chateaubriand
        (1892 - 1968).
        <br /><br />
        Maior exposição do hemisfério sul, a Bienal é pautada por questões
        inovadoras do cenário contemporâneo e reúne mais de 500 mil pessoas por
        edição. Cada Bienal atrai olhares do mundo inteiro, movimenta a economia
        da cidade de São Paulo e reafirma as missões que guiaram seu surgimento:
        compromisso com as artes visuais, formação do olhar e desenvolvimento da
        cena cultural brasileira.
      </div>
    </div>

    <div class="posters grid">
      <PosterHome ano="51" link="1951" />
      <PosterHome ano="53" link="1953" />
      <PosterHome ano="55" link="1955" />
      <PosterHome ano="57" link="1957" />
      <PosterHome ano="59" link="1959" />
      <PosterHome ano="61" link="1961" />
      <PosterHome ano="63" link="1963" />
      <PosterHome ano="65" link="1965" />
      <PosterHome ano="69" link="1969" />
      <PosterHome ano="71" link="1971" />
      <PosterHome ano="73" link="1973" />
      <PosterHome ano="75" link="1975" />
      <PosterHome ano="77" link="1977" />
      <PosterHome ano="79" link="1979" />
      <PosterHome ano="81" link="1981" />
      <PosterHome ano="83" link="1983" />
      <PosterHome ano="85" link="1985" />
      <PosterHome ano="87" link="1987" />
      <PosterHome ano="89" link="1989" />
      <PosterHome ano="91" link="1991" />
      <PosterHome ano="94" link="1994" />
      <PosterHome ano="96" link="1996" />
      <PosterHome ano="98" link="1998" />
      <PosterHome ano="02" link="2002" />
      <PosterHome ano="04" link="2004" />
      <PosterHome ano="06" link="2006" />
      <PosterHome ano="08" link="2008" />
      <PosterHome ano="10" link="2010" />
      <PosterHome ano="12" link="2012" />
      <PosterHome ano="14" link="2014" />
      <PosterHome ano="16" link="2016" />
      <PosterHome ano="18" link="2018" />
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
