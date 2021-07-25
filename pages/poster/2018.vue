<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="2018"
            artista="Raul Loureiro, Hans (Jean) Arp"
            descricao="Para a 33ª Bienal de São Paulo – Afinidades afetivas, o curador geral espanhol Gabriel Pérez-Barreiro propôs uma mudança no que chamou de sistema operacional da Bienal. Para isso, convidou sete artistas para curar exposições ao seu lado. O resultado foram exposições coletivas nas quais as obras desses artistas-curadores foram apresentadas ao lado de trabalhos de outros artistas com os quais têm afinidades ou que os influenciam. Pérez-Barreiro também selecionou outros doze artistas para os quais foram montadas mostras individuais. Dentre eles, três homenageados, já falecidos e desconhecidos do grande público: a brasileira Lucia Nogueira, o paraguaio Feliciano Centurión, e o guatemalteco Aníbal López. Com expografia fluida e espaços de respiro, a mostra ainda centrou-se na questão da economia da atenção, que se tornou difusa na era digital e das mídias sociais."
            img="18"
            info="Presidente: João Carlos de Figueiredo Ferraz<br>
Curador geral: Gabriel Pérez-Barreiro<br>
Artistas-curadores: Alejandro Cesarco, Antonio Ballester Moreno, Claudia Fontes, Mamma Andersson, Sofia Borges, Waltercio Caldas, Wura-Natasha Ogunji<br>
Conselho curatorial: Antonio La Pastina, Jacopo Crivelli Visconti<br>
Curadores convidados: Gabriela Saenger Silva (Aníbal López), Norman Brosterman (Friedrich Fröbel)<br>
Curadora-assistente: Laura Cosendey"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '2018'
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