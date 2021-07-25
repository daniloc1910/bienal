<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1983"
            artista="Dario Chiaverini, Donato Ferrari, Celso Sparapan"
            descricao="Linguagens cada vez mais correntes na arte contemporânea global, a performance, o vídeo, o videotexto, as instalações e o happening deram o tom da 17ª Bienal. Foi instalada no andar térreo do pavilhão a rua Fluxus, um dos acontecimentos centrais da edição, que incluía ainda uma sala de documentos sobre o grupo – registros de Ben Vautier dormindo, Dick Higgins tocando piano ou Wolf Vostell durante uma ação em Nova York."
            img="83"
            info="Presidente da Bienal: Luiz Diederichsen Villares<br>
Curadoria-geral: Walter Zanini<br>
No conselho de arte e cultura: Glauco Pinto de Moraes, Paulo Sérgio Duarte, Sheila Leirner<br>
Curadores das exposições: Julio Plaza (Arte e Videotexto); Berta Sichel (Novas Metáforas/Seis Alternativas); Walter Zanini e Rui Moreira Leite (Flavio de Carvalho); Gino Di Maggio (Fluxus); Norberto Nicola (Arte Plumária do Brasil)<br>
Curadores de cinema: Agnaldo Farias, Samuel Eduardo Leon<br>
Na comissão internacional para organização do núcleo 1: Pierre Gaudibert (França), Jürgen M. Harten (Alemanha), Walter Zanini"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1983'
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