<template>
     <header class="home-header">
          <div class="Text">
          <h1>Pie On A Plate Productions</h1>
          <sub>Deliciously Good Games</sub>
          </div>
          <featuredGames />
     </header>
</template>

<script>
import featuredGames from '@/components/HomePage/gameCard.vue'
export default {
     components: {
          featuredGames
     }
}
</script>

<style lang="scss">
.home-header{
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     height: max-content;
     background: var(--gradientBG), center/cover fixed no-repeat url('/assets/images/Backdrop.png');
     
     .Text{
          text-align: center;
          height: 30%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          h1{
               font-family: var(--ff1);
          }

          sub{
               font-style: italic;
               font-size: 1em;
               margin-top: 3em;
          }
          margin: 30% 0 0 0;
     }
  }
</style>