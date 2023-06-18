<template>
  <div class="buttons mt-5">
    <div class="count">
      Total Discos: {{totalAlbums}}
    </div>
    <h3>Selecciona tu estilo</h3>
    <router-link to="/pop" class="btn btn-outline-success m-1">Pop ({{pop.length}})</router-link>
    <router-link to="/rap" class="btn btn-outline-danger m-1">Rap ({{rap.length}})</router-link>
    <router-link to="/rock" class="btn btn-outline-dark m-1">Rock ({{rock.length}})</router-link>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
  name: "genres-comp",
  computed:{
    ...mapState(['pop', 'rap', 'rock']),
    ...mapGetters(['totalAlbums'])
  }
}
</script>

<style>
.btn{
  width: 8rem;
  font-weight: bold;
}

</style>