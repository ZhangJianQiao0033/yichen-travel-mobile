<template>
  <div class="house-detail">
    <h2>{{$route.params.houseId}}</h2>
    <h2>{{route.params.houseId}}</h2>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()



</script>

<style scoped>

</style>
