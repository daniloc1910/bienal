<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="2002"
            artista="Benjamin Yung e Guilherme Facci"
            descricao="Centrada no tema Iconografias metropolitanas, a 25ª Bienal tornou-se famosa pela presença numerosa de artistas brasileiros fora do eixo São Paulo/Rio de Janeiro. A nomeação do primeiro curador estrangeiro, o alemão Alfons Hug, causou polêmica. No entanto, a mostra recebeu excelente acolhida e bateu recorde de público, com 668.428 visitantes."
            img="02"
            info="Presidente da Bienal: Carlos Bratke<br>
Curador-geral: Alfons Hug<br>
Curador Núcleo Brasileiro: Agnaldo Farias"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '2002'
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