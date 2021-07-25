<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1955"
            artista="Alexandre Wollner"
            descricao="A mais lembrada entre todas as Bienais, é conhecida como “Bienal da Guernica”, referenciando a mais famosa obra de Pablo Picasso, de 1937. Com quase o dobro de obras em relação à edição anterior, a 2ª Bienal foi realizada já no Parque Ibirapuera, aproveitando sua inauguração e ocupando dois pavilhões projetados por Oscar Niemeyer (1907-2012): o Palácio dos Estados (atual Pavilhão das Culturas Brasileiras) e o Palácio das Nações (atual Museu Afro Brasil). Estende-se até o ano seguinte, para fazer parte das comemorações do 4º Centenário da cidade de São Paulo."
            img="55"
            info="Realizada pelo MAM-SP<br>Presidente do MAM-SP: Ciccillo Matarazzo<br>Diretor Artístico: Sérgio Milliet<br>Diretor Técnico: Wolfgang Pfeiffer<br>No júri de seleção: Clóvis Graciano, Tomás Santa Rosa<br>No júri de premiação: Mário Pedrosa"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1955'
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