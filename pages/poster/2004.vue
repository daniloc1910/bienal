<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="2004"
            artista="Ziraldo"
            descricao="Primeiro ano em que a entrada é gratuita, política que seria incorporada a todas as edições dali em diante. Com o tema Território livre, a 26ª Bienal marcou a entrada de uma nova geração na cena artística com artistas como Cabelo, Chelpa Ferro, Laura Vinci, entre outros. Mais uma vez afirmou-se o caráter eminentemente contemporâneo do evento, que apresentou obras, na sua maioria, produzidas entre 2002 e 2004. Ao menos um terço da mostra era composta de projetos site-specific elaborados especificamente para o Pavilhão da Bienal."
            img="04"
            info="Presidente da Bienal: Manoel Francisco Pires da Costa<br>
Curador-geral: Alfons Hug"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '2004'
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