<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="2014"
            artista="Prabhakar Pachpute; Aninha de  Carvalho e Felipe Kaizer"
            descricao="Os trabalhos da edição – intitulada Como (...) coisas que não existem – foram concebidos dentro do conceito de “projeto”, muitos realizados em colaboração entre dois ou mais indivíduos: artistas e profissionais de outras disciplinas, como pedagogos, sociólogos, arquitetos ou escritores. Firmou-se como uma exposição profundamente conectada com alguns temas centrais da vida contemporânea: identidade, sexualidade e transcendência."
            img="14"
            info="Presidente da Bienal: Luis Terepins<br>
Curadores: Charles Esche, Pablo Lafuente, Nuria Enguita Mayo, Galit Eilat, Oren Sagiv<br>
Curadores associados: Benjamin Seroussi, Luiza Proença"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '2014'
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