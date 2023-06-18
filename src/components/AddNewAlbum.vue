<template>
  <div class="container-fluid p-4">
    <form action="">
      <div class="row g-3 align-items-end text-start">
        <div class="col">
          <label class="ms-2">Artista</label>
          <input type="text" class="form-control" v-model="newAlbum.artist">
        </div>
        <div class="col">
          <label class="ms-2">Álbum</label>
          <input type="text" class="form-control" v-model="newAlbum.album">
        </div>
        <div class="col">
          <label class="ms-2">Portada</label>
          <input type="text" class="form-control" v-model="newAlbum.image">
        </div>
        <div class="col">
          <label class="ms-2">Genero</label>
          <select id="inputState" class="form-select" v-model="newAlbum.category">
            <option value="pop">Pop</option>
            <option value="rap">Rap</option>
            <option value="rock">Rock</option>
          </select>
        </div>
        <div class="col">
          <button class="btn btn-dark" @click.prevent="add()">Agregar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
  name: "genres-comp",
  data:function(){
    return{
      newAlbum:{
        artist:'',
        album:'',
        image:'',
        category:'',
      }
    }
  },
  computed:{
    ...mapState(['pop', 'rap', 'rock']),
    ...mapGetters(['totalAlbums'])
  },
  methods:{
    add(){
      let data = {...this.newAlbum}

      if(this.newAlbum.artist !='' && this.newAlbum.album !='' && this.newAlbum.image.match(/[http]+/) && this.newAlbum.category !=''){
        if(this.newAlbum.category == 'pop'){
          this.$store.commit('ADD_ALBUM_POP', data)
        } else if (this.newAlbum.category == 'rap'){
          this.$store.commit('ADD_ALBUM_RAP', data)
        } else {
          this.$store.commit('ADD_ALBUM_ROCK', data)
        }
      } else {
        alert('Debes Completar todos los campos')
      }
    }
  }
}
</script>

<style>
.btn{
  width: 8rem;
  font-weight: bold;
}

</style>