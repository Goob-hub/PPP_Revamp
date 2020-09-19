<template>
  <main class="ggmt">
    {{this.createParticle()}}
    <full-page :options="{options: ''}" class="particle">
      <div class="section">
        <header class="ggmt-header">
          <div class="title">
            <h1 class="paralax"><span>The</span></h1> 
            <h1 class="paralax">Great Geometric Multiverse Tour</h1>
          </div>
          <div class="buttons paralax">
            <a href="#" class="btn btn-design"><p>View on steam</p></a>
            <a href="#" class="btn btn-design"><p>View on gameJolt</p></a>
            <a href="#" class="btn btn-design"><p>View on itch.io</p></a>
          </div>
        </header>
      </div>

      <div class="section">
        <article class="ggmt-features paralax">
          <h1 class="f-title Appear" v-scrollanimation="{delay: 0}"><p>Features</p></h1>
          <FeaturesCarousel :features="Features"/>
        </article>
      </div>

      <div class="section">
        <article class="ggmt-article paralax">
          <div v-scrollanimation="{delay: 0}">
            <h1><span>Out Now!</span></h1>
          </div>
          <p v-scrollanimation="{delay: 1500}">The Great Geometric Multiverse Tour is out now!! Watch the trailer to get a taste of the chaotic fast paced first person shape shooter and start having a blast right now!</p>  
          <a href="https://www.youtube.com/embed/bE5wfkPBnJU" class="btn btn-design"><p>View Trailer</p></a>
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
  components: {
    pppFooter,
    FeaturesCarousel
  },
  methods: {
    createParticle(){
      setTimeout(() => {
        const page = document.querySelector('.particle');
        const particle = document.createElement('span');
        particle.className = `effect paralax ${this.particles[Math.floor(Math.random() * this.particles.length)]}`;
  
        let size = Math.random() * 50;
  
        particle.style.height = `${20 + size}px`;
        particle.style.width = `${20 + size}px`;

        

        particle.style.top = `${Math.random() * page.getBoundingClientRect().height}px`;
        particle.style.left = `${Math.random() * page.getBoundingClientRect().width}px`;

        particle.style.background = this.colors[Math.floor(Math.random() * this.colors.length)];

        page.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 5000);

        setTimeout(() => {
          this.createParticle();
        }, 600);
      

      });
    },
  },
  data(){
    return {
      Features: [
        {
          id: 1,
          title: 'Randomized Randomness',
          text: 'The upgrades/downgrades you receive are random.The weapons you receive are random. The enemies spawning are random. Even the levels you play are, you guessed it, completely random.',
        },
        {
          id: 2,
          title: 'So Many Upgrades...',
          text: 'Become the ultimate super soldier shape killing machine with powerups/upgrades such as HOPELESS ROMANTIC, LIGHTER FLUID, BULLET HATS, and so much more!',
        },
        {
          id: 3,
          title: 'Over 35 multiverses to explore and liberate',
          text: 'With classics such as ONLY FIRE, MY GOD ITS EVERYWHERE, SPIKY SPIKES, WHY IS EVERYTHING SHAKING, and so much more!',
        },
        {
          id: 4,
          title: 'Over 40 Enemy Types',
          text: 'Including but not limited to SCARY SWARM BOI, SKY DONUT, SCOOTIN TOOTIN ROCKET SHOOTIN PAL, and more!',
        },
        {
          id: 5,
          title: 'And if all that wasnt enough',
          text: 'The GGMT is proud to state that it includes over 800 spikes, 300 crates, and 150 bottles!',
        },
      ],
      colors: [
        '#2196f3',
        '#e91e63',
        '#ffeb3b',
        '#74ff1d'
      ],
      particles: [
        'triangle',
        'star',
        'circle'
      ]
    }
  },
}
</script>

<style lang="scss">
.ggmt, .ggmt-header, .ggmt-article, .title, .buttons, .ggmt-section, .slide-info, .ggmt-features, .detail{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.ggmt{
  min-height: 100vh;
  text-align: center;
  background: var(--gradientBGD), center/cover no-repeat fixed url('../components/images/Backdrop5.png');

  .section{
    z-index: 3;
    overflow: hidden;
  }

  .effect{
    z-index: -1;
  }
  
  h1{
    text-shadow: 0px 0px 5px white;
  }

  .btn{
    height: 100%;
    width: max-content;
    height: max-content;
    text-decoration: none;
    &:hover{
      p{
        transition: .5s linear;
        color: black;
      }
    }
  }
  
  &-header{
    height: 100vh;
    width: 100vw;
    padding: 1em;
 
    animation: fade-in 1s linear;
    animation-fill-mode: forwards;
    .title{
      h1{
        text-shadow: 0px 0px 5px white;
        font-size: 3em;
        letter-spacing: 3px;
        span{
          transition: .5s linear;
        }
        &:nth-child(1){
          margin-bottom: .5em;
          width: max-content;
          position: relative;
          font-size: 2em;
          overflow: hidden;
          span{
            letter-spacing: 5px;
          }
          &::before{
            box-shadow: 0px 0px 5px white;
            content: '';
            position: absolute;
            height: 3px;
            width: 0;
            background: white;
            bottom: 0;
            left: 0;
            animation: expand 1s linear 1s;
            animation-fill-mode: forwards;
          }
        }
      }
    }
  }

  &-article{
    padding: 2em;
    position: relative;
    overflow: visible;
    max-width: 100vw;
    height: 100%;
    div{
      z-index: 2;
        position: relative;
        overflow: hidden;
        width: max-content;
        margin-bottom: 1em;
        transition: 1s linear;
        h1{
          padding-left: .25em;
          font-size: 2.5em;
          transition: 1s linear 1s;
        }
        &::before{
          content: '';
          transition: 1s linear;
          position: absolute;
          top: 0;
          left: 0;
          height: 0;
          width: 2px;
          background: white;
          box-shadow: 0px 0px 5px white;
        }
        &.before-enter{
          h1{
            transform: translateX(-100%);
          }

        }

        &.enter{
          h1{
            transform: initial;
          }

          &::before{
            height: 100%;
          }
        }
      
    }

    p{
      transition: 1s linear;
      line-height: 1.5em;
      letter-spacing: 2px;
      &.before-enter{
        opacity: 0;
      }

      &.enter{
        opacity: 1;
      }
    }
  }

  &-features{
    padding: 1em;
    overflow: visible;
    height: 100vh;
    max-width: 100vw;

    .f-title{
      margin: .5em 0 .5em 0;
      font-size: 3em;
      &::before{
        height: 2.5px;
        box-shadow: 0px 0px 5px white;
      }
    }

  .slide-info{
    &.slide{
      &-1{
        background: var(--gradientBGD), center/cover no-repeat url('../components/images/random.jpg');
      }
      &-2{
        background: var(--gradientBGD), center/cover no-repeat url('../components/images/store.png')          
      }
      &-3{
        background: var(--gradientBGD), center/cover no-repeat url('../components/images/multiverse.png')
      }
      &-4{
        background: var(--gradientBGD), center/cover no-repeat url('../components/images/enemy.png')
      }
      &-5{
        background: var(--gradientBGD), center/cover no-repeat url('../components/images/crates.png')
      }
    }
  }      
  }
  

  #footer, .fp-tableCell{
    .ppp-footer{
      height: 100vh;
    }
    height: 100vh;
    display: flex;
    flex-wrap: unset;
    justify-content: flex-end;
    align-items: flex-end;
  }
  


}
</style>