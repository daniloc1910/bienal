<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1957"
            artista="Alexandre Wollner"
            descricao="Processo de seleção de obras e influência demasiada de Ciccillo Matarazzo foram contestados pelos artistas brasileiros. Esta foi a primeira vez em que a Bienal realizou-se no espaço que viria a ser sua permanente sede, no Pavilhão das Indústrias do Parque Ibirapuera. Polêmicas marcaram a edição, quando nomes consagrados no cenário artístico nacional, como Flávio de Carvalho, tiveram seus trabalhos recusados pelo júri. O pintor expressionista abstrato Jackson Pollock, falecido no ano anterior, foi apresentado em uma sala especial, organizada pela representação americana, em pleno auge de seu reconhecimento internacional."
            img="57"
            info="Realizada pelo MAM-SP<br>Presidente do MAM-SP: Ciccillo Matarazzo<br>Diretor Artístico: Sérgio Milliet<br>Diretor Técnico: Wolfgang Pfeiffer<br>No júri de seleção: Lívio Abramo, Lourival Gomes Machado<br>No júri de premiação: Alfred Barr (MoMA), Maria Martins"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1957'
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