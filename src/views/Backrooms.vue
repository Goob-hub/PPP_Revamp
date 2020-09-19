<template>
  <main class="backrooms">
    {{addEvents()}}
    <full-page :options="{options: ''}" :navigation="true">
      <div class="section">
        <header class="backrooms-header">
          <div class="paralax title">
            <h1 class="glitchTxt" data-text="The Backrooms Game">The Backrooms Game</h1>
            <p>*full edition still in development!</p>
          </div>
          <div class="buttons paralax">
            <a href="#" class="btn btn-design"><p>View on steam</p></a>
            <a href="#" class="btn btn-design"><p>View on gamejolt</p></a>
          </div>
          <div class="scroll paralax" v-animate="{delay: 3500}" v-if="this.showScrollCue">
            <span></span>
            <p>scroll</p>
        </div>
        </header>
      </div>

      <div class="section">
        <article class="backrooms-features-free">
          <h1 class="Appear" v-scrollanimation="{delay: 500}"><p>free edition features</p></h1>
          <FeaturesCarousel :features="FeaturesFree" :progressBar="false"/>
        </article>
      </div>

      <div class="section">
        <article class="backrooms-roadmap-early">
          <h1 class="Appear" v-scrollanimation="{delay: 500}"><p>Early Access Road Map</p></h1>
          <FeaturesCarousel :features="progress" :progressBar="true"/>
          
        </article>
      </div>
      
      <div class="section" id="footer">
        <pppFooter />
      </div>


    </full-page>
    
  </main>
</template>

<script>
import pppFooter from "@/components/Footer.vue";
import FeaturesCarousel from "@/components/Features.vue";
export default {
  components:{
    pppFooter,
    FeaturesCarousel
  },
  data(){
      return{
        showScrollCue: true,
        FeaturesFree: [
          {
            id: 1,
            title: 'Infinite random level generation',
            text: 'Over 600 million square miles of mono yellow madness!'
          },
          {
            id: 2,
            title: 'Immersive in depth madness system',
            text: 'Trippy disorienting effects that will leave you shaking in your pants!'
            
          },
          {
            id: 3,
            title: 'An entity that roams the backrooms',
            text: 'Whatever you do, DONT LOOK AT IT!'
          },
          {
            id: 4,
            title: 'Remember who you are and where you come from',
            text: 'Check your watch every 30 seconds to keep track of time and distance walked.'
          },
        ],
        progress: [
          {
            id: 1,
            value: 75,
            title: 'Level 1',
            text: [
              'Environment models',
              'Custom level generation to make rooms larger and darker',
              'Light Timers'
            ]
          },
          {
            id: 2,
            value: 75,
            title: 'Being Movement/AI',
            text: [
              'Beings ability to chase player',
              'Being animations'
            ]
          },
          {
            id: 3,
            value: 100,
            title: 'Item Spawning/Usage',
            text: [
              'Design and model items',
              'Spawning system for items',
              'Inventory system'
            ]
          },
          {
            id: 4,
            value: 100,
            title: 'Discovery System',
            text: [
              'Design and create various discoveries',
              'Collection system'
            ]
          },
          {
            id: 5,
            value: 100,
            title: 'Level 0 Improvments',
            text: [
              'More props and interactable objects',
              'Bug fixes'
            ]
          },
          {
            id: 6,
            value: 100,
            title: 'Core Mechanics',
            text: [
              'Health/Health management',
              'Expanded madness system',
              'Watch improvments/additions',
              'stamina system'
            ]
          },
        ]
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
.backrooms-page, .backrooms-header,.backrooms-about, .buttons, .title, .modal, .backrooms-features-free, .progress-card, .backrooms-roadmap-early{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.backrooms{
  background: var(--gradientBGD), center/cover no-repeat fixed url('../components/images/backroomsglitch.gif');
  scroll-behavior: smooth;

  &-features-free, &-header, &-roadmap-early{
    height: 100vh;
    width: 100vw;
    padding: 1em;
    justify-content: center;
    position: relative;
  }

  &-header{
    justify-content: space-around;
    
    .title{
      margin-top: 3em;
      p{
        width: 80%;
        margin: .5em;
      }
    }
    .scroll{
      margin: 2em 0 0 0;
      top: 0;
      left: 0;
      transform: none;
      position: relative;
    }
  }

  &-features-free{

    h1{
      width: 80%;
      margin: .5em 0 .5em 0;
      font-size: 2em;
      height: max-content;
      p{
        margin-top: 0;
        margin-bottom: .25em;
      }
    }

    
    .slide-info{
      h1{
        margin: .5em 0 .5em 0;
      }
      &.slide{
        &-1{
          background: var(--gradientBGD), center/cover no-repeat url('../components/images/infinite.jpg');
        }
        &-2{
          background: var(--gradientBGD), center/cover no-repeat url('../components/images/madness.jpeg')          
        }
        &-3{
          background: var(--gradientBGD), center/cover no-repeat url('../components/images/monster.jpeg')
        }
        &-4{
          background: var(--gradientBGD), center/cover no-repeat url('../components/images/Watch.jpeg')
        }
        
      }
    }      

    p{
      margin-top: 1em;
    }
    
  }

  &-roadmap-early{
    justify-content: flex-start;
    h1{
      max-width: 80%;
      font-size: 1.8em;
      margin: .25em 0 .5em 0;
    }
    .progress-card{
      .feature-title{
        max-width: 90%;
        margin: .5em 0 .5em 0;
        font-size: 1.4em;
      }
      justify-content: space-around;
    }
  }
    
}



</style>