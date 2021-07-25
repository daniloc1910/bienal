<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1965"
            artista="Dércio Bassani"
            descricao="A Bienal começa a sofrer pressão política do poder público com o início da ditadura militar no Brasil. Na cerimônia de premiação, Maria Bonomi e Sérgio Camargo entregam ao então presidente da república Castelo Branco moção em favor da revogação das prisões preventivas de Mário Schenberg, Fernando Henrique Cardoso, Florestan Fernandes e Cruz Costa. A despeito das complicações, consagrou-se a apresentação de uma sala dedicada ao surrealismo e à arte fantástica. Marcel Duchamp, com seu famoso ready-made Roue de bicyclette (1913), era visto ao lado de Max Ernst, Marc Chagall, Joan Miró, Jean Arp, Man Ray, Paul Klee, Paul Delvaux, René Magritte e Francis Picabia."
            img="65"
            info="Presidente da Bienal: Ciccillo Matarazzo<br>
Diretor geral: Mário Pedrosa<br>
Assessorias: Geraldo Ferraz, Sérgio Milliet, Walter Zanini (Artes plásticas); Aldo Calvo, Sábato Magaldi (Teatro); Jannar Murtinho Ribeiro (Artes Gráficas)<br>
Secretária-geral: Diná Lopes Coelho<br>
No júri de seleção: Mário Pedrosa, Mário Schenberg <br>
No júri de premiação: Jacques Lassaigne, Werner Schmalenbach"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1965'
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