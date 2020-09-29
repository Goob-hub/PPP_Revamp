<template>
     <div class="carousel-container-features" v-if="progressBar === false" >
          {{showPagination()}}
          <carousel :per-page="1" :loop="true" :paginationEnabled="paginationDisplay" :navigationEnabled="false" :mouseDrag="true" :autroplayHoverPause="true" :autoplay="true" 
          :paginationActiveColor="'white'" :paginationColor="'grey'" :autoplayTimeout="3500" :perPageCustom="[[1500, 2]]"> 
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
          {{setCircleSize()}}
          {{getClass()}}
          <carousel :per-page="1" :loop="true" :paginationEnabled="paginationDisplay" 
          :paginationActiveColor="'white'" :paginationColor="'grey'" :navigationEnabled="false" :mouseDrag="true" :autroplayHoverPause="true" :autoplay="true" :autoplayTimeout="3500" :perPageCustom="[[1500, 2]]"> 
               <slide v-for="data in features" :key="data.id"> 
                    <div v-scrollanimation="{delay: 500}" class="progress-card">
                         <h1 class="feature-title">{{data.title}}</h1>
                         <div class="circle">
                              <vue-ellipse-progress :progress="data.value"  
                              :size="circleSize"
                              :color="(data.value === 100) ? 'lime' : (data.value >= 75) ? '#bbe64e' : (data.value >= 50) ? 'cyan': (data.value >= 25) ? '#fcc305': '#e00b0b'" 
                              :emptyColor="'#333'" :legend="true" :line="'round'" animation="rs 1000" 
                              :dot="(data.value === 100) ? '10% lime' : (data.value >= 75) ? '10% #bbe64e' : (data.value >= 50) ? '10% cyan': (data.value >= 25) ? '10% #fcc305': '10% #e00b0b'">
                                   <span slot="legend-value">%</span>
                                   
                              </vue-ellipse-progress> 
                         </div>
                         <div class="desc">
                              <p v-for="text in data.text" :key="text">-{{text}}</p>
                         </div>
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
     data(){
          return{
               circleSize: 135,
               paginationDisplay: true
          }
     },
     methods:{
          showPagination(){
               setTimeout(() => {
                    if (window.innerHeight < 800){
                         this.paginationDisplay = false;
                    } else {
                         this.paginationDisplay = true;
                    }
                    window.addEventListener('resize', () => {
                         this.showPagination();
                    })
               });
          },
          setCircleSize(){
               setTimeout(() => {
                    if (window.innerWidth < 823){
                         this.circleSize = 125;
                    } else {
                         this.circleSize = 150;
                    }
                    window.addEventListener('resize', () => {
                         this.setCircleSize();
                    })
               });
          },
          getClass(){
               setTimeout(() => {
                    let circles = document.querySelectorAll('.circle');
                    circles.forEach(circle => {
                         setTimeout(() => {
                              (circle.classList.contains('progressCircle')) ? circle.classList.remove('progressCircle') :
                              circle.classList.add('progressCircle');
                         }, 100);
                    });
                    window.addEventListener('resize', () =>{
                         this.getClass();
                    })
               });
          }
     }
}
</script>

<style lang="scss">

@media (max-width: 824px) and (max-height: 412px){
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

          .ep-legend--value{
               font-family: var(--ff2);
          }
          .legend-caption{
               font-size: .8em;
          }
     }
     
}



.carousel-container-features{
     max-height: 70vh;
     width: 100vw;
     height: max-content;

     .slide-info{
          height: max-content;
          max-height: 70vh;
     }

     @media (max-width: 824px) and (max-height: 412px) {
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
     max-height: 70vh;
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
          opacity: 0;
          transform: rotate(45deg);
          height: 60%;
     }

     &.enter{
          opacity: 1;
          transform: rotate(0);
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
     overflow: hidden;
     justify-content: space-around;
     box-shadow: 0px 0px 5px white;
     margin: .5em;
     padding: .75em;
     background: linear-gradient(45deg,#000000, #152331);
     position: relative;
     transition: 1s ease-in-out;
     width: clamp(300px, 90vw, 600px);
     max-height: 70vh;

    .progressCircle{
         height: max-content;
         position: relative;
         display: flex;
         justify-content: center;
         align-items: center;
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
     .desc{
        
          p{
               padding: .25em;
          }
     }
          

     .ep-legend--value{
          font-family: var(--ff2);
     }
     
}
</style>