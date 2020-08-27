<template>
  <div class="card">
     <main class="card-info">
          <h1 class="glitchTxt" data-text="The Backrooms Game">The Backrooms Game</h1>
          <p>Stinky moist carpet, deafening florescent hum, and six hundred million square miles of randomly segmented empty mono yellow rooms to be trapped in. "God save you if you hear something wandering around nearby, because it sure as hell has heard you”</p>
          <footer>
               <a class="btn">Learn more</a>
               <a class="btn">Steam page</a>
          </footer>
     </main>
  </div>
</template>

<script>
export default {
     name: 'gameCard'
}
</script>

<style lang="scss">
.card{
     font-family: var(--ff2);
     width: 100%;
     height: 70vh;
     padding: 1em;
     position: relative;
     background: center/cover no-repeat url('../assets/images/backroomsglitch.gif');
     display: flex;
     flex-direction: column;

     &-info{
          display: flex;
          align-items: center;
          flex-direction: column;
          position: absolute;
          padding: 1em;
          top: 0;
          left: 0;
          background: var(--clrTransparentDrk);
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
               a{
                    background: var(--clrTransparentDrk);
                    border: 2px solid var(--clrTxt);
                    border-radius: 1em;
                    font-size: .8em;
                    padding: 1em;
                    &:nth-child(2){
                         margin-left: 1em;
                    }
                    
               }
          }

     }
}
</style>