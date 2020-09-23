<template>
     <header class="home-header">
          <div class="Text">
               <h1 v-scrollanimation="{delay: 0}">Pie On A Plate Productions</h1>
               <h4 v-scrollanimation="{delay: 500}">We Bake Deliciously Good Games!</h4>
          </div>
          <div class="games">
               <h2 v-scrollanimation="{delay:1000}">Here are some of our tastiest treats!</h2>
               <fa-icon :size="'3x'" :icon="['fa', 'long-arrow-alt-down']" v-scrollanimation="{delay: 1000}"/>
               <featuredGames v-scrollanimation="{delay:1500}" />
          </div>
          
     </header>
</template>

<script>

import featuredGames from '@/components/HomePage/gameCard.vue'
export default {
     components: {
          featuredGames
     },
     methods:{
          viewGames(){
               setTimeout(() => {
                    let home = document.querySelector('.home');
                    home.style.transform = 'translateX(-125vw)';
                    home.style.overflow = 'visible'    
               });
          }
     }
}
</script>

<style lang="scss">
.home-header{
     
     text-align: center;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     height: 100%;
     width: 100vw;
     background: var(--gradientBG), center/cover no-repeat url("../images/Backdrop.png");
     padding: 1em 0 3em 0;

     h4, h1{
          margin: 0 clamp(1em, 10%, 5em) 0 clamp(1em, 10%, 5em);
     }

     .before-enter{
          transition: .5s linear;
          opacity: 0;
          transform: translateX(-100px);
     }

     .enter{
          opacity: 1;
          transform: translateX(0);
     }

     h2{
          font-style: italic;
          width: 80%;
          margin-bottom: 1em;
     }

     .games{
          display: flex;
          height: max-content;
          justify-content: center;
          align-items: center;
          flex-wrap: nowrap;
          flex-direction: column;
          margin-top: 1em;
          h1:not(.card-h1){
               margin-bottom: clamp(1em, 10%, 3em);
          }
          transform: scale(.95);
     }
     
     .Text{
          text-align: center;
          height: max-content;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;

          h1{
               margin-bottom: 1em;
               font-family: var(--ff1);
          }

          
          
          margin: clamp(1em, 20vh, 10em) 0 clamp(1em, 20vh, 15em) 0;
     }

     

     
  }
</style>