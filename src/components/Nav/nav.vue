<template>
  <nav>
     <links />
       
          
  </nav>
</template>

<script>
import links from '@/components/Nav/links.vue';
export default {
     name: 'navBar',
     components: {
          links
     }

}
</script>

<style lang="scss">
nav{
     display: flex;
     flex-direction: column;
     height: 100vh;
     overflow: hidden;
     background: var(--clr1);
     transition: .5s linear;
     position: fixed;
     top: 0;
     left: 0;
     width: 0vw;
     z-index: 5;
     
     img{
          height: 3em;
          width: 5em;
     }
}
</style>