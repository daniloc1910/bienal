<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1985"
            artista="Cláudia Stamacchia"
            descricao="Essa edição mostrou a tendência expressionista na pintura contemporânea e uma expografia inusitada que pautaram o debate ao longo de toda a 18ª Bienal. A curadora Sheila Leirner dispôs boa parte das obras em três corredores de cem metros de extensão, instalou dezenas de quadros lado a lado – uma disposição que denominou a Grande Tela."
            img="85"
            info="Presidente da Bienal: Roberto Muylaert<br>
Curadoria-geral: Sheila Leirner<br>
No Conselho de Arte e Cultura: Sábato Magaldi, Casimiro Xavier de Mendonça, Renina Katz"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1985'
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