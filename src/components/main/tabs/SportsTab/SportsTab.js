import { styles } from "./style.SportsTab.css";

export const SportsTab = {
    data() {
        return {
            pictures: [
                'https://i.imgflip.com/58r9dj.jpg',
                'https://www.fredrogerscenter.org/wp-content/uploads/2015/11/dark-grey-background-FRC-Grey.png',
                'https://wallpapercave.com/wp/wp3269246.jpg',
                'https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg',
                'https://i.imgflip.com/58r9dj.jpg',
                'https://www.fredrogerscenter.org/wp-content/uploads/2015/11/dark-grey-background-FRC-Grey.png',
                'https://wallpapercave.com/wp/wp3269246.jpg',
                'https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg'
            ],
            isImageActive: false,
            activeIndex: null,
            sportsWrapperHeight: null
        };
    },
    methods: {
        zoomImage(index) {
            this.isImageActive = !this.isImageActive;
            this.activeIndex = index;
        }
    },
    template: `
    <div id="sports-wrapper" ref="sports_wrapper">
        <img 
            v-bind:class="{ imageActive: isImageActive && activeIndex === index }" 
            v-for="(picture, index) in pictures" 
            v-bind:src="picture" 
            @click="zoomImage(index)" 
        />
    </div>`
};