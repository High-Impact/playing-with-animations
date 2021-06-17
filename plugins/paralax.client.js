import Vue from 'vue'

// const animateOnScrollObserver = new IntersectionObserver(
//   (entries, animateOnScrollObserver) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('enter')
//         entry.target.classList.remove('before-enter')
//         animateOnScrollObserver.unobserve(entry.target)
//       }
//     })
//   }
// )

Vue.directive('paralax', {
  bind: el => {
    console.log(el)

  }
})