<template>
  <div>
    <h1 class="text-5xl font-bold underline text-fuchsia-700">Instagram</h1>
    <div>
      <!-- FORM : POST -->
      <form class="flex flex-col">
        <label for="title">Title</label>
        <input name="title" v-model="title" />
        <label for="description">Description</label>
        <input name="description" v-model="description" />
        <label for="image">Image</label>
        <input name="image" v-model="image" />
        <label for="likes">Likes</label>
        <input name="likes" v-model="likes" />
        <button class="mt-4" @click.prevent="postFoto">Add foto</button>
      </form>
    </div>
    <div>
      <!-- Lista de fotos -->
      <div class="flex flex-wrap gap-5">
        <div v-for="foto in fotos" :key="foto.id">
          <div class="card">
  <h2 class="text-3xl pb-3"> {{ foto.title }}</h2>
  <img :src="foto.image" alt="Foto" class="image-size" />
  <p>description: {{ foto.description }}</p>
  <p>&#x2764  {{ foto.likes }}</p>
  <button @click.prevent="incrementLikes(foto.id)">Like</button>
  <div class="gap-2">
    <button class="bg-blue-500 hover:bg-blue-400 text-xs pr-4" @click.prevent="putFoto(foto.id)">
      Update
    </button>
    <button class="bg-red-500 hover-bg-red-400 text-xs pl-4" @click.prevent="deleteFoto(foto.id)">
      Delete
    </button>
  </div>
</div>
        </div>
      </div>

      <button @click.prevent="getFotos">Get fotos</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      fotos: [],
      foto: null, // Inicializa foto como null
      title: "",
      description: "",
      image: "",
      likes: "",
    };
  },
  methods: {
    async getFotos() {
      const response = await fetch("http://localhost:8008/api/instagram");
      const data = await response.json();
      this.fotos = data.data;
    },
    async getFoto(id) {
      const url = `http://localhost:8008/api/instagram/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      this.foto = data.data;
    },
    async postFoto() {
      const newFoto = {
        title: this.title,
        description: this.description,
        image: this.image,
        likes: this.likes,
      };
      this.title = "";
      this.description = "";
      this.image = "";
      this.likes = "";
      const response = await fetch("http://localhost:8008/api/instagram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFoto),
      });
      await response.json();
      this.getFotos();
    },
    async putFoto(id) {
  const updatedFoto = {
    title: this.title,
    description: this.description, 
    image: this.image,
    likes: this.likes,
  };
  this.title = "";
  this.description = ""; 
  this.image = "";
  this.likes = "";
  const url = `http://localhost:8008/api/instagram/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedFoto),
  });
  await response.json();
  this.getFotos();
},
    async deleteFoto(id) {
      try {
        const url = `http://localhost:8008/api/instagram/${id}`;
        const response = await fetch(url, {
          method: "DELETE",
        });
        await response.json();
        this.getFotos();
      } catch (err) {
        console.log(err, "Delete foto failed");
      }
    },
    async incrementLikes(id) {
  // Encuentra la foto por su ID o como corresponda en tu aplicación
  const foto = this.fotos.find((foto) => foto.id === id);

  if (foto) {
    // Incrementa los "likes" en 1
    foto.likes++;

    // Luego, actualiza los "likes" en la base de datos
    const url = `http://localhost:8008/api/instagram/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: foto.likes }), // Solo envía los "likes" para actualizar
    });

    if (response.ok) {
      // La actualización en la base de datos fue exitosa
      // Puedes realizar alguna acción adicional aquí si es necesario
    } else {
      // La actualización en la base de datos falló
      // Debes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario
      console.log("Error al actualizar los likes en la base de datos");
    }
  }
}
  },
  created() {
    this.getFotos(); // Cargar fotos al inicio
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #888;
}

.image-size {
  width: 400px;
  height: 300px;
}
</style>

