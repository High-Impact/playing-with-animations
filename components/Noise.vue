<template>
  <section class="noise-container">
    <section class="background-noise" :style="`background-image:url('data:image/svg+xml,${noise[count]}')`" />
  </section>
</template>
<script>
export default {
  data() {
    return {
      pixels:null,
      updateNoise:null,
      count:0,
      noise: new Array,
      svgs: 3,
      loading:true
    }
  },
  
  methods: {
    generatePixels() {
      let pixels = new Array;
      let x = 0;
      let y = 0;

      for (let index = 0; index < 400; index++) {
        pixels.push({
          // bg: Math.floor(Math.random() * 50),
          bg: Math.random(),
          x: x,
          y: y,
        })
        if (x < 19) {
          x++;
        } else {
          y++;
          x = 0;
        }
      }
      return pixels;
    },
    interval() {
      if (this.count < this.svgs - 1) {
        this.count++
      } else {
        this.count = 0
      }
    },
    generateNoiseSVG() {
      this.pixels = this.generatePixels()
      let newSVG = ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" id="noise">']
      this.pixels.forEach(pixel => {
        let rect = `<rect class="pixel" width="1" height="1" x="${pixel.x}" y="${pixel.y}" fill="rgba(0,0,0, ${pixel.bg})"/>`
        let rectEnd = `<rect class="pixel" width="1" height="1" x="${20 - pixel.x}" y="${20 - pixel.y}" fill="rgba(0,0,0, ${pixel.bg})"/>`
        newSVG.push(rect)
      });

      newSVG.push('</svg>')
      // return window.btoa(newSVG.join(''));
      return newSVG.join('');
    }
  },
  beforeMount() {
    this.pixels = this.generatePixels();
    for (let index = 0; index < this.svgs; index++) {
      this.noise.push(this.generateNoiseSVG())
    }
    this.updateNoise = setInterval(this.interval, 100);
    this.loading = false;
  },
  beforeDestroy () {
    clearInterval(this.updateNoise)
  }
}
</script>
<style lang="scss">
  .noise-container {
    background-image:url('/paper-sm.jpg');
    width: 100vw;
    height: 100vh;
    z-index: -1;
    position: fixed;
    opacity: .2;
    top:0;

    .background-noise {
      position:fixed;
      z-index: 0;
      height:100vh;
      width:100vw;
      top:0;
      left:0;
      background-repeat:repeat;
      background-size: 100px;
      // background-size: 100vw;
      opacity: .25;
      filter: blur(1px);
    }
  }
</style>