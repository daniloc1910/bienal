<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="2006"
            artista="Jorge Macchi; Rodrigo Cerviño Lopez"
            descricao="O tema Como viver junto – título de um conjunto de seminários proferidos por Roland Barthes nos anos 1970, norteou a curadoria de Lisette Lagnado para a 27ª Bienal. A edição foi marcada pela extinção das representações nacionais – a seleção de artistas ficou a cargo dos curadores das Bienais – e pela afirmação da arte como linguagem transnacional. Inovação fundamental para exposição, os projetos curatoriais passaram a ser escolhidos a partir de processos de seleção realizado por um comissão internacional de críticos e curadores."
            img="06"
            info="Presidente da Bienal: Manoel Francisco Pires da Costa<br>
Curadora-geral: Lisette Lagnado<br>
Cocuradores: Adriano Pedrosa, Cristina Freire, José Roca, Rosa Martínez<br>
Curador c0nvidado: Jochen Volz"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '2006'
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