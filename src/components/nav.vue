<template>
  <nav>
       <header>
          <p>logo</p>
          <h1>PPP</h1>
          <navBtn />
       </header>
       <main>
            <button class="btn">home</button>
            <button class="btn">about</button>
            <button class="btn">games</button>
            <button class="btn">devblog</button>
       </main>
  </nav>
</template>

<script>
import navBtn from '@/components/burgerBtn.vue';
export default {
     name: 'navBar',
     components: {
          navBtn
     }

}
</script>

<style lang="scss">
nav{
     display: flex;
     flex-direction: column;
     height: 15vh;
     overflow: hidden;
     background: var(--clrBackdrop);
     transition: .5s linear;

     header{
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 100%;
          min-height: 15vh;
     }

     main{
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          padding: 0 30% 30% 30%;
          min-height: 85vh;
     }

     img{
          height: 3em;
          width: 5em;
     }
}
</style>