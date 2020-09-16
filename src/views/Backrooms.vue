<template>
  <main class="backrooms">
    {{addEvents()}}
    <full-page :options="{options: ''}" :navigation="true">
      <div class="section">
        <header class="backrooms-header">
          <div class="paralax title">
            <h1 class="glitchTxt" data-text="The Backrooms Game">The Backrooms Game</h1>
          </div>
          <div class="buttons paralax">
            <a href="#" class="btn btn-design"><p>Free Edition</p></a>
            <a href="#" class="btn btn-design"><p>Full Edition</p></a>
          </div>
          <div class="scroll paralax" v-animate="{delay: 3500}" v-if="this.showScrollCue">
            <span></span>
            <p>scroll</p>
        </div>
        </header>
      </div>

      <div class="section">
        <article id="Free-edition" class="about">
          <p>Yes</p>
        </article>
      </div>

      <div class="section">
        
       
      </div>
      
      <div class="section" id="footer">
        <pppFooter />
      </div>


    </full-page>
  </main>
</template>

<script>
import pppFooter from "@/components/Footer.vue";
export default {
  components:{
    pppFooter
  },
  data(){
      return{
        showScrollCue: true,
      }
    },
    methods: {
      addEvents(){
        setTimeout(() => {
          window.addEventListener('scroll', () => {
            if(window.scrollY > 0){
              this.showScrollCue = false;
            }
            else {
              this.showScrollCue = true;
            }
          });
        });
      }
    }
}
</script>

<style lang="scss">
.backrooms-page, .backrooms-header, .buttons, .title{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.backrooms{
  background: var(--gradientBGD), center/cover no-repeat fixed url('../components/images/backroomsglitch.gif');
  scroll-behavior: smooth;
  &-header{
    height: 100vh;
    justify-content: space-around;
    
    .title{
      margin-top: 3em;
    }
    .scroll{
      margin: 2em 0 0 0;
      top: 0;
      left: 0;
      transform: none;
      position: relative;
    }
  }

}

</style>