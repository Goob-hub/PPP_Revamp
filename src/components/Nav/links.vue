<template>
     <ul class="links">
          <li @click="closeNav()">
          <router-link to="/" class="btn selected" data-text="Home"><span>Home</span></router-link>
          </li>
          <li @click="closeNav()">
          <router-link to="/Contact" class="btn" data-text="Contact"><span>Contact</span></router-link>
          </li>
          <li @click="closeNav()">
          <router-link to="/Jobs" class="btn" data-text="Jobs"><span>Jobs</span></router-link>
          </li>
          <li @click="closeNav()">
          <router-link to="/About" class="btn" data-text="About"><span>About</span></router-link>
          </li>
          <li @click="closeNav()">
          <router-link to="#" class="btn" data-text="Devblog"><span>Devblog</span></router-link>
          </li>
     </ul>
</template>

<script>
export default {
     name: 'links',
     data () {
          return{
               page: 'home'
          }
     },
     methods: {
          closeNav(){
               let nav = document.querySelector('nav');
               let navBtn = document.querySelector('.nav-btn');
               (nav.classList.remove("open"), navBtn.classList.remove("openNav"))
          }
     }
}
</script>

<style lang="scss">
.links{
     transition: .5s linear;
}
ul{
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     flex-wrap: wrap;
     height: 100%;
     width: 100%;
     padding: 1em;
     font-family: var(--ff2);
     transition: .5s linear;
     list-style: none;
     position: relative;
    

     &:hover{
          span{
               color: rgba(255, 255, 255, .4);

          }
     }

     li{  
          padding: .5em;
          height: max-content;
          width: max-content;
          margin-top: 2em;

          .btn{
               padding: .5em;
               text-decoration: none;
               height: max-content;
               width: max-content;

               &::before{
                    content: attr(data-text);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 5.5em;
                    color: rgba(255, 255, 255, .2);
                    border-radius: 50%;
                    z-index: -1;
                    opacity: 0;
                    letter-spacing: 400px;
                    font-weight: bolder;
                    transition: letter-spacing, opacity, 1s .3s;
                    
               }


               &:hover{
                    
                    &::before{
                         content: attr(data-text);
                         opacity: 1;
                         z-index: -1;
                         height: 100%;
                         width: 100%;
                         transform: translate(-50%, -50%);
                         letter-spacing: 10px;
                    }

                    span{
                         
                         font-size: 2.5em;
                         padding: .15em;
                         background: rgba(255, 255, 255, .8);
                         color: black;
                    }
               }
               span{
                    
                    transition: .5s linear;
                    font-weight: bolder;
                    font-size: 2em;
               }
          }    
     }
     

}
</style>