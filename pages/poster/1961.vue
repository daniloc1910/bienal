<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1961"
            artista="Luís Olvaldo Vanni"
            descricao="Ciccillo Matarazzo deixa de ser o único mecenas da Bienal, e o evento passa por sua primeira crise econômica. A sexta edição ficou conhecida pelo caráter museológico e o predomínio do neoconcretismo, evidenciado pela presença revolucionária dos Bichos de Lygia Clark. Parte do júri de seleção é eleita pelos artistas. Primeira vez que a exposição recebe a delegação da URSS."
            img="61"
            info="Realizada pelo MAM-SP<br>
Presidente do MAM-SP: Ciccillo Matarazzo<br>
Diretor geral: Mário Pedrosa<br>
No júri de seleção: Bruno Giorgi, Ferreira Gullar, Lourival Gomes Machado<br>
No júri de premiação: James Johnson Sweeney (Kunstammlung NRW, Düsseldorf)"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1961'
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