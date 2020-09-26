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
  </main>
</template>

<script>
export default {
  components: {
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
  padding: 1.5em;
  background: var(--gradientBGD), center/cover no-repeat fixed url('../components/images/Backdrop2.jpg');
  text-align: center;
  &-header{
    h1{
      margin: 1em;
    }
   
  }

  &-article{
    padding: 1em;
    h1,p{
      margin: 0 0 1.5em 0;
    }
  }

}
</style>