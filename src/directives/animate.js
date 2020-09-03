export default {
     bind (el, binding){

          let duration = binding.value.duration ? binding.value.duration : 500;
         
          let delay = binding.value.delay ? binding.value.delay : 100;

          let fadeOut = binding.value.fadeOut ? binding.value.fadeOut : false;

          // let transform = binding.value.transform ? binding.value.transform : ['0px', '0px'];

          fadeOut ? el.style.opacity = 1 : el.style.opacity = 0;
          
          let transitions = `opacity ${duration}ms linear ${delay}ms`;

          el.style.transition = transitions;
          // el.style.transform = `translate(${transform.join(',')})`;

          getComputedStyle(el);
          
          setTimeout(() => {
               el.style.opacity = 1;
               // el.style.transform = `initial`;
          });

          switch (binding.arg) {
               case 'exit':
                    setTimeout(() => {
                         el.style.transition = `opacity ${duration}ms linear 0ms`
                         el.style.opacity = '0'
                    }, duration + delay + 100);
                    break;
          
               default:
                    console.log('no arg');
                    break;
          }

          
     }
}