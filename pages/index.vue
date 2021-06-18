<template>
  <section id="main" class="container">
    <section>
      <section>
        <HomeHero  v-AOS/>
        <HomeServices v-AOS/>
      </section>
      <section class="space"  style="height:100vh;"/>
      <h1 v-AOS>TESTING</h1>
      <section class="space"  style="height:100vh;"/>
    </section>
  </section>
</template>

<script>
import ASScroll from '@ashthornton/asscroll'

export default {
  mounted() {
    const asscroll = new ASScroll()
    window.addEventListener('load', () => {
        asscroll.enable()
    })
  }
}
</script>

<style lang="scss">
</style>
