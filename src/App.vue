<template>
  <nav>
    <RouterLink to="/">Test1</RouterLink>
    <RouterLink to="/test2">Test2</RouterLink>
    <RouterLink to="/test3">Test3</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>


<style scoped>
nav{
  display: flex;
  width: 100%;
  height: 10vh;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
</style>
