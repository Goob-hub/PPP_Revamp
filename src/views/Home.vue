<template>
  <div class="home">
    <pppHead />  
    <pppFooter />
  </div>
</template>

<script>
import pppHead from '@/components/HomePage/header.vue' 


import pppFooter from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    pppHead,
    pppFooter

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
  position: relative;
  top: 0;
  left: 0;
  font-family: var(--ff2);
  transition: .5s linear;  
  background: var(--clr1);
  height: 100%;
  max-width: 100vw;
  overflow: visible;

  
}
</style>
