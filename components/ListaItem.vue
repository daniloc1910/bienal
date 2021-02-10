<template>
  <n-link :to="link" class="lista-item">

    <ul class="lista-lista p black">
      <li class="ano">{{ano}}</li>
      <li>{{artista}}</li>
    </ul>

  </n-link>
</template>

<script>
export default {
  props: {
    ano: {
      type: String
    },
    artista: {
      type: String
    },
    link: {
      type: String
    }
  }
}
</script>

<style scoped>
    .lista-item {
        display: block;
        border-top: solid 1px black;
        padding: 20px 0 20px 0;
    }

    .lista-item:hover {
        opacity: 0.5;
    }

    .lista-lista {
      display: flex;
    }

    .ano {
        width: 18%;
    }

  @media (max-width: 1023px) {
      
      .lista-item {
        grid-column: 1/3;
    }
  }
</style>