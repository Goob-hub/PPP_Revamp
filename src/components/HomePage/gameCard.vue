<template>
<div class="carousel-container">
     <carousel :per-page="1" :loop="true" :paginationEnabled="false" :navigationEnabled="true" :mousedrag="true" :autroplayHoverPause="true" :autoplay="true" :autoplayTimeout="3500">
          <slide :class="info.background" :key="info.title" v-for="info in cardInfo">
               <div class="card">
                    <main class="card-info">
                         <h1 :class="info.VFX.text" data-text="The Backrooms Game">{{info.title}}</h1>
                         <p>{{info.desc}}</p>
                         <footer>
                              <a class="btn" :class="info.VFX.button"><span data-text="Learn more">Learn more</span></a>
                              <a class="btn" :class="info.VFX.button"><span data-text="Steam page">Steam page</span></a>
                              <a class="btn" :class="info.VFX.button" @click="back()"><span data-text="Back">Back</span></a>
                         </footer>
                    </main>
               </div>
          </slide>
     </carousel>
</div>
</template>

<script>
export default {
     name: 'featuredGames',
     data(){
          return{
               cardInfo: {
                    theBackrooms: {
                         title: 'The Backrooms Game',
                         desc: `Stinky moist carpet, deafening florescent hum, and six hundred million square miles of randomly segmented mono yellow rooms to be trapped in. "God save you if you hear something wandering around nearby, because it sure as hell has heard you.”`,
                         background: 'backrooms',
                         VFX: {
                              text: 'glitchTxt',
                              button: 'glitchBtn'
                         }
                    },
                    GGMT: {
                         title: 'The Great Geometric Multiverse Tour',
                         desc: `An endless universe of evil shapes and explosions, shoot your way through multiple dimensions filled with evil shapes of all kinds out to kill you with big guns, explosions, and many upgrades.`,
                         background: 'GGMT',
                         VFX: {
                              button: 'shape',
                         }
                    },
               }    
          }
     },
     methods: {
          back(){
               setTimeout(() => {
                    let home = document.querySelector('.home');
                    home.style.transform = 'translateX(0)'
                    setTimeout(() => {
                         home.style.overflow = 'hidden';
                    }, 500);    
               });
          }
     }
}
</script>

<style lang="scss">
.carousel-container{
     height: max-content;
     width: 20em;
     height: 100vh;
     align-self: center;
     overflow: hidden;
    
     .backrooms{
          background: center/cover no-repeat url('../images/backroomsglitch.gif')
     }

     .GGMT{
          background: center/cover no-repeat url('../images/GGMT.gif');
     }

     .card{
          font-family: var(--ff2);
          transition: .5s linear;
          width: inherit;
          height: 100vh;
          padding: 1em;
          position: relative;
          display: flex;
          flex-direction: row;
          overflow: hidden;
          
     
          &-info{
               text-align: center;
               display: flex;
               justify-content: flex-end;
               align-items: center;
               flex-direction: column;
               position: absolute;
               padding: 1em;
               top: 0;
               left: 0;
               background: var(--clrTransparent);
               height: inherit;
               width: inherit;
     
               h1{
                    font-family: var(--ff-1);
                    font-size: 2em;
               }
               
               p, footer{
                    font-family: var(--ff2);
                    margin-top: 2em;
               }
     
               p{
                    font-size: .9em;
               }
     
               footer{
                    height: max-content;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    
                    .btn{
                         border: 2px solid var(--clrTxt);
                         margin: .5em;
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
     }
}
</style>