<template>
  <div class="home">
    <div class="logo">
      <p class="text-logo">OPEN<img alt="M" src="../assets/M.png" class="img-logo">USIC</p>
    </div>
    <Genres/>
    <AddAlbum/>
  </div>
</template>

<script>
// @ is an alias to /src
import Genres from "@/components/Genres.vue";
import AddAlbum from "@/components/AddNewAlbum.vue";

export default {
  name: 'HomeView',
  components: {
    Genres,
    AddAlbum
  }
}
</script>

<style scoped>
  .logo{
    margin: 0 auto;
    padding: 1.5rem 2rem;

  }
  .img-logo{
    max-width: 10%;
    vertical-align: text-bottom;
  }
  .text-logo{
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
    text-decoration: underline;
  }
</style>