<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1994"
            artista="Fernando Bakos"
            descricao="A Bienal rompe o calendário e passa a acontecer nos anos pares. O segmento histórico assume grande importância na edição, cujo tema, Ruptura com o suporte, possibilitou explorar plataformas e poéticas observadas nas obras de Hélio Oiticica, Lygia Clark e Mira Schendel."
            img="94"
            info="Presidente da Bienal: Edemar Cid Ferreira<br>
Curador: Nelson Aguilar"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1994'
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