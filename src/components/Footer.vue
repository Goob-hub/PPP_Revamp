<template>
  <footer class="ppp-footer" v-scrollanimation="{delay: 0}">
       <div class="icons">
            {{reSizeFaIcons()}}
          <button class="btn fa-fb" v-scrollanimation="{delay: 0}">
               <a target="_blank" href="https://www.facebook.com/PieOnAPlateProductions/">
                    <fa-icon :icon="['fab', 'facebook-f']"  size="2x" class="fa"/>
               </a> 
          </button>
          <button class="btn fa-r" v-scrollanimation="{delay: 250}">
               <a target="_blank" href="https://www.reddit.com/r/PieOnAPlateProduct/">
                    <fa-icon :icon="['fab', 'reddit-alien']" size="2x" class="fa"/>
               </a> 
          </button>
          <button class="btn fa-i" v-scrollanimation="{delay: 500}">
               <a target="_blank" href="http://instagram.com/pieonaplateproductions">
                    <fa-icon :icon="['fab', 'instagram']" size="2x" class="fa"/>
               </a> 
          </button>
          <button class="btn fa-t" v-scrollanimation="{delay: 750}">
               <a target="_blank" href="https://twitter.com/PieOnAPlate">
                    <fa-icon :icon="['fab', 'twitter']" size="2x" class="fa"/> 
               </a> 
          </button>
       </div>
       <p v-scrollanimation="{delay: 0}">Copyright © 2017-2020 Pie On A Plate Productions LLC</p>
  </footer>
</template>

<script>
export default {
     name: 'Footer',
     methods:{
          reSizeFaIcons(){
               setTimeout(() => {
                    let icons = document.querySelectorAll('.fa');

                    if (window.innerWidth >= 1024){
                         icons.forEach(icon => {
                              icon.classList.add('fa-3x');
                         })
                    } else {
                         
                         icons.forEach(icon => {
                              icon.classList.remove('fa-3x');
                         })
                    }
                    window.addEventListener('resize', () => {
                         this.reSizeFaIcons();
                    })
               });

          }

     }
}
</script>

<style lang="scss" >
.ppp-footer{
     text-align: center;
     background: #111;
     width: 100vw;
     min-height: 30vh;
     padding: 1em;
     display: flex;
     justify-content: space-around;
     align-items: center;
     flex-direction: column;
     transition: .5s linear;

     &.before-enter{
          opacity: 0;
          transform: translateX(-100px);
     }
     &.enter{
          opacity: 1;
          transform: translateX(0);
     }

     p, .icons{
          margin-top: 1em;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
     }

     .btn{
          margin: 1em;
          border-radius: 50%;
          width: 4em;
          padding: 1em;
          background: blue;

          a{
               height: 100%;
               width: 100%;
          }

     }

     .btn, p{
          transition: .5s linear;
          &.before-enter{
               opacity: 0;
               transform: translateX(-50px);
          }
          &.enter{
               opacity: 1;
               transform: translateX(0);
          }
     }
     .icons{
          &:hover{
               .btn{
                    opacity: .5;
                    &:hover{
                         opacity: 1;
                    }
               }
          }
     }

     .fa{
          path{
               color: black;
          }
          &-r{
               
               background: red;
               
          }
          &-fb{
               
               background: rgb(31, 23, 133);
               
          }
          &-i{
               
               background: rgb(218, 132, 147);
               
               
          }
          &-t{
               
               background: rgb(132, 154, 199);
               
          }
     }
     
}
</style>