<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1981"
            artista="Cláudio Moschella"
            descricao="O surgimento da figura de um curador-geral da mostra transformaria por completo os rumos da Bienal. O crítico e ex-diretor do Museu de Arte Contemporânea da Universidade de São Paulo (MAC-USP), Walter Zanini, foi o primeiro a assumir o posto, em uma edição que aboliu espaços separados por país e optou por agrupar as obras por “analogia de linguagem” (técnicas e temas). Também marca o fim do boicote à Bienal e a abertura política no país."
            img="81"
            info="Presidente da Bienal: Luiz Diederichsen Villares<br>
Curadoria-geral: Walter Zanini<br>
Curadores: Petrônio França, Agnaldo Farias, Samuel Eduardo Leon (Cinema); Cacilda Teixeira da Costa (Video Art); Gabriela Suzana, Julio Plaza (Arte Postal); Annateresa Fabris, Victor Musgrave, Josette Balsa (Arte Incomum)<br>
Curadores-adjuntos: Roberto Sandoval, Cida Galvão, Marília Saboya, Renata Barros<br>
No Conselho de Arte e Cultura: Casimiro Xavier de Mendonça, Donato Ferrari, Paulo Sérgio Duarte<br>
Na comissão internacional para organização da exposição: Walter Zanini, Bruno Mantura (Itália), Donald Goodall (EUA)"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1981'
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