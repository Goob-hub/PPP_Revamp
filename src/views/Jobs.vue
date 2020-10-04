<template>
  <main class="Jobs">
     <header>
     <h1 v-scrollanimation="{delay: 100}">Join us</h1>
     <h2 v-scrollanimation="{delay: 100}">(Volunteer Positions Only!)</h2>
     <p v-scrollanimation="{delay: 100}">Pie On A Plate Productions is not currently looking to hire anyone due to the exclusive fact that we have pretty much no money right now, being a startup by a college kid and all.  Once games are released and we have a stream of revenue, then you bet your lucky stars we are going to be looking for the most talented artists, programmers, and designers we can find.</p>
     </header>
     <article>
          <h1 v-scrollanimation="{delay: 100}">However,</h1>
          <p v-scrollanimation="{delay: 100}">if you are interested in being part of the team without any promise of substantial pay, and you fit one of the needed jobs listed below, then fill out our <router-link to="/Contact">Contact Form</router-link> and we will see if we can work something out!</p>
     </article>
     <h1 v-scrollanimation="{delay: 100}">We are currently in need of...</h1>
     <section class="cards-container">
          <div v-for="Job in Jobs" :key="Job.id" class="card" :class="`card-${Job.ID}`" v-scrollanimation="{delay: 100}">
               <div class="imgBx">
                    <div>
                    <img :src="Job.Img" alt="what">
                    <h1>{{Job.Title}}</h1>
                    </div>
               </div>
               <div class="overlay">
               </div>
               <div class="content">
                    <h1 class="head">Experience with:</h1>
                    <article v-for="skill in Job.skills" :key="skill">
                    <p>{{skill}}</p>
                    </article>
               </div>
          </div>
    </section>
    <pppFooter />
     
  </main>
</template>

<script>
import pppFooter from '@/components/Footer.vue'
export default {
     components:{
          pppFooter
     },
     data(){
          return{
               Jobs: [
                    {
                         ID: 1,
                         Title: 'Skilled 3D Artist/Animator',
                         Img: require('../components/images/3D.jpg'),
                         skills:[
                              'Modeling and rigging in Maya/3DS Max',
                              'Substance Painter',
                              'Substance Designer',
                              'Photoshop',
                              'Mixamo',
                         ]
                    },
                    {
                         ID: 2,
                         Title: 'Community Manager',
                         Img: require('../components/images/CM.jpg'),
                         skills: [
                              'Social media posting/community interaction on all major platforms (Facebook, Twitter, Reddit, Discord, Youtube etc.)',
                              'Primoting/advertising products for online sale',

                         ]
                    },
               ]
          }
     }
}
</script>

<style lang="scss">
.Jobs, .Jobs header, .Jobs article, .positions, .Job-1, .Job-2, .link, .ppp-footer{
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     
}

.Jobs{
     min-height: 100vh;
     max-width: 100%;
     background: var(--gradientBGD), center/cover fixed no-repeat url('../components/images/Backdrop3.png');
     padding: 1em 1em 0 1em;

     p{
          text-align: center;
          line-height: 1.5em;
          letter-spacing: 2px;
          margin-top: 1em;
          max-width: clamp(30vw, 80vw, 700px);
     }

     h1{
          margin: 1em 0 .5em 0;
     }

     h2{
          font-family: var(--ff1);
          margin:0 0 .5em 0;
     }
     h1, h2{
          max-width: 90%;
          
          text-align: center;
     } 

     h1,p, h2{
      &.before-enter{
        transform: translateX(-100px);
        opacity: 0;
        transition: all .7s linear .3s;
      }

      &.enter{
        transform: translateY(0px);
        opacity: 1;
      }
    }

     .cards-container{
          flex-direction: row;
          flex-wrap: wrap;
          .card{
          
               &-1{
                    background: linear-gradient(45deg, #13171B, #7392a5);
               }
               &-2{
                    background: linear-gradient(45deg,#4B4641, #C4AE8F);
               }

               .content{
                    .head{
                         font-style: italic;
                         font-weight: bold;
                    }
               }
          }
     }

     .ppp-footer{
          margin-top: 2em;
          padding: 1em;
          p{
               text-align: center;
          }
     }
     
    header{
         height: max-content;
    }

     

}
</style>