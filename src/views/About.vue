<template>
<!-- Animate with vue directive -->
  <div class="about">
    <header class="about-header">
        <h1>
          <p>We are</p>
        </h1>
        <h1>
          <p> Creative,</p>
        </h1>
        <h1>
          <p> Goofy,</p>
        </h1>
        <h1>
          <p> Passionate,</p>
        </h1>
        <h1>
          <p> Delicious</p>
        </h1>
        <div class="scroll" v-animate="{delay: 4000}">
          <span></span>
          <p>scroll</p>
        </div>
    </header>

    <article class="about-history">
      <h1 v-animate="{delay: 1400, transform: ['0px', '100px']}">Our History</h1>
      <p v-animate="{delay: 1400, transform: ['0px', '100px']}">Pie On A Plate Productions was actually originally thought of when I was 10, over 9 years ago.  I was scribbling in a notebook alongside all my other drawings, and drew a single piece of pumpkin pie on a small, gray plate.  Why did I draw this specifically?  Well, because I've always loved pumpkin pie (no seriously, I once ate an entire one by myself in like 10 minutes and ruined Thanksgiving), and I wasn't just going to draw some delicious piece of food without a plate.  I wasn't a savage, after all.  I thought for a moment, and tilted it appropriately: "Pie On A Plate Productions".  The drawing was lost among the others, and I soon forgot about it entirely.</p>
    </article>

    <article class="about-today">
      <h1>So here we are today...</h1>
      <p>I still love pie.  I still ruin holidays by eating it all before the main course is even finished cooking.  But now I make video games.  We make video games.  Hopefully, in some sense or another, these games we create are just as delicious as a good old fashion slice of pumpkin pie.  Because hey, we are all allowed to dream, right?</p>
      <h1 class="quote">-David Campbell III Founder/CEO</h1>
    </article>

    <section class="about-members">
      <div v-for="member in members" :key="member.id" :class="`member-${member.ID}`">
        <h1>{{member.Name}}</h1>
        <ul>
          <li>
            <p>{{member.Position}}</p>
          </li>
          <li>
            <p>{{member.DateHired}}</p>
          </li>
          <li>
            <p>{{member.FavoriteGame}}</p>
          </li>
          <li>
            <p>{{member.FunFact}}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    data(){
      return{
        members: {
          1: {
            ID: 1,
            Name: 'David CampBell III',
            Position: 'Founder, CEO, Lead Developer, Lead Programmer',
            DateHired: 'Started - 2017',
            FavoriteGame: 'Favorite Game - Empyrion - Galactic Survival',
            FunFact: 'Special Talent - “I can neigh like a horse surprisingly well, and once did so in a stable full of horses who then proceeded to freak the hell out”',
            imgSrc: ''
          },
          2: {
            ID: 2,
            Name: 'Andy Montoya IV',
            Position: 'Lead Artist, Lead Animator',
            DateHired: 'Started - 2019', 
            FavoriteGame: 'Favorite Game - Tearaway',
            FunFact: 'Fun Fact - “I was an extra in episode 19, season 2 of Chicago P.D”',
            imgSrc: ''
          },
          3: {
            ID: 3,
            Name: 'amber Lee Warland',
            Position: 'Lead Soundtrack Composer, Lead Sound Developer',
            DateHired: 'Started - 2019', 
            FavoriteGame: 'Favorite Game - Roller Coaster Tycoon 2',
            FunFact: 'Fun Fact - “I was once spat on by a Beluga whale”'
          },
          4: {
            ID: 4,
            Name: 'Ariadne Alcala Collazo',
            Position: 'Lead Translator',
            DateHired: 'Started - 2019', 
            FavoriteGame: 'Favorite Games - Sims4 and The Elder Scrolls Online',
            FunFact: 'Fun Fact - “Once I got an unwanted kiss from a seal. Still traumatized.”',
            imgSrc: ''
          },
          5: {
            ID: 5,
            Name: 'Fran Vergara',
            Position: 'Artist',
            DateHired: 'Started - 2019', 
            FavoriteGame: 'Favorite Game - Persona 4',
            FunFact: 'Fun Fact - “With 13 years I created my own radio station at home (no license, of course), I even appeared in the press, but I got bored and I closed it. I was also the 17th pokemon trainer worldwide once.”',
            imgSrc: ''
          },
        }
      }
    },
    methods: {
      
      
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
  // background: black;
  padding: 1em;
  
  &-header{
    margin: 0 0em 5vh 0;
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1{
      width: max-content;
      position: relative;
      font-size: 2em;
      overflow: hidden;
      margin-top: .25em;
      &::before{
        content: '';
        position: absolute;
        transform-origin: left;
        height: 2px;
        width: 0;
        left: 0;
        bottom: 0;
        background: white;
        animation: expand .8s cubic-bezier(0.42, 0, 0, 0.995);
        animation-fill-mode: forwards;
      }

      p{
        font-weight: 300;
        transform: translateY(-120px);
        animation: move .5s ease-in-out;
        animation-fill-mode: forwards;
        color: darken(white, 20%);
      }

      &:nth-child(1){
        p{
          animation-delay: .7s;
        }
      }

      &:nth-child(2){
        &::before{
          animation-delay: .5s;
        }
        p{
          animation-delay: 1.2s;
          // color: red;
          // text-shadow: 0px 0px 5px rgba(red, .8);
        }
      }
      &:nth-child(3){
        &::before{
          animation-delay: 1s;
        }
        p{
          animation-delay: 1.7s;
          // color: green;
          // text-shadow: 0px 0px 5px rgba(green, .8);
        }
      }
      &:nth-child(4){
        &::before{
          animation-delay: 1.5s;
        }
        p{
          animation-delay: 2.2s;
          // color: blue;
          // text-shadow: 0px 0px 5px rgba(blue, .8);
        }
      }
      &:nth-child(5){
        &::before{
          animation-delay: 2s;
        }
        p{
          animation-delay: 2.7s;
          // color: yellow;
          // text-shadow: 0px 0px 5px rgba(yellow, .6);
        }
      }
    }

    .scroll{
      position: absolute;
      margin-top: 1em;
      bottom: 3em;
      left: 50%;
      transform: translateX(-55%);
      p{
        transform: translateY(-5em);
        animation: dissapear 2s linear infinite;
        animation-delay: .5s;
        margin-top: 3em;
      }
      span{
        position: absolute;
        height: 3.1em;
        width: .6px;
        overflow: hidden;
        &::before{
          content: '';
          position: absolute;
          height: 3em;
          width: .5px;
          background: white;
          animation: shrink 2s linear infinite;
        }

      }
    }
  }

  &-history, &-today{
    padding: .5em;
    h1{
      font-size: 2em;
      margin: .5em;
    }
    p{
      line-height: 1.75em;

    }
  }

  &-members{
    max-width: 100vw;
    h1, ul, li, p{
      max-width: 100%;
    }

    ul, li{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
