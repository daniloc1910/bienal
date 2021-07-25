<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1989"
            artista="Rodolfo Vanni"
            descricao="A 20ª Bienal foi concebida por um triunvirato: Carlos von Schmidt, Stella Teixeira de Barros e João Cândido Galvão. Descontinuando as proposições das últimas Bienais, a equipe retomou as premiações e o arranjo das representações nacionais em salas separadas. A representação brasileira foi considerada uma das mais consistentes em muito tempo."
            img="89"
            info="Presidente da Bienal: Alex Periscinoto<br>
Curadores: Carlos von Schmidt (Internacional), Stella Teixeira de Barros (Nacional), João Cândido Galvão (Eventos especiais)<br>
No conselho de arte e cultura: Marcelo Grassmann, Gilberto Chateaubriand, Marcus Lontra, Paulo Herkenhoff<br>
No júri de premiação: Jacques Leenhardt (França)"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1989'
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