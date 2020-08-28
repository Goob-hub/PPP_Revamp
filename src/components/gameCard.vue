<template>
<div class="container">
     <carousel :per-page="1" :autoplay="true" :autoplayTimeout="6000">
          <slide :class="info.background" :key="info.title" v-for="info in cardInfo">
               <div class="card">
                    <main class="card-info">
                         <h1 :class="info.VFX.text" data-text="The Backrooms Game">{{info.title}}</h1>
                         <p>{{info.desc}}</p>
                         <footer>
                              <a class="btn" :class="info.VFX.button"><span data-text="Learn more">Learn more</span></a>
                              <a class="btn" :class="info.VFX.button"><span data-text="Steam page">Steam page</span></a>
                         </footer>
                    </main>
               </div>
          </slide>
     </carousel>
</div>
</template>

<script>
export default {
     name: 'gameCard',
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
                         desc: `An endless expanse of evil shapes and explosions, shoot your way through multiple dimensions filled with evil shapes of all kinds out to kill you with big guns, explosions, and many upgrades.`,
                         background: 'GGMT',
                         VFX: {
                              button: 'shape',
                         }
                    },
               }    
          }
     },
     methods: {
          
     }
}
</script>

<style lang="scss">
.container{
     height: 70vh;
     width: 100%;
     overflow: hidden;

     .backrooms{
          background: center/cover no-repeat url('../assets/images/backroomsglitch.gif');
     }

     .GGMT{
          background: blue;
     }

     .card{
          font-family: var(--ff2);
          transition: .5s linear;
          width: 100%;
          height: 70vh;
          padding: 1em;
          position: relative;
          display: flex;
          flex-direction: row;
          overflow: hidden;
     
          &-info{
               display: flex;
               align-items: center;
               flex-direction: column;
               position: absolute;
               padding: 1em;
               top: 0;
               left: 0;
               background: var(--clrTransparent);
               height: 100%;
               width: 100%;
     
               h1{
                    margin-top: .7em;
               }
               
               p, footer{
                    margin-top: 2em;
               }
     
               p{
                    font-size: .8em;
               }
     
               footer{
                    height: max-content;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    
                    .btn{
                         border: 2px solid var(--clrTxt);
                         
                         width: max-content;
                         font-weight: bold;
                         font-size: 1em;
                         padding: .65em;
                         &:hover{
                              background: black;
                         }
                    }
               }
     
          }
     }
}


</style>