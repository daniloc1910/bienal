<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1963"
            artista="Danilo Di Prete"
            descricao="Um número excessivo de obras marcou a edição e criou um panorama eclético e de difícil compreensão. Esta foi a primeira edição desvinculada do Museu de Arte Moderna de São Paulo e realizada sob responsabilidade da Fundação Bienal, criada em 1962. Wanda Svevo havia falecido no ano anterior e foi homenageada no catálogo."
            img="63"
            info="Fundação Bienal de São Paulo é criada no ano anterior e assume a produção das Bienais<br>
Presidente da Bienal: Ciccillo Matarazzo<br>
Diretor geral: Mário Pedrosa<br>
Assessorias: Geraldo Ferraz, Sérgio Milliet, Walter Zanini (Artes plásticas); Aldo Calvo, Sábato Magaldi (Teatro); Jannar Murtinho Ribeiro (Artes Gráficas)<br>
No júri de seleção: Sérgio Milliet, Walter Zanini<br>
No júri de premiação: Giulio Carlo Argan, Martin Friedman (Walker Art Center, EUA)"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1963'
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