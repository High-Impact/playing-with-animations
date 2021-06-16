<template>
  <section id="main" v-if="!loading">
    <!-- <section class="background-noise" :style="`background-image:url('data:image/svg+xml,${noise}')`" /> -->
    <section class="background-noise-2" :style="`background-image:url('data:image/svg+xml,${noise[count]}')`" />
    <section>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" id="noise">
        <rect 
          v-for="(pixel, index) in pixels"
          :key="`pixel-${index}`"
          class="pixel" 
          width="1" 
          height="1" 
          :x="pixel.x"
          :y="pixel.y"
          :fill="`rgba(0,0,0,${pixel.bg})`"
        />
      </svg> -->
      <h1>Hello</h1>
    </section>
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

      for (let index = 0; index < 10000; index++) {
        pixels.push({
          // bg: Math.floor(Math.random() * 50),
          bg: Math.random(),
          x: x,
          y: y,
        })
        if (x < 99) {
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
      let newSVG = ['<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none" id="noise">']
      this.pixels.forEach(pixel => {
        let rect = `<rect class="pixel" width="1" height="1" x="${pixel.x}" y="${pixel.y}" fill="rgba(0,0,0, ${pixel.bg})"/>`
        newSVG.push(rect)
      });

      newSVG.push('</svg>')
      return newSVG.join('');
    }
  },
  beforeMount() {
    this.pixels = this.generatePixels();
    for (let index = 0; index < this.svgs; index++) {
      console.log(index)
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
  #main {
    width:100vh;
    height:100vh;
    overflow: hidden;

    .background-noise {
      position:fixed;
      z-index: -1;
      height:150vh;
      width:150vw;
      top:0;
      left:0;
      background-repeat:repeat;
      background-size: 100vw;
      opacity: .1;
      filter: blur(5vw);
      // animation: 3s linear 1s infinite alternate slidein;
    }
    .background-noise-2 {
      position:fixed;
      z-index: -1;
      height:150vh;
      width:150vw;
      top:0;
      left:0;
      background-repeat:repeat;
      // background-size: 100vw;
      opacity: .1;
      // position:fixed;
      // z-index: -1;
      // height:150vh;
      // width:150vw;
      // top:0;
      // left:0;
      // background-repeat:repeat;
      // background-size: 5px;
      // opacity: .1;
      // transform: rotateY(180deg);
      // filter: blur(100px);
      // animation: 3s linear 1s infinite alternate slidein;
    }
    // .background-noise-2 {
    //   position:fixed;
    //   z-index: -1;
    //   height:150vh;
    //   width:150vw;
    //   top:0;
    //   left:0;
    //   background-repeat:repeat;
    //   background-size: 10vw;
    //   opacity: .1;
    //   filter: blur(1vw);
    //   // animation: 3s linear 1s infinite alternate slidein;
    // }
    
    section {
      z-index: 1;
    }
  }
  @keyframes slidein {
    from {
      transform: scale(.9);
    }

    to {
      transform: scale(1.1);
    }
  }
</style>
