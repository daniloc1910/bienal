<template>
    <div class="id-poster grid">
        
        <img class="poster" :src="require('~/assets/poster/1.jpg')">
        <div class="description">
            <div class="ano h1 white">51</div>
            <div class="artista h2 white">Antônio Maluf</div>
            <div class="description p white">A primeira edição da Bienal foi realizada pelo Museu de Arte Moderna de São Paulo (MAM-SP) em um pavilhão provisório localizado na Esplanada do Trianon, na região da Avenida Paulista. Na edição, o primeiro Aparelho cinecromático (1949) de Abraham Palatnik foi recusado por não se encaixar nas categorias previstas. Posteriormente, a obra seria aceita e receberia uma menção especial do júri internacional.</div>
        </div>

    </div>
</template>

<style scoped>
    .poster {
        grid-column: 1/7;
        width: auto;
        height: calc(100vh - 80px);
    }

    .id-poster {
        height: calc(100vh - 80px);
        padding: 40px 40px 40px 40px;
    }

    .description {
        grid-column: 9/13;
        align-self: end;
    }

    .ano {
        margin-bottom: 30px;
    }

    .artista {
        margin-bottom: 22px;
    }

    @media (max-width: 1023px) {

        .id-poster {
            height: 100%;
            padding: 200px 16px 0 16px;
        }

        .ano {
            margin-bottom: 0px;
        }

        .poster {
            grid-column: 1/3;
            width: 100%;
            height: auto;
            margin-bottom: 40px;
        }

        .description {
            grid-column: 1/3;
            align-self: start;
            margin-bottom: 40px;
        }
    }
</style>