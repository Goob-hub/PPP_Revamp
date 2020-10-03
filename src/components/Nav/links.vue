<template>
     <div class="links-container">
    
          <ul class="links">
               <li @click="closeNav()">
               <router-link to="/" class="btn route">
                    <fa-icon class="icon" :icon="['fa', 'home']"/>
                    <span  data-length="4" data-text="Home">Home</span></router-link>
               </li>
               <li @click="showGames()">
               <a href="#" class="btn route">
                    <fa-icon class="icon" :icon="['fa', 'mouse']"/>
                    <span  data-length="4" data-text="Games">Games</span></a>
               </li>
               <li @click="closeNav()">
               <router-link to="/Contact" class="btn route">
                    <fa-icon class="icon" :icon="['fa', 'phone-alt']"/>
                    <span  data-length="7" data-text="Contact">Contact</span></router-link>
               </li>
               <li @click="closeNav()">
               <router-link to="/Jobs" class="btn route">   
                    <fa-icon class="icon" :icon="['fa', 'briefcase']"/>
                    <span  data-length="4" data-text="Jobs">Jobs</span>
               </router-link>
               </li>
               <li @click="closeNav()">
               <router-link to="/About" class="btn route">
                    <fa-icon class="icon" :icon="['fa', 'book-open']"/>
                    <span  data-length="5" data-text="About">About</span>
               </router-link>
               </li>
               <li @click="closeNav()">
               <router-link to="/DevBlog" class="btn route">
                    <fa-icon class="icon" :icon="['fa', 'keyboard']"/>
                    <span  data-length="7" data-text="Devblog">Devblog</span>
               </router-link>
               </li>
          </ul>
          <ul class="Games">
               <li @click="closeNav()">
               <router-link to="/GGMT" class="btn route">
                    <fa-icon class="icon" :icon="['fa', 'shapes']"/>
                    <span  data-length="4" data-text="GGMT">GGMT</span>
               </router-link>
               </li>
               <li @click="closeNav()">
               <router-link to="/Backrooms" class="btn route">
               <fa-icon class="icon" :icon="['fa', 'house-user']"/>
               <span  data-length="9" data-text="Backrooms">Backrooms</span>
               </router-link>
               </li>
               <li @click="Back()" >
                <a href="#" class="btn route">
                    <fa-icon class="icon" :icon="['fa', 'backward']"/>
                    <span  data-length="4" data-text="Back">Back</span>
               </a>
               </li>
          </ul>

     </div>
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
          },
          showGames(){
               let container = document.querySelector('.links-container');
               let navBar = document.querySelector('.navBar');
               navBar.classList.add('games');
               // if(window.innerWidth >= 1024){
               //      container.style.transform = 'translateX(-100%)'
               // } else {
               //      }
                    container.style.transform = 'translateX(-50%)';
          },
          Back(){
               let container = document.querySelector('.links-container');
               let navBar = document.querySelector('.navBar');
               navBar.classList.remove('games');
               container.style.transform = 'translateX(0)';
          },


     }
}
</script>

<style lang="scss">
.links, .Games{
     
     text-align: center;
     transition: .5s linear;
     justify-content: space-evenly;
     flex-direction: column;
     align-items: center;
     flex-wrap: wrap;
     max-height: 100vh;
     height: 90vh;
     width: 90vw;
     
}


.links, .Games{
     align-self: center;
     padding: 1em;
     margin: 5vh 5vw 5vh 5vw;
}

.links-container{
     transition: .5s linear;
     display: flex;
     flex-direction: row;
     width: max-content;
     justify-content: center;
     align-items: center;
     align-self: flex-start;
}


span{
     transition: .5s linear;
}


ul{
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     flex-wrap: wrap;
     height: 100%;
     width: 100vw;
     font-family: var(--ff2);
     transition: .5s linear;
     list-style: none;
     position: relative;
     overflow: hidden;
    
     

     &:hover{
          .btn{
               color: rgba(255, 255, 255, .4);

          }

          
     }

     li{  
          list-style: none;
          
          height: max-content;
          width: max-content;
          margin-top: 1em;

          .btn{
               display: flex;
               justify-content: center;
               align-items: center;
               .icon{
                    transform: translateX(-1em);
                    transition: .5s linear;
                    margin-right: .5em;
                    opacity: 0;
               }
          }

          &:not(:hover){
              .btn{
                   
                    span::before{
                         animation: type-reverse .5s linear forwards;
                    }
               } 
          }

          &:hover{
               .btn{
                    .icon{
                         transform: translateX(0);
                         opacity: 1;
                    }
                    span::before{
                         animation: type-forwards .5s linear forwards;
                    }
               }
          }

          .btn{
               
               text-decoration: none;
               font-weight: bolder;
               span{
                    position: relative;
                    color: rgba(255, 255, 255, .4);
               }
               
               span::before{
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: 0;
                   
                    overflow: hidden;
                    scrollbar-width: none;
                    height: 100%;
                    width: 0%;
                    color: white;
                    text-shadow: 0px 0px 5px white;
                    font-weight: bolder;
               }
               
               
          }    
     }
     

}
</style>