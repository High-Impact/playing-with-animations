<template>
  <section id="main2" class="container">
    <section>
      <section>
        <HomeHero  v-AOS/>
        <HomeServices v-AOS/>
        <HomeHero  v-AOS/>
        <HomeServices v-AOS/>
        <HomeHero  v-AOS/>
        <HomeServices v-AOS/>
        <HomeHero  v-AOS/>
        <HomeServices v-AOS/>
      </section>
    </section>
  </section>
</template>

<script>
  // import ASScroll from '@ashthornton/asscroll'
  
  // export default {
  //   data() {
  //     return {
  //       loading: true,
  //       asscroll: 'wait' 
  //     }
  //   },
  //   methods: {
  //     loaded() {
  //       console.log(document.getElementById('main2').clientHeight)
  //       this.asscroll.enable()
  //       this.asscroll.on('scroll', (scrollPos) => {
  //         console.log(scrollPos)
  //         const assCroll = new CustomEvent('assCroll', { detail: this.asscroll.currentPos });
  //         window.dispatchEvent(assCroll);
  //       })
  //     }
  //   },
  //   beforeMount() {
      
  //     },
  //   mounted() {
  //     this.asscroll = new ASScroll();
  //     setTimeout(this.loaded, 100);
  //   },
  //   beforeDestroy() {
  //     this.asscroll.disable()
  //   }

  // }
</script>

<style lang="scss">
</style>
