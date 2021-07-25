<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1975"
            artista="Rogério Batagliese e Maria Elisabeth S. Nogueira   "
            descricao="Disposta a atualizar-se, a chamada “Bienal dos videomakers” trouxe ao Brasil um preciso recorte da produção mundial de videoarte e apresentou artistas renomados, que iam de Andy Warhol ao sul-coreano Nam June Paik, cuja instalação TV Garden (1974) surpreendeu o público brasileiro ao dispor monitores em meio a uma vegetação de palmeiras em vasos e plantas artificiais."
            img="75"
            info="Presidente da Bienal: Ciccillo Matarazzo<br>
Conselho de Arte e Cultura: Aldemir Martins, Isabel Moraes Barros, José Simeão Leal, Norberto Nicola, Olívio Tavares de Araújo, Olney Krüse, Wolfgang Pfeiffer<br>
No júri de seleção: Danilo Di Prete, Lisetta Levi, Walmir Ayala<br>
No júri de premiação: Paulo Mendes de Almeida, Werner Schmalenbach"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1975'
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