<template>
  <main id="root-app">
      <section >
        <section class="bg-noise">
          <Noise/>
        </section>
        <Header />
          <section asscroll-container>
              <nuxt  />
          </section>
      <floating-mouse/>
    </section>
  </main>
</template>

<script>
    // import ASScroll from '@ashthornton/asscroll'

//   let x = 'test';
//   // let asscroll = new ASScroll({disableRaf: true});
// export default {
//   data() {
//     return {
//       loading: true,
//       asscroll: 'wait' 
//     }
//   },
//   methods: {
//       onRaf() { 
//           this.asscroll.update()
//           requestAnimationFrame(this.onRaf)
//       }
//   },
//   mounted() {
//     this.asscroll = new ASScroll({
//       disableNativeScrollbar:false
//     });
//     console.log(this.x)
//     // import('@ashthornton/asscroll').then(m => {
//     //   console.log(m)
//     //   // const asscroll = new m.default({
//     //   //     disableRaf: true
//     //   // });
//     //   // use my library here or call a method that uses it
//     // });

//       // requestAnimationFrame(this.onRaf)
//       window.addEventListener('load', () => {
//         this.asscroll.enable()
//             // const event = new CustomEvent('build', { position: "this.asscroll.scrollPos" });
//           this.asscroll.on('scroll', (scrollPos) => {
//             // console.log(scrollPos)
//             const assCroll = new CustomEvent('assCroll', { detail: this.asscroll.currentPos });
//             window.dispatchEvent(assCroll);
//           })
//       })
//       this.loading = false;
//   },
//   destroyed() {
//     console.log('REMOVED')
//   }
// }

import ASScroll from '@ashthornton/asscroll';

export default {
  data() {
    return {
      asscroll: 'waiting'
    }
  },
  methods: {
      loaded() {
        console.log('loaded ran')
        this.asscroll.disable()
        // console.log(document.getElementById('main2').clientHeight)
        this.asscroll.enable()
        this.asscroll.on('scroll', (scrollPos) => {
          // console.log(scrollPos)
          const assCroll = new CustomEvent('assCroll', { detail: this.asscroll.currentPos });
          window.dispatchEvent(assCroll);
        })
      }
    },
  mounted() {
    this.asscroll = new ASScroll();
    setTimeout(this.loaded, 100);
    // this.asscroll.enable()
    // this.asscroll.on('scroll', (scrollPos) => {
      //   const assCroll = new CustomEvent('assCroll', { detail: this.asscroll.currentPos });
    //   window.dispatchEvent(assCroll);
    // })
    
    window.onNuxtReady((app) => {
      console.log('app is ready');
      app.$nuxt.$on('routeChanged', (to, from) => {
        console.log('Route has changed!', to, from);
        setTimeout(this.loaded, 500);
        // this.asscroll.onResize()
        // this.asscroll.disable()
        // this.asscroll.enable()
        // asScroll.enable(false, true, document.querySelector('.innerscroller'))
        // asScroll.scrollTo(0)
        // ScrollTrigger.refresh()
      })
    })
  }
}

</script>


<style lang="scss">
  // #root-app {
  //   position: fixed; 
  //   top: 0px; 
  //   left: 0px; 
  //   width: 100%; 
  //   height: 100%; 
  //   contain: content;
  // }
</style>