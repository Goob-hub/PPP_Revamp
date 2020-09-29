<template>
  <main class="backrooms">
    {{addEvents()}}
    
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
          
        </header>
      </div>

      <div class="section">
        <article class="backrooms-features-free paralax">
          <h1 class="Appear" v-scrollanimation="{delay: 500}"><p class="title-p">free edition features</p></h1>
          <FeaturesCarousel :features="FeaturesFree" :progressBar="false"/>
        </article>
      </div>

      <div class="section">
        <article class="backrooms-roadmap-early paralax">
          <h1 class="Appear" v-scrollanimation="{delay: 500}"><p class="title-p">Early Access Road Map</p></h1>
          <FeaturesCarousel :features="progressFree" :progressBar="true"/>
          
        </article>
      </div>
      <div class="section">
        <article class="backrooms-roadmap-full paralax">
          <h1 class="Appear" v-scrollanimation="{delay: 500}"><p class="title-p">Full Edition Road Map</p></h1>
          <FeaturesCarousel :features="progressFull" :progressBar="true"/>
          
        </article>
      </div>
      

      <pppFooter />
    
    
  </main>
</template>

<script>
import FeaturesCarousel from "@/components/Features.vue";
import pppFooter from '@/components/Footer.vue'
export default {
  components:{
    FeaturesCarousel,
    pppFooter
  },
  data(){
      return{
        showScrollCue: true,
        FeaturesFree: [
          {
            id: 1,
            title: 'Infinite random level generation',
            text: 'Over 600 million square miles of mono yellow madness to explore and get lost in!'
          },
          {
            id: 2,
            title: 'Immersive in depth madness system',
            text: 'Trippy, disorienting, and maddening effects that will rock your world and probably wanna make you throw up!'
            
          },
          {
            id: 3,
            title: 'An entity that roams the backrooms',
            text: 'Whatever you do, DONT LOOK AT IT! It watches in the shadows'
          },
          {
            id: 4,
            title: 'Remember who you are and where you come from',
            text: 'Check your watch every 30 seconds to keep track of time and distance walked.'
          },
        ],
        progressFree: [
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
        ],
        progressFull: [
          {
            id: 1,
            value: 0,
            title: 'Level 2',
            text: [
              'Environment models/textures',
              'Custom level generation for long halls',
              'Steamy pipes to avoid'
            ]
          },
          {
            id: 2,
            value: 0,
            title: 'Level -1',
            text: [
              'Environment models/textures',
              'HELL OF ALL HELLS HELL OF ALL HELLS'
            ]
          },
          {
            id: 3,
            value: 5,
            title: 'Extended settings',
            text: [
              'Sensitivity sliders',
              'More detailed graphical settings',
              'Controller support'
            ]
          },
          {
            id: 4,
            value: 25,
            title: 'Being Encounters',
            text: [
              'Various being encounters',
              'More being manifestations'
            ]
          },
          {
            id: 5,
            value: 25,
            title: 'Multiple endings/deaths',
            text: [
              'More ways to perish',
              'Diffrent endings on different levels'
            ]
          },
          {
            id: 6,
            value: 25,
            title: 'Even more items',
            text: [
              'More items/collectables'
            ]
          },
          {
            id: 7,
            value: 0,
            title: 'Potential ports',
            text: [
              'VR(Research complete. Confirmed :D!!)',
              'Mobile(Research complete, No mobile :(!!)'
            ]
          },
          {
            id: 8,
            value: 50,
            title: 'Translations',
            text: [
              'Full German text',
              'Full spanish text'
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
.backrooms-page, .backrooms-header,.backrooms-about, .buttons, .title, .modal, .backrooms-features-free, .progress-card, .backrooms-roadmap-early, .backrooms-roadmap-full{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.backrooms{
  background: var(--gradientBGD), center/cover no-repeat fixed url('../components/images/backroomsglitch.gif');
  scroll-behavior: smooth;

  &-features-free, &-header, &-roadmap-early, &-roadmap-full{
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
    justify-content: flex-start;
    h1{
      width: clamp(260px, 80%, 500px);
      margin: .5em 0 .5em 0;
      
      height: max-content;
      p{
        margin-top: 0;
        margin-bottom: .25em;
      }

      .carousel-container-features, .slide-info{
        height: max-content;
        max-height: 80vh;
      }
    }

    
    .slide-info{
      max-height: 80vh;
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

  &-roadmap-early, &-roadmap-full{
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

  .ppp-footer{
    height: 100%;
    p{
      text-align: center;
    }
  }
    
}



</style>