<template>
  <div class="home">
    <navBtn />
    <navBar />
    <Head />
    <section class="home-about">
      <h1>Learn About Us</h1>
      
    </section>

  </div>
</template>

<script>
import Head from '@/components/HomePage/header.vue' 
import navBar from '@/components/Nav/nav.vue'
import navBtn from '@/components/Nav/burgerBtn.vue';

export default {
  name: 'Home',
  components: {
    Head,
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
}
</style>
