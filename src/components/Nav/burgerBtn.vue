<template>
     <div class="btn-container">
          <button class="btn nav-btn" @click="navClick()">
               <span></span>
          </button>
     </div>
</template>

<script>
export default {
     name: 'navBtn',
     methods: {
          navClick(){
               setTimeout(() => {
                    let nav = document.querySelector("nav");
                    let navBtn = document.querySelector(".nav-btn");
               
                    (nav.classList.contains('open')) ? 
                    (nav.classList.remove("open")) 
                    : (nav.classList.add("open"));
     
                    (navBtn.classList.contains('openNav')) ? 
                    (navBtn.classList.remove("openNav")) 
                    : (navBtn.classList.add("openNav"));
               });
          }
     }
}
</script>

<style lang="scss">
.btn-container{
     width: max-content;
     height: max-content;
     position: fixed;
     top: 1vh;
     right: 3vw;
     z-index: 6;
     padding: 1em 1em 1em 1em;
     
}

.nav-btn{
     height: clamp(28px, 8vh, 6em);
     width: clamp(24px, 5vw, 3em);
     position: relative;
     cursor: pointer;
     display: flex;
     justify-content: flex-start;
     align-items: center;
     background: white;
     

     &.openNav{
          &:hover{
               span::before, span::after{
                    background: white;
               } 
          }
          span{
               transform: translateX(-3em);
               background: transparent;
               border: none;
               box-shadow: none;
               
                         
               &::before{
                    background: rgba(255, 255, 255, .4);
                    transform: rotate(45deg) translate(2em, -2em);
                    border: none;
               }
               &::after{
                    background: rgba(255, 255, 255, .4);
                    transform: rotate(-45deg) translate(2em, 2em);
                    border: none;
               }
          }

     }

     span{
          position: relative;
          width: 100%;
          height: clamp(3px, 10%, 5px);
          
          border-radius: 5px;
          transition: .5s linear;
          background: transparent;
          
         
          &::before, &::after{
               transition: .5s linear;
               content: '';
               top: 0;
               left: 0;
               position: absolute;
               width: 100%;
               border-radius: 5px;
               height: clamp(3px, 10%, 5px);
               background: white;
          }

          &::before{
               transform: translateY(6px);
          }
          &::after{
               transform: translateY(-6px);
          }


     }
}
</style>