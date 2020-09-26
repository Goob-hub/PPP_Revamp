<template>
     <div class="carousel-container-features" v-if="progressBar === false" >
          {{showPagination()}}
          <carousel :per-page="1" :loop="true" :paginationEnabled="true" :navigationEnabled="false" :mouseDrag="true" :autroplayHoverPause="true" :autoplay="false" :autoplayTimeout="3500"> 
               <slide v-for="feature in features" :key="feature.title">
                    <div v-scrollanimation="{delay: 1000}" class="slide-info" :class="`slide-${feature.id}`">
                         <h1 >{{feature.title}}</h1>
                         <p >{{feature.text}}</p>
                    </div>
               </slide>
          </carousel>
     </div>
     <div class="carousel-container-features" v-else >
          {{showPagination()}}
          <carousel :per-page="1" :loop="true" :paginationEnabled="true" :navigationEnabled="false" :mouseDrag="true" :autroplayHoverPause="true" :autoplay="false" :autoplayTimeout="3500"> 
               <slide v-for="data in features" :key="data.id"> 
                    <div v-scrollanimation="{delay: 500}" class="progress-card">
                         <h1 class="feature-title">{{data.title}}</h1>
                         <vue-ellipse-progress :progress="data.value" :size="100" 
                         :color="(data.value === 100) ? 'lime' : (data.value >= 75) ? '#bbe64e' : (data.value >= 50) ? 'cyan': (data.value >= 25) ? '#fcc305': '#e00b0b'" 
                         :emptyColor="'#333'" :legend="true" :line="'round'" animation="rs 1000" 
                         :dot="(data.value === 100) ? '10% lime' : (data.value >= 75) ? '10% #bbe64e' : (data.value >= 50) ? '10% cyan': (data.value >= 25) ? '10% #fcc305': '10% #e00b0b'">
                              <span slot="legend-value">%</span>
                              <p slot="legend-caption">Complete</p>
                         </vue-ellipse-progress> 
                         <ul>
                              <li v-for="text in data.text" :key="text"><p>-{{text}}</p></li>
                         </ul>
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
          progressBar: Boolean
     },
     methods:{
          showPagination(){
               setTimeout(() => {
                    let allPaginations = document.querySelectorAll('.VueCarousel-pagination');


                    if (window.innerHeight < 800){
                         allPaginations.forEach(pagination => {
                              pagination.style.display = 'none'
                         })
                    } else {
                         
                         allPaginations.forEach(pagination => {
                              pagination.style.display = 'block'
                         })
                    }
                    window.addEventListener('resize', () => {
                         this.showPagination();
                    })
               });

          }
     }
}
</script>

<style lang="scss">

@media (max-width: 823px) and (max-height: 411px){
     .carousel-container-features, .VueCarousel-slide{
          height: 100vh;
          width: 60vw;
     }

     .slide-info{
          
          transform: scale(.9);
          p{

               font-size: .8em;
          }

          h1{
               font-size: 1.5em;
          }
     }

     .progress-card{
          transform: scale(.9);
          
          p{
               font-size: .8em;
          }

          h1{
               font-size: 1.5em;
          }
     }
     
}

.carousel-container-features{
     height: max-content;
     width: 100vw;

     @media (max-width: 823px) and (max-height: 411px) {
          height: 100vh;
          width: 60vw;
     }
     
     
}

.VueCarousel-slide{
     
     display: flex;
     justify-content: center;
     align-items: center;
}

.slide-info{
     position: relative;
     transition: 1s ease-in-out;
     height: 95%;
     width: clamp(300px, 90vw, 600px);
     margin: .5em;
     padding: .5em;
     display: flex;
     flex-direction: column;
     flex-wrap: nowrap;
     justify-content: center;
     align-items: center;
     box-shadow: 0px 0px 5px white;
     
     
     &.before-enter{
          
          height: 0%;

     }

     &.enter{
         
          height: 95%;
     }

     h1{
          transition: .5s linear;
         
          margin: 1em 0 1em 0;
     }

     

     p{
          
          font-weight: 700;
          margin: .5em 0 .5em 0;
          line-height: 1.5em;
          letter-spacing: 2.5px;
     }

  
}
.progress-card{
     
     justify-content: space-around;
     box-shadow: 0px 0px 5px white;
     margin: .5em;
     padding: .75em;
     background: linear-gradient(45deg,#000000, #152331);
     position: relative;
     transition: 1s ease-in-out;
     width: clamp(300px, 90vw, 600px);

     @media (max-width: 823px) and (max-height: 411px) {
          
          
          h1{
               font-size: 2em;
          }
          h1, p{
               transform: scale(.8);

          }
          transform: scale(.9);

          ul, li{
               height: max-content;
               width: max-content;
          }
     }

     &.before-enter{
          height: 0%;

     }

     &.enter{
          height: 95%;
     }

     

     &::before{
          content: '';
          position: absolute;
          background: rgba(255, 255, 255, .05);
          top: 0;
          left: 0;
          height: 100%;
          width: 50%;
     }
     ul{
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          width: 100%;
          padding: 0;
          list-style-type: none;
          height: max-content;
          li{
               padding: 0;
               margin: 0;
               margin-top: .25em;
               width: 80%;
               p{
                    padding: .5em;
                    font-size: 1em;
                    width: 100%;
               }
          }
     }

     .ep-legend--value{
          font-family: var(--ff2);
     }
     .legend-caption{
          font-size: 1em;
     }
}
</style>