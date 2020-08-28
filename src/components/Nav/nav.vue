<template>
  <nav>
       <header>
          <p>Logo</p>
          <navBtn />
       </header>
       <main>
            <button class="btn"><p>Home<p/></button>
            <button class="btn"><p>About<p/></button>
            <button class="btn"><p>Contact<p/></button>
            <button class="btn"><p>Jobs<p/></button>
            <button class="btn"><p>Games<p/></button>
            <button class="btn"><p>Devblog<p/></button>
       </main>
  </nav>
</template>

<script>
import navBtn from '@/components/Nav/burgerBtn.vue';
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
     position: fixed;
     top: 0;
     width: 100%;
     z-index: 5;


     header{
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          min-height: 15vh;
          font-family: var(--ff1);
     }

     main{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          min-height: 85vh;
          padding: 1em;
          font-family: var(--ff2);
          
          

          button{
               padding: 1em;
          }

          p{
               font-size: 2em;
          }
     }

     img{
          height: 3em;
          width: 5em;
     }
}
</style>