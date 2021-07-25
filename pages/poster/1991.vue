<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1991"
            artista="Rico Lins"
            descricao="Apenas nessa edição a Bienal retomou o sistema de inscrições abertas, para artistas de todo o mundo. À frente da curadoria, João Cândido Galvão repetiu seu trabalho como curador dos setores de dança, música e teatro na edição anterior, e foi bem-sucedido ao trazer dois espetáculos inesquecíveis para a Bienal: Suz/O/Suz, do grupo catalão Fura dels Baus, e O Trilogie Antică: Medeea, Troienele, Electra, de Henrik Ibsen, narrado em latim e grego pela Companhia de Teatro Nacional de Bucareste."
            img="91"
            info="Presidente da Bienal: Jorge Eduardo Stockler<br>
Curador-geral: João Cândido Galvão<br>
Curadoria: Ana Helena Curti, Gloria Cristina Motta<br>
Comissão Técnica de Arte (CTA): Caciporé Torres, Carmen Velasco Portinho, Emilio Kalil, Evelyn Berg Ioschpe, João Cândido Galvão, José Américo Motta Pessanha, Luiz Aquila<br>
No júri de premiação: Casimiro Xavier de Mendonça, Fabio Magalhães, Maria Alice Milliet"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1991'
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