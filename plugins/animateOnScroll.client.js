import Vue from 'vue'
const options = {
    threshold: .25,
}
const animateOnScrollObserver = new IntersectionObserver(
  (entries, animateOnScrollObserver) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('enter')
            entry.target.classList.remove('before-enter')
        }
    })
  },options)

Vue.directive('AOS', {
  bind: (el, classes) => {
    el.classList.add('AOS', 'before-enter')
    animateOnScrollObserver.observe(el)
  },
  unbind: (el) => {
      animateOnScrollObserver.unobserve(el)
  }
})