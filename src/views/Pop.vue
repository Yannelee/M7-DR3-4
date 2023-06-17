<template>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-3 g-3">
      <div class="col" v-for="album in pop" :key="album.id">
        <div class="card h-100">
          <h5 class="card-text">{{album.artist}}</h5>
          <img :src="album.image" class="card-img-top" alt="...">
          <h5 class="card-title">{{album.album}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "pop-comp",
  computed:{
    ...mapState(['pop'])
  }
}
</script>

<style scoped>
  .container-fluid{
    padding: 1rem;
  }
  .card{
    border-radius: 0;
    padding: .5rem 1rem;
  }
  .card-img-top{
    border-radius: 0;
    height: 20rem;
    object-fit: cover;
  }
  .card-title{
    margin-top: 1rem;
  }
</style>