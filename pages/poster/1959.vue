<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1959"
            artista="Arnaldo Grostein"
            descricao="200 mil visitantes garantiram o sucesso da exposição, que teve como pontos altos a seleção de trinta obras do ícone impressionista Vincent van Gogh e a forte presença do tachismo e da arte informal."
            img="59"
            info="Realizada pelo MAM-SP<br>
Presidente do MAM-SP: Ciccillo Matarazzo<br>
Diretor artístico: Lourival Gomes Machado<br>
Secretário-geral: Arturo Profili<br>
No júri de seleção: Alfredo Volpi, Ernesto Wolf, Fayga Ostrower<br>
No júri de premiação: Richard Davis, Roland Penrose"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1959'
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