import ASScroll from '@ashthornton/asscroll'

const asscroll = new ASScroll()

export default () => {
    window.addEventListener('load', () => {
        asscroll.enable()
    })
}
