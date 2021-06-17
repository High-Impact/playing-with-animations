import Vue from 'vue'

const animateOnScrollObserver = new IntersectionObserver(
  (entries, animateOnScrollObserver) => {
    entries.forEach(entry => {
        console.log(entry)
        console.log(window.scrollY)
    //   if (entry.isIntersecting) {
    //     entry.target.classList.add('enter')
    //     entry.target.classList.remove('before-enter')
    //     // animateOnScrollObserver.unobserve(entry.target)
    // } else {
    //     entry.target.classList.add('up')
    //     entry.target.classList.remove('enter')

    //   }
    })
  }
)

Vue.directive('AOS', {
  bind: el => {
    el.classList.add('AOS', 'down')
    animateOnScrollObserver.observe(el)
  }
})