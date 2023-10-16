<template>
<div>
  <h1 class="text-5xl font-bold underline text-fuchsia-700">
    Hello world!
  </h1>
  <div>
    <!-- FORM :POST -->
    <form action="">
      <label for=""></label>
      <label for=""></label>
      <label for=""></label>
      <label for=""></label>
    </form>
  </div>
  <div>
    <ul>
      <li @click.prevent="getFoto(foto.id)" v-for="foto in fotos" :key="foto.id">{{ foto }}</li>
    </ul>
    <span class="text-emerald-600">{{ foto }}</span>
    <button @click.prevent="getFotos">Get fotos</button>
  </div>
  <!-- <div>
    <ul>
      <li>{{ foto }}</li>
    </ul>
    <button @click.prevent="getFoto">Get foto</button>
  </div> -->
</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fotos: [],
      foto:[],
    };
  },
  methods: {

    async getFotos() {
      const response = await fetch("http://localhost:8008/api/instagram")
      const data = await response.json()
      console.log(data)
      // el primer data es del fetch i el segundo es porque los archivos estan dentro de data 
      return this.fotos = data.data
    },
    async getFoto(id) {
      const url = `http://localhost:8008/api/instagram/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return this.foto = data.data;
    },

  }
};
</script>

<style scoped>
/* Estilos CSS para este componente específico */
</style>
