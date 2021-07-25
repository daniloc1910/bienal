<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1979"
            artista="Carlos Clémen"
            descricao="A Bienal das Bienais foi uma retrospectiva das últimas catorze edições e trouxe para o pavilhão trabalhos nacionais e internacionais premiados desde 1951, além de artistas selecionados pela Associação Brasileira de Críticos de Arte (ABCA). Ao mesmo tempo, foi a primeira Bienal sem premiações, o que se perpetuaria definitivamente a partir da edição seguinte."
            img="79"
            info="Presidente da Bienal: Luiz Fernando Rodrigues Alves<br>
Assessor cultural: Carlos von Schmidt<br>
Conselho de Arte e Cultura: Casimiro Xavier de Mendonça, Emmanuel von Lauenstein Massarani, Esther Emílio Carlos, Geraldo Edson de Andrade, João Cândido Martins Galvão Barros, Pedro Manuel Gismondi, Radha Abramo, Wolfgang Pfeiffer<br>
Júri de seleção: Associação Brasileira de Críticos de Arte"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1979'
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