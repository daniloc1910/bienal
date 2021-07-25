<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="2010"
            artista="André Stolarski, Aninha de Carvalho e Felipe Kaizer"
            descricao="Com novo fôlego promovido por uma Diretoria comprometida com a renovação institucional, a Bienal inaugurou sua 29ª edição com um projeto educativo permanente e uma ampla programação paralela. Privilegiando obras de cunho político, a curadoria de Agnaldo Farias e Moacir dos Anjos destinou cerca de 400 atividades a seis espaços conceituais intitulados Terreiros, e estabeleceu como tema um verso de um poema de Jorge de Lima: Há sempre um copo de mar para um homem navegar. Causou polêmica a instalação Bandeira branca (2010), de Nuno Ramos, com urubus vivos voando pelo vão central do pavilhão, acompanhados por uma montagem de sons do cancioneiro nacional."
            img="10"
            info="Presidente da Bienal: Heitor Martins<br>
Curadores-chefes: Agnaldo Farias e Moacir dos Anjos<br>
Curadores-convidados: Chus Martinez (Espanha), Fernando Alvim (Angola), Rina Carvajal (Venezuela), Sarat Maharaj (África do Sul/Inglaterra), Yuko Hasegawa (Japão)"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '2010'
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