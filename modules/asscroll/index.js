import ASScroll from '@ashthornton/asscroll';

export default {
    scrollGut: () => {
        asscroll = new ASScroll({
                disableNativeScrollbar:false
            });
            window.addEventListener('load', () => {
                this.asscroll.enable()
            })

    }
}