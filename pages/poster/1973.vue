<template>
    <div class="container black-bg">

        <div @click="$router.go(-1)" class="close-button medium-p white">Fechar</div>

        <InternaPoster
            ano="1973"
            artista="Cláudio Moschella"
            descricao="Uma gigantesca boca elaborada por Vera Figueiredo “engolia” os visitantes da 12ª Bienal, demonstrando a força das derivações do neoconcretismo. Instalações e ambientes que apelavam para todos os sentidos do espectador foram reunidos no segmento Arte e Comunicação. Em substituição às comissões técnicas, a nova estrutura de seleção sob organização do Conselho de Arte Cultura (CAC) recusou 90% das obras brasileiras inscritas e a representação brasileira selecionou cem artistas por meio de júris regionais (Fortaleza, Salvador, Belo Horizonte, Rio de Janeiro, São Paulo, Curitiba). Obras de Kandinsky são expostas pela primeira vez na América do Sul, trazidas pela delegação francesa."
            img="73"
            info="Presidente da Bienal: Ciccillo Matarazzo<br>
Secretariado técnico: Antonio Bento, Bethy Giudice, Ciccillo Matarazzo, Mário Wilches, Vilém Flusser<br>
No júri de seleção: Geraldo Ferraz, Clarival Valladares, Lisetta Levi, Walmir Ayala<br>
No júri de premiação: Antonio Bento, Donald Baum, Jiří Kotalík"
         />

    </div>
</template>

<script>
export default {
    head() {
        return {
            title: '1973'
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