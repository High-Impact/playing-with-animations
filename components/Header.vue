<template>
    <header class="container" >
        <nuxt-link to="/">
            <img src="/logo.png" alt="RABS logo">
        </nuxt-link>
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
        height:$header-height;
        position:fixed;
        top:0;
        display:flex;
        justify-content: space-between;
        align-items: center;
        left:50%;
        transform: translateX(-50%);
     
        a {
            margin:0;
        }
     
        .navigation-container {
            display:flex;
            align-items:center;

            .hamburger {
                height:24px;
                padding: 0;
                margin-left:2em;
            }
        }
    }
</style>