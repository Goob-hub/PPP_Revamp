<template>
  <nav class="navBar">
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
     justify-content: center;
     align-items: center;
     height: 100vh;
     overflow: hidden;
     background: #111;
     transition: .5s linear;


     &:not(.open){
          pointer-events: none;
     }
    

     &.games{
          &::before{
               transform: translateX(0%);
          }
     }

     
     position: fixed;
     top: 0;
     left: 0;
     width: 100vw;
     opacity: 0;
     z-index: 5;
     
     img{
          height: 3em;
          width: 5em;
     }

     &.open{
          pointer-events: painted;
          opacity: 1;
         
     }
}
</style>