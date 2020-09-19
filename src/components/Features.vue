<template>
  <div class="carousel-container"  >
     <carousel :per-page="1" :loop="true" :paginationEnabled="false" :navigationEnabled="true" :mouseDrag="true" :autroplayHoverPause="true" :autoplay="false" :autoplayTimeout="3500"> 
          <slide v-for="feature in features" :key="feature.title">
               <div v-scrollanimation="{delay: 1000}" class="slide-info" :class="`slide-${feature.id}`">
                    <h1>{{feature.title}}</h1>
                    <p>{{feature.text}}</p>
               </div>
          </slide>
     </carousel>
     </div>
</template>

<script>
export default {
     name: 'FeaturesCarousel',
     props: {
          features: Array,
     }
}
</script>

<style lang="scss">
.carousel-container{
     height: max-content;
     width: 100%;
}
.slide-info{
     position: relative;
     transition: 1s ease-in-out;
     height: 95%;
     margin: .5em;
     padding: .5em;
     flex-direction: column;
     flex-wrap: unset;
     box-shadow: 0px 0px 5px white;
     
     &.before-enter{
     
          height: 0%;

     }

     &.enter{
          height: 95%;
     }

     h1{
          position: relative;
          font-size: 1.8em;
          margin: 1em 0 1em 0;
     }

     

     p{
          font-weight: 700;
          margin: .5em 0 .5em 0;
          line-height: 1.5em;
          letter-spacing: 2.5px;
     }
}
</style>