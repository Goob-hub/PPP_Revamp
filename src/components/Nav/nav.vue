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
     background: var(--gradientBG), center/cover fixed no-repeat url('../images/navBg.png');
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

     &.open{
          width: 100vw;
     }
}
</style>