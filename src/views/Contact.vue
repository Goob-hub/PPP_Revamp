<template>
  <div class="Contact">
       <header class="contact-header">
            <h1>Get in touch!</h1>
            <p>Whether it's for General Information, Game Support, Press Inquiries, or something else, We'd love to hear from you!</p>
       </header>
       <form action="" class="contact-form">
          <label for="name"><p>Name</p></label>
          <input type="text" name="name">
          <label for="email"><p>Email</p></label>
          <input type="email" name="email">
          <div class="form-reason">
               <h1>Reason for contact</h1>
               <input type="radio" name="reason" value="General-Info"><p>General Info</p>
               <input type="radio" name="reason" value="Game-Support"><p>Game Support</p>
               <input type="radio" name="reason" value="Press-Inquiry"><p>Press Inquiry</p>
               <input type="radio" name="reason" value="Other"><p>Other</p>
          </div>
          <label for="Message"><p>Message</p></label>
          <textarea name="Message" id="Message" cols="30" rows="10"></textarea>
            
            
       </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.Contact{
     height: 100vh;
     max-width: 100vw;
     background: var(--gradientBG), center/cover no-repeat url("../components/images/Treeline.png");
}
</style>