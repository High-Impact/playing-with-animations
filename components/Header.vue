<template>
    <header class="container">
        <img src="/logo.png" alt="RABS logo">
        <section class="navigation-container">
            <Button>Request a demo</Button>
            <button @click="menu = !menu" class="hamburger hamburger--collapse" :class="{'is-active':menu}" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>  
        </section>
    </header>
</template>
<script>
export default {
    data() {
        return {
            menu:false
        }
    }
}
</script>
<style lang="scss">
    header {
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
</style>