<template>
  <div class="container white-bg">
    <Header cor="black" />

    <div class="intro grid">
      <div class="intro-1 h1 black">1951</div>
      <div class="linha-div black-bg" />
      <div class="intro-2 h1 black"><div class="intro-2-txt">2021</div></div>
      <div class="linha-div black-bg" />
      <div class="intro-70 h1 black">70</div>
      <div class="intro-anos h1 black">anos</div>

      <img
        class="sobre-fotobienal"
        :src="require('~/assets/img/bienal-sobre.jpeg')"
      />
      <div class="sobre-fotobienal-credits small-p gray">
        © Levi Fanan<br />Fundação Bienal de São Paulo
      </div>
      <div class="sobre-fotobienal-text p black">
        Projetado por Oscar Niemeyer entre 1951 e 1954 para o IV Centenário da
        cidade de São Paulo, o Pavilhão Ciccillo Matarazzo é tombado pelo
        patrimônio histórico (Conpresp, Condephaat e Iphan). A primeira Bienal a
        ser realizada no edifício foi a 4ª edição (1957). Antes disso, o evento
        ocupou um pavilhão provisório localizado na Esplanada do Trianon, na
        região da Avenida Paulista e ainda o Palácio dos Estados (atual Pavilhão
        das Culturas Brasileiras) e o Palácio das Nações (atual Museu Afro
        Brasil). Estes edifícios, bem como o MAC-USP, o MAM-SP, o Pavilhão Lucas
        Nogueira Garcez (Oca), a marquise e o Auditório Ibirapuera integram o
        complexo arquitetônico idealizado por Oscar Niemeyer para o Parque do
        Ibirapuera.
      </div>
    </div>

    <div class="aloisio grid">
      <div class="aloisio-title h1 black">Aloísio Magalhães</div>

      <div class="profile-aloisio">
        <img
          class="foto-aloisio"
          :src="require('~/assets/img/aloisiomagalhaes.jpeg')"
        />
        <div class="foto-aloisio-description small-p gray">
          © Aloisio em reunião na Secretaria da Cultura, em 1982.<br />Imagem:
          fotógrafo desconhecido / acervo Aloisio Magalhães
        </div>
      </div>

      <div class="texto-aloisio p black">
        Aloísio Sérgio Barbosa de Magalhães
        <br /><br />(Recife, 5 de novembro de 1927 — Pádua, 13 de junho de 1982)
        foi um designer gráfico brasileiro criador do símbolo da Bienal
        Internacional de São Paulo em 1965. O símbolo foi pensado originalmente
        como expressão tridimensional, tal qual uma escultura. Baseada na
        aproximação visual das letras “b” e “i”, formando a sílaba “bi”, o sinal
        foi criado para a Fundação Bienal de São Paulo a partir de um concurso
        restrito à participação de poucos profissionais. Com o projeto, Aloisio
        Magalhães conquistou o primeiro lugar. <br /><br />
        Durante a década de 1960, também foi responsável pela criação do
        logotipo referente ao IV Centenário do Rio de Janeiro, apresentou o
        primeiro símbolo da emissora de televisão Rede Globo e foi um dos
        representantes no país na 1.ª Bienal Internacional de Desenho Industrial
        do Museu de Arte Moderna do Rio de Janeiro, é considerado pioneiro na
        introdução do design moderno no Brasil, tendo ajudado a fundar a
        primeira instituição superior de design no país, intitulada como Escola
        Superior de Desenho Industrial do Rio de Janeiro (ESDI).
        <br /><br />
        Em 1998, o presidente Fernando Henrique Cardoso (FHC) edita o Decreto 7
        508 para definir 5 de novembro como "Dia Nacional do Design", em
        homenagem ao dia em que Aloísio Magalhães nasceu e pelo mesmo ter sido o
        pioneiro design gráfico no Brasil.
      </div>
    </div>

    <Footer corbg="black-bg" cor="black" />
  </div>
</template>

<style scoped></style>
