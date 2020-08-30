<template>
     <main>
            <router-link to="#" class="btn"><p>Home<p/></router-link>
            <router-link to="#" class="btn"><p>Contact<p/></router-link>
            <router-link to="#" class="btn"><p>Jobs<p/></router-link>
            <router-link to="#" class="btn"><p>About<p/></router-link>
            <router-link to="#" class="btn"><p>Devblog<p/></router-link>
     </main>
</template>

<script>
export default {
     name: 'links',
}
</script>

<style lang="scss">
main{
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     flex-wrap: wrap;
     height: 100vh;
     padding: 1em;
     font-family: var(--ff2);
     transition: .5s linear;
     
     .btn{
          text-decoration: none;
          padding: 1em;
     }
     p{
          font-size: 2em;
     }
}
</style>