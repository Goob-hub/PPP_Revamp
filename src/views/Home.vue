<template>
  <div class="home">
    
    <Head />  
    <div class="games">
      <featuredGames />
    </div>

    

  </div>
</template>

<script>
import Head from '@/components/HomePage/header.vue' 

import featuredGames from '@/components/HomePage/gameCard.vue'


export default {
  name: 'Home',
  components: {
    Head,
    featuredGames,
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
  position: absolute;
  top: 0;
  left: 0;
  font-family: var(--ff2);
  transition: .5s linear;  
  background: var(--clr1);
  height: max-content;
  max-width: 100vw;
  overflow: hidden;
  

  .games{
    transition: .5s linear;
    top: 0;
    position: absolute;
    transform: translateX(125vw);
  }
}
</style>
