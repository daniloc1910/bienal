<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1971"
            artista="Godubin Belmonte e Moacyr Rocha"
            descricao="Novamente boicotada pelos artistas, a Bienal foi inaugurada sob polêmicas e sofreu com o exílio de Mario Pedrosa, que estivera à frente da maioria das Bienais em sua primeira década, tendo assumido a direção-geral da 6ª e da 7ª edição. A seleção de artistas brasileiros foi feita a partir de uma pré-Bienal realizada no ano anterior."
            img="71"
            info="Presidente da Bienal: Ciccillo Matarazzo<br>
Comissão Técnica de Arte: Antonio Bento, Geraldo Ferraz, Sérgio Ferro<br>
No júri de seleção (Artes plásticas): James Johnson Sweeney (Museum of Fine Arts, Houston), Lisetta Levi<br>
No júri de premiação (Artes plásticas): James Gleeson, José Geraldo Vieira, Nello Ponente"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1971'
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