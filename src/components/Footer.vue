<template>
  <footer class="ppp-footer">
       <div class="icons">
          <button class="btn fa-fb" v-scrollanimation>
               <fa-icon :icon="['fab', 'facebook-f']"  size="2x" class="fa"/>
          </button>
          <button class="btn fa-r" v-scrollanimation>
               <fa-icon :icon="['fab', 'reddit-alien']" size="2x" class="fa"/>
          </button>
          <button class="btn fa-i" v-scrollanimation>
               <fa-icon :icon="['fab', 'instagram']" size="2x" class="fa"/>
          </button>
          <button class="btn fa-t" v-scrollanimation>
               <fa-icon :icon="['fab', 'twitter']" size="2x" class="fa"/> 
          </button>
       </div>
       <p>Copyright © 2017-2020 Pie On A Plate Productions LLC</p>
  </footer>
</template>

<script>
export default {
     name: 'Footer'
}
</script>

<style lang="scss">
.ppp-footer{
     background: #111;
     width: 100vw;
     min-height: 30vh;
     padding: 1em;
     display: flex;
     justify-content: space-around;
     align-items: center;
     flex-direction: column;
     p, .icons{
          margin-top: 1em;
     }

     .btn{
          margin: 1em;
          border-radius: 50%;
          width: 4em;
          padding: 1em;
          background: blue;

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
               color: #111;
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