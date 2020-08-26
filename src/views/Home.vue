<template>
  <div class="home">
    <navBar />
  </div>
</template>

<script>
import navBar from '@/components/nav.vue' 

export default {
  name: 'Home',
  components: {
    navBar
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--clrMain);
}

.btn{
  background: none;
  border: none;
  width: max-content;
  height: max-content;
  &:focus{
    outline: none;
  }
}

.home{
  background: black;
  min-height: 100vh;
  max-width: 100vw;
}
</style>
