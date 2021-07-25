<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1977"
            artista="Regis Madureira Cardieri"
            descricao="Significativas mudanças marcaram a primeira Bienal sem Ciccillo: a seleção de um Conselho de Arte e Cultura com liberdade para desenvolver o programa da exposição, dentre as novas regras está a exigência de que as Representações Nacionais sigam os temas propostos pela Bienal de São Paulo para a seleção de artistas, modelo inspirado novamente na Bienal de Veneza. O CAC define três capítulos para a exposição: Exposições Antológicas (substituindo as salas especiais), Grandes Confrontos e Proposições Contemporâneas – esta última composta de sete temas: Arqueologia do Urbano, Recuperação da Paisagem, Arte Catastrófica, Vídeo Arte, Poesia Espacial, O Muro como Suporte de Obras, Arte Não-Catalogada."
            img="77"
            info="Presidente da Bienal: Oscar Landmann<br>
Conselho de Arte e Cultura: Alberto Beuttenmüller, Clarival do Prado Valladares, Leopoldo Raimo, Lisetta Levi, Marc Berkowitz, Maria Bonomi, Yolanda Mohalyi<br>
No júri de seleção: Olívio Tavares de Araújo, Radha Abramo<br>
No júri de premiação: Clarival Valladares, Marcia Tucker, Toshiaki Minemura"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1977'
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