export default {
     bind (el, binding){

          let duration = binding.value.duration ? binding.value.duration : 500;
         
          let delay = binding.value.delay ? binding.value.delay : 100;

          let fadeOut = binding.value.fadeOut ? binding.value.fadeOut : false;

          fadeOut ? el.style.opacity = 1 : el.style.opacity = 0;
          
          let transitions = `opacity ${duration}ms linear ${delay}ms`;

          el.style.transition = transitions;

          getComputedStyle(el);
          
          setTimeout(() => {
               el.style.opacity = 1;
          });

          if(binding.arg === 'exit'){
               setTimeout(() => {
                    el.style += ' z-index: -1;'
                    el.style.transition = `opacity ${duration}ms linear 0ms`
                    el.style.opacity = '0'
               }, duration + delay + 100);
          }

          
     }
}