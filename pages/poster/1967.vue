<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1967"
            artista="Gobel Weyne"
            descricao="A Bienal da arte pop foi inaugurada sob uma polêmica: a polícia federal, antes mesmo da abertura, retirou duas obras alegando que “feriam” as autoridades e a Constituição brasileira: a pintura O presente da carioca Cybèle Varela, por ser considerada antinacionalista – a obra foi destruída e a artista quase presa pelo DOPS –, e a série de Quissak Jr., Meditação sobre a Bandeira Nacional, que infringia as leis da época que proibiam o uso livre do símbolo nacional. A delegação estadunidense foi a responsável por apresentar o preciso recorte de arte pop que trouxe ao evento obras de Jasper Johns, Andy Warhol, Roy Lichtenstein, Robert Rauschenberg. Várias obras da exposição danificadas e a sala da representação estadunidense foi pichada poucos dias após a abertura. Júri de Premiação deixa de ser formado por comissários e passa a ser constituído por críticos de arte."
            img="67"
            info="Presidente da Bienal: Ciccillo Matarazzo<br>
Assessoria Artes Plásticas: Alfredo Mesquita, Geraldo Ferraz, Henrique E. Mindlin, Jayme Maurício, José Geraldo Vieira, Salvador Candia<br>
No júri de seleção: Clarival Valladares, Mario Schenberg<br>
No júri de premiação: Frederico Morais, Geraldo de Barros, Robert Giron"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1967'
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