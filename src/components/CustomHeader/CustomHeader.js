import { styles } from './style.CustomHeader.css';

export const CustomHeader = {
    data() {
        return {
            showHeader: true,
            lastScrollPosition: 0
        };
    },
    props: {
        icon: String,
        tabs: Array
    },
    methods: {
        onScroll() {
            const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

            if(currentScrollPosition < 0) {
                return;
            }

            if(Math.abs(currentScrollPosition - this.lastScrollPosition) < 50) {
                return;
            }

            this.showHeader = currentScrollPosition < this.lastScrollPosition;
            this.lastScrollPosition = currentScrollPosition;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    },
    emits: ['switchTab'],
    template: `
        <header v-bind:class="{ 'hide-header' : !showHeader }">
            <i class="icon" v-bind:style="{ backgroundImage: 'url(' + icon + ')' }"></i>
            <input class="menu-button" type="checkbox" id="menu-button" />
            <label class="menu-icon" for="menu-button"><span class="navicon"></span></label>
            <ul class="list-items tabs">
                <li class="item tab" v-for="tab in tabs" v-bind:id="tab + '-tab'" @click="$emit('switchTab', tab)">
                    {{ tab }}
                </li>
            </ul>
        </header>`
};