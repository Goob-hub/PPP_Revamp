<template>
  <div class="Contact">
       <header class="Contact-header">
            <h1 v-scrollanimation="{delay: 200}">Get in touch!</h1>
            <p v-scrollanimation="{delay: 200}">Whether it's for General Information, Game Support, Press Inquiries, or something else, We'd love to hear from you!</p>
       </header>
       <form action="" autocomplete="off" class="Contact-form">
            <div class="Contact-info">

               <div class="input-data" v-scrollanimation="{delay: 200}">
                    <input type="text" name="name" required>
                    <label for="name" ><p>Name</p></label>
                    <div class="underline"></div>
               </div>

               <div class="input-data" v-scrollanimation="{delay: 200}">
                    <input type="email" name="email" required>
                    <label for="email"><p>Email</p></label>
                    <div class="underline"></div>
               </div>

            </div>
            
          <h1 v-scrollanimation="{delay: 200}">Reason for contact</h1>
          <div class="form-reason">
               <div class="radio-container" v-scrollanimation="{delay: 0}">
                    <input type="radio" name="reason" value="Game-Support">
                    <p class="new-radio btn-design btn">Game Support</p>
               </div>
               <div class="radio-container" v-scrollanimation="{delay: 0}">
                    <input type="radio" name="reason" value="Press-Inquiry">
                    <p class="new-radio btn-design btn">Press Inquiry</p>
               </div>
               <div class="radio-container" v-scrollanimation="{delay: 0}">
                    <input type="radio" name="reason" value="General-Info" required>
                    <p class="new-radio btn-design btn">General Info</p>
               </div>
               <div class="radio-container" v-scrollanimation="{delay: 0}">
                    <input type="radio" name="reason" value="Other">
                    <p class="new-radio btn-design btn">Other</p>
               </div>
               
          </div>

          <div class="input-data textarea" v-scrollanimation="{delay: 200}">
               <textarea required name="Message" id="Message" cols="25" rows="9"></textarea>
               <label for="Message"><p>Message</p></label>
          </div>

          <button type="submit" v-scrollanimation="{delay: 0}"  @click="$emit('prevent', noSubmit($event))" class="btn btn-submit btn-design"><p>Submit</p></button>
       </form>


  </div>
</template>

<script>
export default {
     components:{
     },
     methods:{
          noSubmit(e){
               setTimeout(() => {
                  e.preventDefault();
               });
          }
     }
}
</script>

<style lang="scss">

.Contact, .Contact-header, .Contact-form, .input-data, .form-reason{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
}

.Contact{
     text-align: center;
     min-height: 100vh;
     max-width: 100vw;
     background: var(--gradientBGD), center/cover fixed no-repeat url("../components/images/Treeline.png");
     padding: 1em 1em 5em 1em;
     text-transform: capitalize;

     h1,p,div,input{
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

     .ppp-footer{
          margin-top: 2em;
     }

     &-info{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          input{
               max-width: 10em;
               margin: 0;
          }
     }

     input[type="text"], input[type=email]{
          max-width: 10em;
     }

     .Contact-header{
          margin: 1em 0 1em 0;
          min-height: 30vh;
          
          p{
               line-height: 1.5em;
               letter-spacing: 2px;
          }
          h1, p{
               margin: .5em 0 .5em 0;
          }
     }

     .Contact-form{
          padding: .5em;
          h1{
               max-width: 80%;
               padding: .5em;
          }

          .input-data:not(.textarea){
               max-width: 10em;
          }
         
          .input-data{
               margin: 1.5em ;
               position: relative;
               

               .underline{
                    transition: .5s linear;
                    position: absolute;
                    content: '';
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #44e018;
               }

               input, textarea{
                    font-family: var(--ff2);
                    
                    padding: 0 0 .5em .5em;
                    background: transparent;
                    position: relative;
                    border: none;
                    border-bottom: 2px solid white;
                    
                    &:focus{
                         outline: none;
                    }

                   
               }

               label{
                    transition: .3s linear;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    padding: 0 0 .5em .5em;
                    pointer-events: none;
                    p{
                         
                         transition: .5s linear;
                    }
               }

               & input:focus ~ label, input:valid ~ label{
                    transform: translateY(-100%);
                    p{
                         color: #44e018;
                    }
                    
               }

               & input:focus ~ .underline, input:valid ~ .underline{
                    width: 100%;
                    
               }

               textarea:focus ~ label, textarea:valid ~ label{
                    transform: translateY(-150%);
                    p{
                         color: #44e018;
                    }
               }

               textarea {
                    transition: .5s linear;
                    margin-top: 2em;
                    border: 1px solid white;
                    padding: 1em;
                    min-width: 50vw;
                    min-height: 40vh;
                    max-width: 100vw;
                    &:focus{
                         border-color: #44e018;
                    }
                    &~label{
                         margin-top: 2em;
                         padding: 1em;
                         top: 0;
                         bottom: 100%;
                    }
               }

          }

          .form-reason{
               flex-wrap: wrap;
               flex-direction: row;
               margin-top: 1em;

               .radio-container{
                    position: relative;

                    input{
                         position: absolute;
                         opacity: 0;
                         height: 100%;
                         width: 100%;
                         top: 0;
                         left: 0;
                         z-index: 3;
                         cursor: pointer;
                         &:hover ~ .new-radio{
                              background:white;
                              color: black;
                         }
                    }
     
                    input:checked ~ .new-radio{
                         background: #44e018;
                         border-color: #44e018;
                         color: black;
                    }
               }

               
          }

          .btn-submit{
               font-family: var(--ff2);
               font-size: 1em;
               padding: .5em;
               margin-top: 2em;
          }
     }

}
</style>