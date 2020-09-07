const animatedScrollObserver = new IntersectionObserver(
     (entries, animatedScrollObserver)  => {
     entries.forEach(entry => {
          if(entry.isIntersecting) {
               entry.target.classList.add('enter');
               animatedScrollObserver.unobserve(entry.target);
          }
          
     })
})

export default{
     bind(el, binding){
          let delay = binding.value.delay !== undefined ? binding.value.delay : 0;
          el.classList.add('before-enter');
          setTimeout(() => {
               animatedScrollObserver.observe(el)
          }, delay);
     }
}