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
     top: 1.5em;
     right: 1em;
     z-index: 6;
}

.nav-btn{
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