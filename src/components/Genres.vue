<template>
  <div class="buttons mt-5">
    <h3>Selecciona tu estilo</h3>
    <router-link to="/pop" class="btn btn-outline-success m-1">Pop</router-link>
    <router-link to="/rap" class="btn btn-outline-danger m-1">Rap</router-link>
    <router-link to="/rock" class="btn btn-outline-dark m-1">Rock</router-link>
  </div>
</template>

<script>
export default {
  name: "genres-comp"
}
</script>

<style>
.btn{
  width: 8rem;
  font-weight: bold;
}

</style>