<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1951"
            artista="Antônio Maluf"
            descricao="A primeira edição da Bienal foi realizada pelo Museu de Arte Moderna de São Paulo (MAM-SP) em um pavilhão provisório localizado na Esplanada do Trianon, na região da Avenida Paulista. Na edição, o primeiro Aparelho cinecromático (1949) de Abraham Palatnik foi recusado por não se encaixar nas categorias previstas. Posteriormente, a obra seria aceita e receberia uma menção especial do júri internacional."
            img="51"
            info="Realizada pelo MAM-SP<br>Presidente MAM-SP: Ciccillo Matarazzo<br>Diretor artístico: Lourival Gomes Machado<br>No júri de seleção: Clóvis Graciano, Ciccillo Matarazzo<br>No júri de premiação: Sérgio Milliet, René d'Harnoncourt (MoMA)"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1951'
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