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
      <div v-for="member in members" :key="member.id" class="card" :class="`member-${member.ID}`">
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
      font-size: .85em;
    }
  }

  &-members{
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .card{
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 300px;
      height: 400px;
      z-index: 2;
      margin: 2.5em 1em 2.5em 1em;

      &::before{
          content: '';
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          clip-path: polygon(0 0, 100% 100%, 100% 100%, 0 100%);
          background: rgba(255,255,255, .1);
      }

      img{
        position: relative;
        width: 110px;
        height: 135px;
      }

      &.member{
        &-1{
            background: linear-gradient(45deg, #3B363A, #988C8C);
        }
        &-2{
            background: linear-gradient(45deg, #5A3926, #7B4F2F);
        }
        &-3{
            background: linear-gradient(45deg, #2d6885, #7eaeb4);
        }
        &-4{
            background: linear-gradient(45deg, #452311, #D1894C);
        }
        &-5{
            background: linear-gradient(45deg, #7C7667, #737376);
        }
      }

      .imgBx{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin-top: 4em;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: center;

        div{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h1{
            max-width: 90%;
            font-weight: bolder;
            letter-spacing: 2px;
            margin: 1em 0 0 0;
          }
          p{
              max-width: 80%;
              margin-top: 1em;
              font-size: .8em;
              font-style: italic;
          }
        }
      }

      .overlay{
        position: absolute;
        bottom: 20px;
        right: 20px;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background: #fff;
        box-shadow: 0 2px 5px rgba(0,0,0, .4);
        cursor: pointer;
        background: inherit;
        transition: .5s;
        
        &::before{
          content: 'Read';
          font-family: var(--ff1);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          font-size: 12px;
          text-transform: uppercase;
          color: #fff;
          font-weight: 900;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: .5s linear;
        }

        &:hover{
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;

          & ~ .content{
            transition: .5s linear .3s;
            opacity: 1;
          }
          &::before{
            display: none;
          }
        }

        
      }

      .content{
        pointer-events: none;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        opacity: 0;
        z-index: 2;
        padding: 1em;
        
        article{
          p{
            margin-top: .5em;
          }
        }
      
      }
    }

    h1, img, p{
      max-width: 100%;
    }
  }
}
</style>
