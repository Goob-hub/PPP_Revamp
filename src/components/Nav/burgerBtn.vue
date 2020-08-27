<template>
     <button class="btn nav-btn" @click="navClick()">
          <span></span>
     </button>
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
                    (nav.style.height = "15vh", nav.classList.remove("open")) 
                    : (nav.style.height = "100vh", nav.classList.add("open"));
     
                    (navBtn.classList.contains('openNav')) ? 
                    (navBtn.classList.remove("openNav")) 
                    : (navBtn.classList.add("openNav"));
               });
          }
     }
}
</script>

<style lang="scss">
.nav-btn{
     z-index: 3;
     height: 3em;
     width: 2em;
     position: relative;
     cursor: pointer;
     display: flex;
     justify-content: flex-start;
     align-items: center;
     

     &.openNav{
          span{
               transform: translateX(-3em);
               background: transparent;
               border: none;
               box-shadow: none; 
                         
               &::before{
                    transform: rotate(45deg) translate(25px, -25px);
               }
               &::after{
                    transform: rotate(-45deg) translate(25px, 25px);
               }
          }

     }

     span{
          position: relative;
          width: 2em;
          background: var(--clrTxt);
          height: .2em;
          border-radius: 5px;
          transition: .5s linear;
         
          &::before, &::after{
               transition: .5s linear;
               content: '';
               top: 0;
               left: 0;
               position: absolute;
               width: 2em;
               height: .2em;
               background: var(--clrTxt);
               border-radius: 5px;
          }

          &::before{
               transform: translateY(.75em);
          }
          &::after{
               transform: translateY(-.75em);
          }


     }
}
</style>