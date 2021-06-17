<template>
  <div>
    <!-- {{noise[0]}} -->
    <section class="background-noise" :style="`background-image:url('data:image/svg+xml,${noise[count]}')`" />
  </div>
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

      for (let index = 0; index < 100; index++) {
        pixels.push({
          // bg: Math.floor(Math.random() * 50),
          bg: Math.random(),
          x: x,
          y: y,
        })
        if (x < 9) {
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
      let newSVG = ['<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none" id="noise">']
      this.pixels.forEach(pixel => {
        let rectTL = `<rect class="pixel" width="1" height="1" x="${pixel.x}" y="${pixel.y}" fill="rgba(0,0,0, ${pixel.bg})"/>`
        let rectTR = `<rect class="pixel" width="1" height="1" x="${18 - pixel.x}" y="${pixel.y}" fill="rgba(0,0,0, ${pixel.bg})"/>`
        let rectBL = `<rect class="pixel" width="1" height="1" x="${pixel.x}" y="${18 - pixel.y}" fill="rgba(0,0,0, ${pixel.bg})"/>`
        let rectBR = `<rect class="pixel" width="1" height="1" x="${18 - pixel.x}" y="${18 - pixel.y}" fill="rgba(0,0,0, ${pixel.bg})"/>`
        // let rectBL = `<rect class="pixel" width="1" height="1" x="${pixel.y}" y="${pixel.x}" fill="rgba(0,0,0, ${pixel.bg})"/>`
        // let rectBR = `<rect class="pixel" width="1" height="1" x="${19 - pixel.y}" y="${19 - pixel.x}" fill="rgba(0,0,0, ${pixel.bg})"/>`
        newSVG.push(rectTL,rectTR,rectBR,rectBL)
        // newSVG.push(rectTL,rectTR,rectBL,rectBR)
        // newSVG.push(rectEnd)
      });

      newSVG.push('</svg>')
      // return window.btoa(newSVG.join(''));
      return newSVG.join('');
    }
  },
  beforeMount() {
    this.pixels = this.generatePixels();
    for (let index = 0; index < this.svgs; index++) {
      console.log(index)
      this.noise.push(this.generateNoiseSVG())
      console.log(this.noise)
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
    .background-noise {
      position:fixed;
      z-index: -1;
      height:100vh;
      width:100vw;
      top:0;
      left:0;
      background-repeat:repeat;
      background-size: 40px;
      opacity: .05;
      // filter: blur(10px);
    }
</style>