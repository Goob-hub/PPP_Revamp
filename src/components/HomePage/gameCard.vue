<template>
<div class="carousel-container-games">
     <carousel :per-page="1" :loop="true" :paginationEnabled="false" :paginationActiveColor="'white'" :paginationColor="'grey'" :navigationEnabled="false" :mouseDrag="true" :autroplayHoverPause="true" :autoplay="false" :autoplayTimeout="3500"  :perPageCustom="[[1500, 2]]">
          <slide  :key="info.title" v-for="info in cardInfo">
               <div class="card" :class="info.background">
                    
                    <main class="card-info">
                         <h1 class="card-h1" :class="info.VFX.text" data-text="The Backrooms Game">{{info.title}}</h1>
                         <p>{{info.desc}}</p>
                         <footer>
                              <router-link :to="info.link" class="btn btn-design" :class="info.VFX.button"><span class="p-size" data-text="Learn more">Learn more</span></router-link>
                              <a class="btn btn-design" :class="info.VFX.button"><span class="p-size" data-text="Steam page">Steam page</span></a>
                              
                         </footer>
                         <a :class="info.VFX.button" class="btn btn-design back" @click="hideGames()"><span class="p-size" data-text="Back">Back</span></a>
                         <p>swipe to view next game</p>
                    </main>
                    
               </div>
          </slide>
     </carousel>
</div>
</template>

<script>
export default {
     name: 'featuredGames',
     methods: {
          hideGames(){
               setTimeout(() => {
                    let gamesModal = document.querySelector('.games');
                    gamesModal.classList.add('hide');    
               });
          }
     },
     data(){
          return{
               cardInfo: {
                    theBackrooms: {
                         title: 'The Backrooms Game',
                         desc: `Stinky moist carpet, deafening florescent hum, and six hundred million square miles of randomly segmented mono yellow rooms to be trapped in. "God save you if you hear something wandering around nearby, because it sure as hell has heard you.”`,
                         background: 'Backrooms',
                         link: '/Backrooms',
                         VFX: {
                              text: 'glitchTxt',
                              button: 'glitchBtn'
                         }
                    },
                    GGMT: {
                         title: 'The Great Geometric Multiverse Tour',
                         desc: `An endless universe of evil shapes and explosions, shoot your way through multiple dimensions filled with evil shapes of all kinds out to kill you with big guns, explosions, and many upgrades.`,
                         background: 'GGMT',
                         link: '/GGMT',
                         VFX: {
                              button: 'shape',
                         }
                    },
               }    
          }
     },
   
}
</script>

<style lang="scss">


.carousel-container-games{
     height: 100vh;
     max-height: 100vh;
     max-width: 100vw;
     align-self: center;
     overflow: hidden;

     .Backrooms{
          background: center/cover no-repeat url('../images/backroomsglitch.gif')
     }

     .GGMT{
          background: center/cover no-repeat url('../images/GGMT.gif');
     }


     .card{
          font-family: var(--ff2);
          transition: .5s linear;
          width: 100vw;
          max-width: 100vw;
          height: 100vh;
          max-height: 100vh;
          overflow: hidden;
          box-shadow: 0px 0px 5px white;
          
          
     
          &-info{
               text-align: center;
               display: flex;
               justify-content: space-around;
               align-items: center;
               flex-direction: column;
               padding: 1em;
               background: var(--gradientBGD);
               width: inherit;
               height: inherit;
     
               h1{
                    font-family: var(--ff-1);
                    margin: 0;
               }
               
               p, footer{
                    font-family: var(--ff2);
                    margin-top: 2em;
                    @media (min-width: 768px) {
                         max-width: 80%;
                         
                    }
               }
     
             
     
               footer{
                    height: max-content;
                    width: max-content;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    
                    .btn{
                         text-decoration: none;
                         p{
                              margin: 0;
                         }
                         &:hover{
                              span{
                                   color: black;
                              }
                         }
                    }
               }
     
          }
     }
}
</style>