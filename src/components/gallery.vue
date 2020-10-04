<template>
  <div class="gallery paralax">
     <h1 class="Appear" v-scrollanimation="{delay: 0}"><p class="title-p">Gallery</p></h1>
     <div class="gallery-images">
          <div class="gallery-images-container" :class="`img-${img.id}`" v-for="img in images" :key="img.src" v-scrollanimation="{delay: (img.id * 100)}">
               <img :src="img.src" alt="">
          </div>
     </div>
  </div>
</template>

<script>
export default {
     name: 'pppGallery',
     props: {
          images: Array
     },
     methods: {
     }
}
</script>

<style lang="scss">
.gallery, .gallery .modal, .gallery-images, .gallery-images-container{
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
}


.gallery{
     padding: 1em;
     margin: 1em 0 1em 0;
     h1{
          margin-bottom: .5em;
     }
     &.fix{
          position: fixed;
          z-index: 4;
          height: 100vh;
          width: 100vw;
          background: var(--gradientBG);
          top: 0;
          left: 0;
          padding: 1em;
          margin: 0;
          transform: translate(0, 0);
     }
     .title-p{
          margin-bottom: .25em;
     }
     &-images{
          position: relative;
          flex-direction: row;
          flex-wrap: wrap;
          margin: 1em;
          max-width: 90vw;

          &-container{
               
               position: relative;
               transition: 1s linear;

               &.before-enter{
                    transform: rotate(20deg);
                    opacity: 0;
               }

               &.enter{
                    transform: rotate(0);
                    opacity: 1;
               }
               img{
                    display: block;
                    margin: 1em;
                    max-height: 100%;
                    box-shadow: 0px 0px 5px white;
                    max-width: 100%;

               }
          }
     }

     
}

</style>