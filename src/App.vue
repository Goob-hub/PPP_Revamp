<template>
  <div id="app">
    <navBtn />
    <navBar />
    <router-view/>
  </div>
</template>

<script>
import navBar from '@/components/Nav/nav.vue'
import navBtn from '@/components/Nav/burgerBtn.vue'
export default {
  components: {
    navBar,
    navBtn
  }
}
</script>

<style lang="scss">
#app{
  background: var(--clr1);
  overflow: visible;
}


</style>
