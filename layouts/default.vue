<template>
  <main id="root-app">
    <section>
      <section class="bg-noise">
        <Noise/>
      </section>
      <Header />
      <section asscroll-container>
        <section>
          <nuxt />
        </section>
      </section>
      <floating-mouse/>
    </section>
  </main>
</template>
<script>

export default {
  methods: {
    smoothScroll() {
      console.log('hello');
    }
  },
  beforeMount() {
    },
  mounted() {
    document.addEventListener("scroll", this.smoothScroll)
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.smoothScroll)
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