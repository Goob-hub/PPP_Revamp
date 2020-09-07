<template>
  <div class="Contact">
       <header class="Contact-header">
            <h1>Get in touch!</h1>
            <p>Whether it's for General Information, Game Support, Press Inquiries, or something else, We'd love to hear from you!</p>
       </header>
       <form action="" autocomplete="off" class="Contact-form">
            <div class="input-data">
               <input type="text" name="name" required>
               <label for="name" ><p>Name</p></label>
            </div>

            <div class="input-data">
               <input type="email" name="email" required>
               <label for="email"><p>Email</p></label>
            </div>
            
          <div class="form-reason">
               <h1>Reason for contact</h1>

               <input type="radio" name="reason" value="General-Info" required><p>General Info</p>

               <input type="radio" name="reason" value="Game-Support"><p>Game Support</p>

               <input type="radio" name="reason" value="Press-Inquiry"><p>Press Inquiry</p>

               <input type="radio" name="reason" value="Other"><p>Other</p>
          </div>

          <div class="input-data">
               <textarea required name="Message" id="Message" cols="30" rows="10"></textarea>
               <label for="Message"><p>Message</p></label>
          </div>

          <input type="submit" @click="$emit('prevent', noSubmit($event))" class="btn btn-submit">
       </form>

       <pppFooter />

  </div>
</template>

<script>
import pppFooter from '@/components/Footer.vue'
export default {
     components:{
          pppFooter
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

.Contact, .Contact-header, .Contact-form, .input-data{
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
     padding: 1em 1em 0 1em;
     text-transform: capitalize;

     .ppp-footer{
          margin-top: 2em;
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
          .input-data{
               margin: 1.5em ;
               position: relative;
               input, textarea{
                    font-family: var(--ff2);
                    font-size: 1em;
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
               }

               & input:focus ~ label, input:valid ~ label{
                    transform: translateY(-100%);
                    
               }

               textarea:focus ~ label, textarea:valid ~ label{
                    transform: translateY(-150%);
               }
               textarea {
                    margin-top: 2em;
                    border: 1px solid white;
                    padding: 1em;
                    &~label{
                         margin-top: 2em;
                         padding: 1em;
                         top: 0;
                         bottom: 100%;
                    }
               }
          }
     }

}
</style>