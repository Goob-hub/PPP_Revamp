<template>
  <main class="Dev">
      <header class="Dev-header"><h1>Development Blog</h1></header>
       <article class="Dev-article">
          <h1>Welcome! GGMT Trailer Up!</h1>
          <p>Welcome Message and The Great Geometric Multiverse Tour trailer</p>
          <p>
            game development, update, ggmt, the great geometric multiverse tour <br> <br> - May 10, 2018
          </p>
       </article>
       <pppFooter/>
  </main>
</template>

<script>
import pppFooter from '@/components/Footer.vue'
export default {
  components: {
    pppFooter
  }
}
</script>

<style lang="scss">
.Dev, .Dev-header, .Dev-article{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.Dev{
  min-height: 100vh;
  max-width: 100vw;
  width: 100vw;
  justify-content: space-between;

  background: var(--gradientBGD), center/cover no-repeat fixed url('../components/images/Backdrop2.jpg');
  text-align: center;
  &-header{
    h1{
      margin: 1em;
    }
    margin: 1em 0 1em 0;
  }

  &-article{
    padding: 1em;
    margin: 0 0 2em 0;
    h1,p{
      margin: 0 0 1.5em 0;
    }
  }

}
</style>