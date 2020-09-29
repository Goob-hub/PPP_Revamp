<template>
     <header class="home-header">
          <div class="Text">
               <h1 v-scrollanimation="{delay: 0}">Pie On A Plate Productions</h1>
               <h4 v-scrollanimation="{delay: 500}">We Bake Deliciously Good Games!</h4>
               <button v-scrollanimation="{delay: 1000}" class="btn btn-design back-btn" @click="showGames()"><p>View Games <fa-icon class="icon" :icon="['fa', 'long-arrow-alt-right']" /></p></button>
        </div>
          
          <div class="games hide">
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
          showGames(){
               setTimeout(() => {
                    let gameModal = document.querySelector('.games');
                    gameModal.classList.remove('hide'); 
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
     height: 100vh;
     max-height: 100vh;
     width: 100vw;
     background: var(--gradientBG), center/cover no-repeat url("../images/Backdrop.png");
     

     .back-btn{
          padding: .75em;
          margin-top: clamp(3em, 30%, 5em);
     }

     h4, h1{
          margin: clamp(1em, 5vw, 3em);
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
          position: fixed;
          height: 100vh;
          display: flex;
          top: 0;
          left: 0;
          z-index: 50;
          justify-content: center;
          align-items: center;
          flex-wrap: nowrap;
          flex-direction: column;
          margin-top: 0;
          transition: .5s linear;
          
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

          
          .btn-design{
               .icon{
                    path{
                         transition: .5s linear;
                    }
               }
               &:hover{
                   .icon{
                    path{
                         color: black;
                    }
               } 
               }
          }
          
          
          margin: 0 0 0 0;
     }

     

     
  }
</style>