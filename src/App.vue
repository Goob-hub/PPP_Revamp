<template>
  <div id="app" @mousemove="move($event)">
    <navBtn />
    <navBar />
    <transition name="fade">
      <router-view />
    </transition>
   
  </div>
</template>

<script>
import navBar from '@/components/Nav/nav.vue'
import navBtn from '@/components/Nav/burgerBtn.vue'
export default {
  components: {
    navBar,
    navBtn,
    
  },
  methods:{
    move(e){
      if(!this.$isMobile()){
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        setTimeout(() => {
          let elements = document.querySelectorAll('.paralax');
          elements.forEach(el => {
            let x = mouseX - this.coords(el).x;
            let y = mouseY - this.coords(el).y;
  
            el.style.transform = `translateX(${x/45}px) translateY(${y/45}px) translateZ(100px)`
  
          })
        });
      }
    },
    coords(e){
      let coords = e.getBoundingClientRect();

      return {
        y: coords.top / 2,
        x: coords.left / 2
      }
    }
  }
}
</script>

<style lang="scss">
#app{
  background: #111;
  max-width: 100vw;
  height: max-content;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-family: var(--ff1);
    text-transform: capitalize;
  }

  p{
    font-family: var(--ff2);
  }


  
}


</style>
