<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="2008"
            artista="Elaine Ramos, Daniel Trench e Flávia Castanheira"
            descricao="Momento de repensar rumos e funções do evento, a 28ª Bienal – Em vivo contato realiza uma proposta radical ao manter o 2ª andar do pavilhão vazio, como uma Planta Livre, uma metáfora da crise conceitual atravessada pelos sistemas expositivos tradicionais e enfrentada pelas instituições que as organizam. Acontecimento marcante naquela edição foi a pichação do guarda-corpo no pavilhão, que germinou uma discussão sobre o tema no meio artístico sobre arte urbana."
            img="08"
            info="Presidente da Bienal: Manoel Francisco Pires da Costa<br>
Curador-geral: Ivo Mesquita<br>
Curadora-adjunta: Ana Paula Cohen<br>
Curador do Vídeo Lounge: Wagner Morales<br>
Coordenadora-geral das conferências: Luísa Duarte"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '2008'
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