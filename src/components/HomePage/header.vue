<template>
     <header class="home-header">
          <div class="Text">
               <h1>Pie On A Plate Productions</h1>

               <sub>We Bake Deliciously Good Games</sub>
          </div>
          <div class="buttons">
               <button class="btn" @click="viewGames()"><span>View Games</span></button>
          </div>
          
     </header>
</template>

<script>

// import featuredGames from '@/components/HomePage/gameCard.vue'
export default {
     components: {
          
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
     
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     height: 100vh;
     width: 100vw;
     background: var(--gradientBG), center/cover no-repeat url("../images/Backdrop.png");
     
     .Text{
          text-align: center;
          height: 30%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;

          h1{
               font-family: var(--ff1);
          }

          sub{
               align-self: center;
               width: 80%;
               font-style: italic;
               font-size: 1em;
               margin-top: 3em;
          }
          margin: 20% 0 20% 0;
     }

     .buttons{
          .btn{
               font-family: var(--ff1);
               border: 2px solid var(--clrTxt);   
               width: max-content;
               font-weight: bold;
               font-size: 1em;
               padding: .65em;
               &:hover{
                    background: white;
                    span{
                         transition: .5s linear;
                         color: black;
                    }
               }
          }
     }
  }
</style>