const animatedScrollObserver = new IntersectionObserver(
     (entries, animatedScrollObserver, customClass)  => {
     entries.forEach(entry => {
          if(entry.isIntersecting) {
               (customClass !== undefined) ? entry.target.classList.add(customClass) : entry.target.classList.add('enter');
               animatedScrollObserver.unobserve(entry.target);
          }
          
     })
})

export default{
     bind(el, binding){
          let delay = binding.value.delay !== undefined ? binding.value.delay : 0;
          el.classList.add('before-enter');
          setTimeout(() => {
               animatedScrollObserver.observe(el, binding.value.class)
          }, delay);
     }
}