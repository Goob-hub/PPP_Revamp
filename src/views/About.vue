<template>
  <div class="about">
    <div class="cover">
      <h1>Goofy</h1>
      <h1>Innovative</h1>
      <h1>Creative</h1>
      <h1>Passionate</h1>
      <h1>Delicious</h1>
    </div>
    <article class="history">
      <h1>Our History</h1>
      <p>Pie On A Plate Productions was actually originally thought of when I was 10, over 9 years ago.  I was scribbling in a notebook alongside all my other drawings, and drew a single piece of pumpkin pie on a small, gray plate.  Why did I draw this specifically?  Well, because I've always loved pumpkin pie (no seriously, I once ate an entire one by myself in like 10 minutes and ruined Thanksgiving), and I wasn't just going to draw some delicious piece of food without a plate.  I wasn't a savage, after all.  I thought for a moment, and tilted it appropriately: "Pie On A Plate Productions".  The drawing was lost among the others, and I soon forgot about it entirely.</p>
    </article>

    <article class="today">
      <h1>So here we are today...</h1>
      <p>I still love pie.  I still ruin holidays by eating it all before the main course is even finished cooking.  But now I make video games.  We make video games.  Hopefully, in some sense or another, these games we create are just as delicious as a good old fashion slice of pumpkin pie.  Because hey, we are all allowed to dream, right?</p>
      <h1 class="quote">-David Campbell III Founder/CEO</h1>
    </article>

    <section class="members">
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

  .members{
    max-width: 100vw;
    h1, ul, li, p{
      width: 100%;
    }
  }
}
</style>
