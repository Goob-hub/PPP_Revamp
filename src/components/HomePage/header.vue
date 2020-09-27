<template>
     <header class="home-header">
          <div class="Text">
               <h1 v-scrollanimation="{delay: 0}">Pie On A Plate Productions</h1>
               <h4 v-scrollanimation="{delay: 500}">We Bake Deliciously Good Games!</h4>
               <div class="scroll" v-scrollanimation="{delay: 700}" >
                    <span></span>
                    <p>scroll</p>
               </div>
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
     height: max-content;
     width: 100vw;
     background: var(--gradientBG), center/cover no-repeat url("../images/Backdrop.png");
     padding: 1em 0 3em 0;

     h4, h1{
          margin: 0 clamp(1em, 10%, 5em) 0 clamp(1em, 10%, 5em);
     }

     .scroll{
          margin-top: 20%;
          position: relative;
          top: 0%;
          left: 0%;
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
          max-width: 70vw;
          margin-bottom: 1em;
     }

     .games{
          display: flex;
          height: max-content;
          justify-content: center;
          align-items: center;
          flex-wrap: nowrap;
          flex-direction: column;
          margin-top: 0;
          h1:not(.card-h1){
               margin-bottom: clamp(1em, 10%, 3em);
          }
          transform: scale(.95);
     }
     
     .Text{
          text-align: center;
          min-height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          h1{
               margin-bottom: 1em;
               font-family: var(--ff1);
          }

          
          
          margin: 0 0 0 0;
     }

     

     
  }
</style>