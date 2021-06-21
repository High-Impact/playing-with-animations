import Vue from 'vue'


function paralax(event) {
  let items = document.querySelectorAll('.paralax');
  let assPos = event.detail;

  items.forEach((item, index) => {
    window.requestAnimationFrame(function () {
      switch (speeds[index]) {
        case 'fast':
          item.style.transform = `translateY(-${assPos * 2}px)`;
          break
        case 'normal':
          item.style.transform = `translateY(-${assPos}px)`;
          break
        case 'slow':
          item.style.transform = `translateY(-${assPos / 2}px)`;
          break
      }
    });
  });
}

let count = 0;
let speeds = new Array;


Vue.directive('paralax', {
  bind: (el, bindings) => {
    if (!bindings.value) {
      bindings.value = 'normal'
    }
    switch (bindings.value) {
      case 'slow':
      case 'normal':
      case 'fast':
        speeds.push(bindings.value)
        break
      default:
        console.log("Speeds are 'slow', 'normal', and 'fast' ")
        break
    }

    if (count === 0) {
      window.addEventListener('assCroll', paralax, bindings);
      count++
    }
    el.classList.add('paralax')
  },
  unbind: el => {
    count = 0
    window.removeEventListener('assCroll', paralax)
  }
})