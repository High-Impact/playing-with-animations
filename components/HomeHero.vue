<template>
    <section class="home-hero">
        <section class="content-container">
            <section class="content">
                <h1>
                    <span>RABS App & Digital Background Voucher</span>
                    PROVEN
                    ACCURATE
                    SAFE
                </h1>
                <p>Serving studio production for over three years. RABS is trusted by Assistant Directors, Accounting, Casting, and Other Crew to safely and efficiently manage background and production’s needs. </p>
                <Button>REQUEST A DEMO</Button>
            </section>
            <img v-paralax src="/rect-placeholder.png" alt="placeholder">
        </section>
        <Marquee
            class="marquee"
          :duration="45"
          :repeat="3"
        >
            <h1>Annoucement: Congrats to ‘The Marvelous Mrs. Maisel’ on their 4 emmy wins</h1>
        </Marquee>
    </section>
</template>
<style lang="scss">
.home-hero {
    .content-container {
        position:relative;
        max-width:75ch;
        margin-bottom: 20em;
        padding-top:5em;
        
        .content {
            z-index: 2;
            h1 {
                font-size:8em;
                line-height:1;
                span {
                    display: block;
                    font-size: 1rem;
                    letter-spacing: .1em;
                    margin:1em 0;
                }
            }
            p {
                font-size: 1.2em;
                width:500px;
                margin:2em 0;
                margin-top:1em;
            }
        }


        img {
            position:absolute;
            left: 100%;
            width:calc(1200px - 75ch);
            top:50%;
        }
    }
    .marquee {
        z-index: -1;
        width: 100vw;
        background: red;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top:-15em;
        padding: 1em 0;
        color: white;
    }
}
</style>