<template>
    <section id="floatingMouse" />
</template>
<script>
export default {
  data() {
    return {
      lastY:0,
      lastX:0,

    }
  },
  methods: {
    flotingMousePoint(event) {

        let floatingMouse = document.getElementById('floatingMouse');
      
        if (event.type == 'mousemove') {
            this.lastY = event.pageY
            this.lastX = event.pageX
        }

        window.requestAnimationFrame( () => {
            // floatingMouse.style.top = `${this.lastY + window.scrollY}px`;
            floatingMouse.style.top = `${this.lastY}px`;
            floatingMouse.style.left = `${this.lastX}px`;
        })
    }
  },
  mounted() {
    // elementList = parentNode.querySelectorAll(selectors);
    document.querySelectorAll('a').forEach((item) => {
      item.onmouseover = function () {
          window.ev = true;
          console.log(window.ev);
      }
    });
    window.addEventListener('mousemove', this.flotingMousePoint)
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.flotingMousePoint)

  }  
}
</script>

<style lang="scss">
  #floatingMouse {
    height:5em;
    width:5em;
    position: absolute;
    display: block;
    z-index: 1;
    border:1px solid black;
    border-radius: 50%;
    transition:250ms ease-out;
    transform:scale(.25) translate(-10em,-10em);
    user-select: none;
    pointer-events: none;
    &:hover {
      transform:scale(1) translate(-2.5em,-2.5em);
    }
  }
</style>