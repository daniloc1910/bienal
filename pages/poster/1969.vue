<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1969"
            artista="Maria Argentina Bibas"
            descricao="Meses após o lançamento do Ato Institucional n. 5 (AI-5), oitenta por cento dos artistas convidados recusaram-se a participar da Bienal como forma de protesto contra a ditadura militar. A 10ª edição recebeu o apelido de “Bienal do Boicote”."
            img="69"
            info="Presidente da Bienal: Ciccillo Matarazzo<br>
Comissão Técnica de Arte: Aracy Amaral, Edyla Mangabeira Unger, Frederico Nasser, Mário Barata, Waldemar Cordeiro, Wolfgang Pfeiffer<br>
No júri de seleção: Mário Schenberg, Oswald de Andrade Filho, Walmir Ayala<br>
No júri de premiação: Doris Shadbolt, Patrick Waldberg"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1969'
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