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
            <a href="#" class="btn btn-design"><p>Buy on steam</p></a>
          </div>
        </header>
      </div>

      <div class="section">
        <article class="ggmt-article paralax">
          <div v-scrollanimation="{delay: 0}">
            <h1><span>Out Now!</span></h1>
          </div>
          <p v-scrollanimation="{delay: 1500}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sequi, recusandae adipisci autem alias laborum, error placeat iure aliquid eaque quod labore. Quod tempora ex blanditiis quo quae quisquam deserunt.</p>  
          <a href="https://www.youtube.com/embed/bE5wfkPBnJU" class="btn btn-design"><p>View Trailer</p></a>
        </article>
      </div>

      <div class="section">
        <article class="ggmt-features paralax">
          <h1 class="f-title Appear" v-scrollanimation="{delay: 0}"><p>Features</p></h1>
          <carousel :per-page="1" :loop="true" :paginationEnabled="false" :navigationEnabled="true" :mouseDrag="true" :autroplayHoverPause="true" :autoplay="false" :autoplayTimeout="3500"> 
            <slide class="Vue-slide" v-for="feature in Features" :key="feature.title">
              <h1>{{feature.title}}</h1>
              <p>{{feature.text}}</p>
              <span class="detail" v-for="detail in feature.details" :key="detail.id" :class="`detail-${detail.id}`"><h1>{{detail.content}}</h1></span>
            </slide>
          </carousel>
        </article>
      </div>

    </full-page>
  </main>
</template>

<script>
export default {
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
        }, 1000);
      

      });
    },
  },
  data(){
    return {
      Features: [
        {
          title: 'Randomized Randomness',
          text: 'The upgrades/downgrades you receive are random.The weapons you receive are random. The enemies spawning are random. Even the levels you play are, you guessed it, completely random.',
          details: [
            {
              id: 1,
              content: '?'
            },
            {
              id: 2,
              content: '?'
            }
            
          ]
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
.ggmt, .ggmt-header, .ggmt-article, .title, .buttons, .ggmt-section, .Vue-slide, .ggmt-features{
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
    

    .f-title{
      margin: 1em 0 1em 0;
      font-size: 3em;
      &::before{
        height: 2.5px;
        box-shadow: 0px 0px 5px white;
      }
    }

    .Vue-slide{
      position: relative;
      .detail{
        position: absolute;
        z-index: -1;
        font-size: 2.5em;
        opacity: 1;
    
        &-1{
          top: -7%;
          left: 0%;
        }
        &-2{
          top: -7%;
          right: 0%;
        }
      }

      h1{
        font-size: 1.8em;
        margin-bottom: .5em;
      }

      p{
        line-height: 1.3em;
        letter-spacing: 2.5px;
      }
    }
  }


}
</style>