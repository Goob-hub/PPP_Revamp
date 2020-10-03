<template>
<!-- Animate with vue directive -->
  <div class="about">
    {{addEvents()}}
    <header class="about-header">
        <h1 class="Appear" v-scrollanimation="{delay: 0}">
          <p class="title-p">We are</p>
        </h1>
        <h1 class="Appear" v-scrollanimation="{delay: 0}">
          <p class="title-p"> Creative,</p>
        </h1>
        <h1 class="Appear" v-scrollanimation="{delay: 0}">
          <p class="title-p"> Goofy,</p>
        </h1>
        <h1 class="Appear" v-scrollanimation="{delay: 0}">
          <p class="title-p"> Passionate,</p>
        </h1>
        <h1 class="Appear" v-scrollanimation="{delay: 0}">
          <p class="title-p"> Delicious</p>
        </h1>
        <div class="scroll" v-scrollanimation="{delay: 3000}">
          <span></span>
          <p>scroll</p>
        </div>
    </header>

    <article class="about-history">
      <h1 v-scrollanimation="{delay: 100}">Our History</h1>
      <br>
      <p v-scrollanimation="{delay: 100}">
        On A Plate Productions was actually originally thought of when I was 10, over 9 years ago.
        </p>  <br>
      <p v-scrollanimation="{delay: 100}">I was scribbling in a notebook alongside all my other drawings, and drew a single piece of pumpkin pie on a small, gray plate.  Why did I draw this specifically?</p> <br>
      <p v-scrollanimation="{delay: 100}">
        Well, because I've always loved pumpkin pie (no seriously, I once ate an entire one by myself in like 10 minutes and ruined Thanksgiving), and I wasn't just going to draw some delicious piece of food without a plate. I wasn't a savage, after all.
      </p> <br>
      <p v-scrollanimation="{delay: 100}">
         I thought for a moment, and tilted it appropriately: "Pie On A Plate Productions".  The drawing was lost among the others, and I soon forgot about it entirely. 
      </p>
    </article>

    <article class="about-today">
      <h1 v-scrollanimation="{delay: 100}">So here we are today...</h1>
      <br>
      <p v-scrollanimation="{delay: 100}">I still love pie.  I still ruin holidays by eating it all before the main course is even finished cooking.  But now I make video games.  We make video games.  Hopefully, in some sense or another, these games we create are just as delicious as a good old fashion slice of pumpkin pie.  Because hey, we are all allowed to dream, right?</p> <br> <p class="quote" v-scrollanimation="{delay: 100}"><strong style="font-size: 1.2em;">-David Campbell III Founder/CEO</strong></p>
    </article>

    <div class="team">
      <h1 class="team-title" v-scrollanimation="{delay: 100}">Our Team!!</h1>
      <section class="cards-container">
        <div v-for="member in members" :key="member.id" class="card" :class="`card-${member.ID}`" v-scrollanimation="{delay: 100}">
          <div class="imgBx">
            <div>
              <img :src="member.img" alt="what">
              <h1>{{member.Name}}</h1>
              <p>-{{member.Position}}</p>
            </div>
          </div>
          <div class="overlay">
          </div>
          <div class="content">
            <article>
              <h1>Date hired:</h1>
              <p>{{member.DateHired}}</p>
            </article>
            <article>
              <h1>Favorite Game:</h1>
              <p>{{member.FavoriteGame}}</p>
            </article>
            <article>
              <h1>Fun Fact:</h1>
              <p>{{member.FunFact}}</p>
            </article>
          </div>
        </div>
      </section>
    </div>
    <pppFooter/>
  </div>
</template>

<script>
import pppFooter from '@/components/Footer.vue'
export default {
  components: {
    pppFooter
  },
    data(){
      return{
        showScrollCue: true,
        members: {
          1: {
            ID: 1,
            Name: 'David CampBell III',
            Position: 'Founder, CEO, Lead Developer, Lead Programmer',
            DateHired: '2017',
            FavoriteGame: 'Empyrion - Galactic Survival',
            FunFact: '“I can neigh like a horse surprisingly well, and once did so in a stable full of horses who then proceeded to freak the hell out”',
            img: require("../components/images/david.jpg")
          },
          2: {
            ID: 2,
            Name: 'Andy Montoya IV',
            Position: 'Lead Artist, Lead Animator',
            DateHired: '2019', 
            FavoriteGame: 'Tearaway',
            FunFact: '“I was an extra in episode 19, season 2 of Chicago P.D”',
            img: require('../components/images/andy.jpg')
          },
          3: {
            ID: 3,
            Name: 'amber Lee Warland',
            Position: 'Lead Soundtrack Composer, Lead Sound Developer',
            DateHired: '2019', 
            FavoriteGame: 'Roller Coaster Tycoon 2',
            FunFact: '“I was once spat on by a Beluga whale”',
            img: require('../components/images/amber.jpg')
          },
          4: {
            ID: 4,
            Name: 'Ariadne Alcala Collazo',
            Position: 'Lead Translator',
            DateHired: '2019', 
            FavoriteGame: 'Sims4 and The Elder Scrolls Online',
            FunFact: '“Once I got an unwanted kiss from a seal. Still traumatized.”',
            img: require('../components/images/Ariadne.jpg')
          },
          5: {
            ID: 5,
            Name: 'Fran Vergara',
            Position: 'Artist',
            DateHired: '2019', 
            FavoriteGame: 'Persona 4',
            FunFact: '“With 13 years I created my own radio station at home (no license, of course), I even appeared in the press, but I got bored and I closed it. I was also the 17th pokemon trainer worldwide once.”',
            img: require('../components/images/Fran.jpg')
          },
        }
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
.about{
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  background: var(--gradientBG), center/cover fixed no-repeat url('../components/images/Backdrop.png');
  // background: #111;
  padding: 1em 1em 0 1em;


  .team{
    margin-top: clamp(2rem, 20%, 5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .team-title{
      margin-bottom: 1em;
    }
  }

  &-header{
    margin: 0 0em 5vh 0;
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

  &-history{
    margin-top: 10vh;
  }

  &-history, &-today{
    padding: .5em;
    h1{
     
      margin: .5em;
    }
    p{
      line-height: 1.75em;
      max-width: clamp(30vw, 100vw, 400px);
    }

    h1,p, .scroll, .team-title{
      &.before-enter{
        transform: translateX(-100px);
        opacity: 0;
        transition: all .7s linear .3s;
      }

      &.enter{
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }

  
}
</style>
