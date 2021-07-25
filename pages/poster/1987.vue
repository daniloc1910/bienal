<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1987"
            artista="José Maria Lopez Prieto"
            descricao="Com o tema Utopia versus realidade, a 19ª Bienal teve no alemão Anselm Kiefer sua grande figura de destaque. Com presença marcante de instalações e esculturas, o terceiro andar do pavilhão recebeu a monumental Palette mit Flügel (1985) de Kiefer e a instalação Enquanto flora a borda... (1982), de Tunga, que escorregava do teto ao piso pelo grande vão central do pavilhão."
            img="87"
            info="Presidente da Bienal: Jorge Wilheim<br>
Curadora-geral: Sheila Leirner<br>
Equipe curatorial: Ivo Mesquita, Sônia Salzstein-Goldberg, Gabriela S. Wilder, Arturo Schwarz, Rafael França, Joice Joppert Leal, Angela Carvalho, Ana Maria Kieffer<br>    
No conselho de arte e cultura: Luiz Paulo Baravelli, Ulpiano Toledo Bezerra de Menezes, Maria Alice Milliet"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1987'
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