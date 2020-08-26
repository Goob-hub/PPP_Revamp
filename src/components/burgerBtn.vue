<template>
     <button class="nav-btn btn" @click="navClick()">
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
button{
     z-index: 3;
     position: relative;
     height: 2em;
     width: 2em;
     cursor: pointer;
     display: flex;
     justify-content: flex-start;
     align-items: center;
     

     &.openNav{
          span{
               transform: translateX(-4em);
               background: transparent;
               border: none;
               box-shadow: none; 
               &::before, &::after{
                    background: red;
                    box-shadow: 0 0 10px red, 0 0 40px red, 0 0 80px red;
               }
                         
               &::before{
                    transform: rotate(45deg) translate(35px, -35px);
               }
               &::after{
                    transform: rotate(-45deg) translate(35px, 35px);
               }
          }

     }

     span{
          position: relative;
          width: 2em;
          background: var(--clrMain);
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
               background: var(--clrMain);
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