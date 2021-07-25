<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1998"
            artista="Leonilson; Raul Loureiro e Rodrigo Cerviño Lopez"
            descricao="Conhecida como uma das melhores Bienais já feitas, a “Bienal da Antropofagia” teve como curador-geral Paulo Herkenhoff e como curador-adjunto Adriano Pedrosa. O conceito, extraído das raízes da cultura brasileira, permeou o trabalho de todos os 76 curadores envolvidos com a exposição, assim como resultou em potentes exposições individuais dedicadas a cada uma das 53 Representações Nacionais. A curadoria trabalhou com ideia de contaminação e pôs em diálogo obras de brasileiros contemporâneos com obras do Núcleo Histórico."
            img="98"
            info="Presidente da Bienal: Julio Landman<br>
Curador-geral: Paulo Herkenhoff<br>
Curador-adjunto: Adriano Pedrosa"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1998'
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