<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="2016"
            artista="Aninha de  Carvalho, Adriano Campos e Roman Atamanczuk"
            descricao="Com público de aproximadamente 900 mil visitantes, maior visitação da última década, a edição sob a curadoria de Jochen Volz procurou enfocar noções de “incerteza” a fim de refletir sobre as condições atuais da vida e as estratégias oferecidas pela arte contemporânea para habitá-la. O aquecimento global, a perda da diversidade biológica e cultural, a crescente instabilidade econômica e política, a injustiça na distribuição dos recursos naturais da Terra foram questões em discussão. Mulheres e artistas nascidos após 1970 formaram mais da metade dos artistas selecionados. Uma pista de skate, uma oca para conversas e rituais e um restaurante de comida orgânica estiveram entre as obras da exposição."
            img="16"
            img2="16-2"
            img3="16-3"
            info="Presidente da Bienal: Luis Terepins<br>
Curador: Jochen Volz<br>
Cocuradores: Gabi Ngcobo, Júlia Rebouças, Lars Bang Larsen e Sofía Olascoaga"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '2016'
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