<template>
  <div class="home">
    <navBtn />
    <navBar />
    <header class="home-header">
      <div class="Text">
        <h1>Pie On A Plate Productions</h1>
        <sub>Deliciously Good Games</sub>
      </div>
      <featuredGames />
    </header>
    <section class="home-about">
      <h1>Learn About Us</h1>
      
    </section>

  </div>
</template>

<script>
import featuredGames from '@/components/gameCard.vue' 
import navBar from '@/components/Nav/nav.vue'
import navBtn from '@/components/Nav/burgerBtn.vue';

export default {
  name: 'Home',
  components: {
    featuredGames,
    navBtn,
    navBar
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--clrTxt);
  letter-spacing: 1.5px;
}

.home{
  font-family: var(--ff2);
  transition: .3s linear;  
  background: var(--clr1);
  height: max-content;
  max-width: 100vw;

 

  .home-header{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: max-content;
    background: var(--gradientBG), center/cover fixed no-repeat url('../assets/images/Backdrop.png');
    
    .Text{
      text-align: center;
      height: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      h1{
        font-family: var(--ff1);
      }

      sub{
        font-style: italic;
        font-size: 1em;
        margin-top: 3em;
      }
      margin: 30% 0 0 0;
    }
  }
}
</style>
