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
     justify-content: center;
     align-items: center;
     height: 100vh;
     overflow: hidden;
     // background: var(--gradientBG), center/cover fixed no-repeat url('../images/navBg.png');
     background: black;
     transition: .5s linear;

     &::before{
          content: '';
          position: absolute;
          height: 100vh;
          width: 50vw;
          top: 0;
          left: 0;
          background: rgba(255, 255, 255, .1);
     }

     
     position: fixed;
     top: 0;
     left: 0;
     width: 0vw;
     opacity: 0;
     z-index: 5;
     
     img{
          height: 3em;
          width: 5em;
     }

     &.open{
          opacity: 1;
          width: 100vw;
     }
}
</style>