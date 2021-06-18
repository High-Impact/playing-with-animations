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
            this.lastY = event.clientY
            this.lastX = event.clientX
        }

        // window.requestAnimationFrame( () => {
            floatingMouse.style.top = `${this.lastY + window.scrollY}px`;
            floatingMouse.style.left = `${this.lastX}px`;
        // })
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.flotingMousePoint)
    // window.addEventListener('scroll', this.flotingMousePoint)
    // console.log('mounted')
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.flotingMousePoint)
    // window.removeEventListener('scroll', this.flotingMousePoint)
    // console.log('destoryed')

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
    transition:500ms ease-out;
    transform:scale(.5) translate(-5em,-5em);
    user-select: none;
    pointer-events: none;
    &:hover {
      transform:scale(1) translate(-2.5em,-2.5em);
    }
  }
</style>