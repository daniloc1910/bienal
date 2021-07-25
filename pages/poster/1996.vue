<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1996"
            artista="Louise Bourgeois"
            descricao="Novo recorde de representações, 87 países aderiram ao tema proposto por Nelson Aguilar: A desmaterialização da arte no final do milênio. Na ocasião, um Núcleo Histórico trouxe mais de duzentas gravuras de Francisco de Goya, ilustrou a obra póstuma de Jean-Michael Basquiat e apresentou o terceiro andar do pavilhão com 37 pinturas de Edvard Munch."
            img="96"
            info="Presidente da Bienal: Edemar Cid Ferreira<br>
Curador-geral: Nelson Aguilar<br>
Curador-adjunto: Agnaldo Farias<br>
Coordenador Salas Especiais: Per Hovdenakk<br>
Curadores da exposição Universalis: Tadayasu Sakai (Japão), Jean-Hubert Martin (França), Mari Carmen Ramírez (Porto Rico), Paul Schimmel (EUA), Katalin Néray (Hungria), Achille Bonito Oliva (Itália), Nelson Aguilar, Agnaldo Farias"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1996'
        }
    }
}
</script>

<style scoped>
    .container {
        height: 100vh;
    }

    @media (max-width: 1023px) {
        .container {
            height: 100%;
        }
    }
</style>