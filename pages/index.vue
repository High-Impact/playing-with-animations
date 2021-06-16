<template>
  <section id="main" v-if="!loading">
    <section class="background-noise" :style="`background-image:url('data:image/svg+xml,${noise}')`" />
    <section class="background-noise-2" :style="`background-image:url('data:image/svg+xml,${noise}')`" />
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
      updatePixels:null,
      noise: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" id="noise"><rect width="1" height="1" x="0" y="0" fill="rgba(0,0,0,0.7137469238765239)" class="pixel"></rect><rect width="1" height="1" x="1" y="0" fill="rgba(0,0,0,0.24314028695608214)" class="pixel"></rect><rect width="1" height="1" x="2" y="0" fill="rgba(0,0,0,0.03842407526100611)" class="pixel"></rect><rect width="1" height="1" x="3" y="0" fill="rgba(0,0,0,0.030937097972565164)" class="pixel"></rect><rect width="1" height="1" x="4" y="0" fill="rgba(0,0,0,0.636312446018672)" class="pixel"></rect><rect width="1" height="1" x="5" y="0" fill="rgba(0,0,0,0.04447647110780495)" class="pixel"></rect><rect width="1" height="1" x="6" y="0" fill="rgba(0,0,0,0.26270865405805255)" class="pixel"></rect><rect width="1" height="1" x="7" y="0" fill="rgba(0,0,0,0.05876031851379082)" class="pixel"></rect><rect width="1" height="1" x="8" y="0" fill="rgba(0,0,0,0.4501354989879971)" class="pixel"></rect><rect width="1" height="1" x="9" y="0" fill="rgba(0,0,0,0.12724153541084804)" class="pixel"></rect><rect width="1" height="1" x="0" y="1" fill="rgba(0,0,0,0.4082021862614036)" class="pixel"></rect><rect width="1" height="1" x="1" y="1" fill="rgba(0,0,0,0.35243568828274796)" class="pixel"></rect><rect width="1" height="1" x="2" y="1" fill="rgba(0,0,0,0.3905592345352067)" class="pixel"></rect><rect width="1" height="1" x="3" y="1" fill="rgba(0,0,0,0.4252882400126434)" class="pixel"></rect><rect width="1" height="1" x="4" y="1" fill="rgba(0,0,0,0.3439915586128788)" class="pixel"></rect><rect width="1" height="1" x="5" y="1" fill="rgba(0,0,0,0.20260501236329587)" class="pixel"></rect><rect width="1" height="1" x="6" y="1" fill="rgba(0,0,0,0.07597165956563634)" class="pixel"></rect><rect width="1" height="1" x="7" y="1" fill="rgba(0,0,0,0.09726455448487203)" class="pixel"></rect><rect width="1" height="1" x="8" y="1" fill="rgba(0,0,0,0.907112942856177)" class="pixel"></rect><rect width="1" height="1" x="9" y="1" fill="rgba(0,0,0,0.6420629418000579)" class="pixel"></rect><rect width="1" height="1" x="0" y="2" fill="rgba(0,0,0,0.36287570768760213)" class="pixel"></rect><rect width="1" height="1" x="1" y="2" fill="rgba(0,0,0,0.006021019627462376)" class="pixel"></rect><rect width="1" height="1" x="2" y="2" fill="rgba(0,0,0,0.24721329014309124)" class="pixel"></rect><rect width="1" height="1" x="3" y="2" fill="rgba(0,0,0,0.7045037199742217)" class="pixel"></rect><rect width="1" height="1" x="4" y="2" fill="rgba(0,0,0,0.8103456815616779)" class="pixel"></rect><rect width="1" height="1" x="5" y="2" fill="rgba(0,0,0,0.970626772996704)" class="pixel"></rect><rect width="1" height="1" x="6" y="2" fill="rgba(0,0,0,0.6947860153546459)" class="pixel"></rect><rect width="1" height="1" x="7" y="2" fill="rgba(0,0,0,0.33108450351267593)" class="pixel"></rect><rect width="1" height="1" x="8" y="2" fill="rgba(0,0,0,0.055205812323140924)" class="pixel"></rect><rect width="1" height="1" x="9" y="2" fill="rgba(0,0,0,0.840715951215369)" class="pixel"></rect><rect width="1" height="1" x="0" y="3" fill="rgba(0,0,0,0.023525461142425153)" class="pixel"></rect><rect width="1" height="1" x="1" y="3" fill="rgba(0,0,0,0.599918518522377)" class="pixel"></rect><rect width="1" height="1" x="2" y="3" fill="rgba(0,0,0,0.3590740880418457)" class="pixel"></rect><rect width="1" height="1" x="3" y="3" fill="rgba(0,0,0,0.24293386763120695)" class="pixel"></rect><rect width="1" height="1" x="4" y="3" fill="rgba(0,0,0,0.7773228451301137)" class="pixel"></rect><rect width="1" height="1" x="5" y="3" fill="rgba(0,0,0,0.5958697052062558)" class="pixel"></rect><rect width="1" height="1" x="6" y="3" fill="rgba(0,0,0,0.10642984755867291)" class="pixel"></rect><rect width="1" height="1" x="7" y="3" fill="rgba(0,0,0,0.2623126211451283)" class="pixel"></rect><rect width="1" height="1" x="8" y="3" fill="rgba(0,0,0,0.5194935635185847)" class="pixel"></rect><rect width="1" height="1" x="9" y="3" fill="rgba(0,0,0,0.5626031569514491)" class="pixel"></rect><rect width="1" height="1" x="0" y="4" fill="rgba(0,0,0,0.5999177160837967)" class="pixel"></rect><rect width="1" height="1" x="1" y="4" fill="rgba(0,0,0,0.23938872891158658)" class="pixel"></rect><rect width="1" height="1" x="2" y="4" fill="rgba(0,0,0,0.5633425959018401)" class="pixel"></rect><rect width="1" height="1" x="3" y="4" fill="rgba(0,0,0,0.18941636244276783)" class="pixel"></rect><rect width="1" height="1" x="4" y="4" fill="rgba(0,0,0,0.3349832247686959)" class="pixel"></rect><rect width="1" height="1" x="5" y="4" fill="rgba(0,0,0,0.9350947788308235)" class="pixel"></rect><rect width="1" height="1" x="6" y="4" fill="rgba(0,0,0,0.8427713425420171)" class="pixel"></rect><rect width="1" height="1" x="7" y="4" fill="rgba(0,0,0,0.5429976824024929)" class="pixel"></rect><rect width="1" height="1" x="8" y="4" fill="rgba(0,0,0,0.2395254829600404)" class="pixel"></rect><rect width="1" height="1" x="9" y="4" fill="rgba(0,0,0,0.7753946114398103)" class="pixel"></rect><rect width="1" height="1" x="0" y="5" fill="rgba(0,0,0,0.9702210443535788)" class="pixel"></rect><rect width="1" height="1" x="1" y="5" fill="rgba(0,0,0,0.7410007134641081)" class="pixel"></rect><rect width="1" height="1" x="2" y="5" fill="rgba(0,0,0,0.4264080715282117)" class="pixel"></rect><rect width="1" height="1" x="3" y="5" fill="rgba(0,0,0,0.7426078834119625)" class="pixel"></rect><rect width="1" height="1" x="4" y="5" fill="rgba(0,0,0,0.9049968964519715)" class="pixel"></rect><rect width="1" height="1" x="5" y="5" fill="rgba(0,0,0,0.9258719332059486)" class="pixel"></rect><rect width="1" height="1" x="6" y="5" fill="rgba(0,0,0,0.9986010738871691)" class="pixel"></rect><rect width="1" height="1" x="7" y="5" fill="rgba(0,0,0,0.1842792320772273)" class="pixel"></rect><rect width="1" height="1" x="8" y="5" fill="rgba(0,0,0,0.14543532845694207)" class="pixel"></rect><rect width="1" height="1" x="9" y="5" fill="rgba(0,0,0,0.21717420106765606)" class="pixel"></rect><rect width="1" height="1" x="0" y="6" fill="rgba(0,0,0,0.2112950257521966)" class="pixel"></rect><rect width="1" height="1" x="1" y="6" fill="rgba(0,0,0,0.6737218713221695)" class="pixel"></rect><rect width="1" height="1" x="2" y="6" fill="rgba(0,0,0,0.28935191803041715)" class="pixel"></rect><rect width="1" height="1" x="3" y="6" fill="rgba(0,0,0,0.9932348840796543)" class="pixel"></rect><rect width="1" height="1" x="4" y="6" fill="rgba(0,0,0,0.5711331546258533)" class="pixel"></rect><rect width="1" height="1" x="5" y="6" fill="rgba(0,0,0,0.8659259909109736)" class="pixel"></rect><rect width="1" height="1" x="6" y="6" fill="rgba(0,0,0,0.9967295754196903)" class="pixel"></rect><rect width="1" height="1" x="7" y="6" fill="rgba(0,0,0,0.611955492840849)" class="pixel"></rect><rect width="1" height="1" x="8" y="6" fill="rgba(0,0,0,0.8453594129132294)" class="pixel"></rect><rect width="1" height="1" x="9" y="6" fill="rgba(0,0,0,0.0472290855094768)" class="pixel"></rect><rect width="1" height="1" x="0" y="7" fill="rgba(0,0,0,0.11707279529648162)" class="pixel"></rect><rect width="1" height="1" x="1" y="7" fill="rgba(0,0,0,0.36198583863072575)" class="pixel"></rect><rect width="1" height="1" x="2" y="7" fill="rgba(0,0,0,0.2596329465233089)" class="pixel"></rect><rect width="1" height="1" x="3" y="7" fill="rgba(0,0,0,0.17689278143464193)" class="pixel"></rect><rect width="1" height="1" x="4" y="7" fill="rgba(0,0,0,0.6262294810991427)" class="pixel"></rect><rect width="1" height="1" x="5" y="7" fill="rgba(0,0,0,0.8933339589871958)" class="pixel"></rect><rect width="1" height="1" x="6" y="7" fill="rgba(0,0,0,0.9212896447727033)" class="pixel"></rect><rect width="1" height="1" x="7" y="7" fill="rgba(0,0,0,0.893834104634861)" class="pixel"></rect><rect width="1" height="1" x="8" y="7" fill="rgba(0,0,0,0.4789709400324529)" class="pixel"></rect><rect width="1" height="1" x="9" y="7" fill="rgba(0,0,0,0.34876177042250966)" class="pixel"></rect><rect width="1" height="1" x="0" y="8" fill="rgba(0,0,0,0.2830393815546606)" class="pixel"></rect><rect width="1" height="1" x="1" y="8" fill="rgba(0,0,0,0.929042337885279)" class="pixel"></rect><rect width="1" height="1" x="2" y="8" fill="rgba(0,0,0,0.7468737487574795)" class="pixel"></rect><rect width="1" height="1" x="3" y="8" fill="rgba(0,0,0,0.0959806788972628)" class="pixel"></rect><rect width="1" height="1" x="4" y="8" fill="rgba(0,0,0,0.02246339729995972)" class="pixel"></rect><rect width="1" height="1" x="5" y="8" fill="rgba(0,0,0,0.14348461940516466)" class="pixel"></rect><rect width="1" height="1" x="6" y="8" fill="rgba(0,0,0,0.5363611766181777)" class="pixel"></rect><rect width="1" height="1" x="7" y="8" fill="rgba(0,0,0,0.6585340524915888)" class="pixel"></rect><rect width="1" height="1" x="8" y="8" fill="rgba(0,0,0,0.8530250766863106)" class="pixel"></rect><rect width="1" height="1" x="9" y="8" fill="rgba(0,0,0,0.7254824393665389)" class="pixel"></rect><rect width="1" height="1" x="0" y="9" fill="rgba(0,0,0,0.9391173811438918)" class="pixel"></rect><rect width="1" height="1" x="1" y="9" fill="rgba(0,0,0,0.9150894449915166)" class="pixel"></rect><rect width="1" height="1" x="2" y="9" fill="rgba(0,0,0,0.2960932636169382)" class="pixel"></rect><rect width="1" height="1" x="3" y="9" fill="rgba(0,0,0,0.1662306240792626)" class="pixel"></rect><rect width="1" height="1" x="4" y="9" fill="rgba(0,0,0,0.7242252641084452)" class="pixel"></rect><rect width="1" height="1" x="5" y="9" fill="rgba(0,0,0,0.8458551519460962)" class="pixel"></rect><rect width="1" height="1" x="6" y="9" fill="rgba(0,0,0,0.7390228346331209)" class="pixel"></rect><rect width="1" height="1" x="7" y="9" fill="rgba(0,0,0,0.3497971576672656)" class="pixel"></rect><rect width="1" height="1" x="8" y="9" fill="rgba(0,0,0,0.024922476553827844)" class="pixel"></rect><rect width="1" height="1" x="9" y="9" fill="rgba(0,0,0,0.7841290940152659)" class="pixel"></rect></svg>',
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
          bg: Math.floor(Math.random() * 50),
          // bg: Math.random(),
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
      this.pixels = this.generatePixels()
      
      // <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" id="noise">
      //   <rect width="1" height="1" x="0" y="0" fill="rgba(0,0,0,0.7137469238765239)" class="pixel">
      // </svg>
      let newSVG = ['<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" id="noise">']

      this.pixels.forEach(pixel => {
        let rect = `<rect class="pixel" width="1" height="1" x="${pixel.x}" y="${pixel.y}" fill="rgba(0,0,0, 0.${pixel.bg})"/>`
        newSVG.push(rect)
      });

      newSVG.push('</svg>')
      this.noise = newSVG.join('');
    }
  },
  beforeMount() {
    this.pixels = this.generatePixels();
    this.updatePixels = setInterval(this.interval, 100);
    this.loading = false;
  },
  beforeDestroy () {
    clearInterval(this.updatePixels)
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
      background-size: 5px;
      opacity: .1;
      // filter: blur(5vw);
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
      background-size: 5px;
      opacity: .1;
      transform: rotateY(180deg);
      filter: blur(100px);
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
