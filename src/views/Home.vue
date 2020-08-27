<template>
  <div class="home">
    <navBar />
    <gameCard />
  </div>
</template>

<script>
import navBar from '@/components/Nav/nav.vue' 
import gameCard from '@/components/gameCard.vue' 

export default {
  name: 'Home',
  components: {
    navBar,
    gameCard
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--clrTxt);
  letter-spacing: 1.5px;
}

.home{
  padding-top: 15vh;
  background: #2e2e2e;
  min-height: 100vh;
  max-width: 100vw;
}
</style>
