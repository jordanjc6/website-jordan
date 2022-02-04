import mcjewelrySlide from "../../../../assets/mcjewelry/search-parameters.png";
import weekplannerSlide from "../../../../assets/weekplanner/form.png";
import connectfourSlide from "../../../../assets/connectfour.png";
import { styles } from "./style.ProjectSlide.css";

export const ProjectSlide = {
    data() {
        return {
            captionVisible: false,
            currentIndex: 0,
            projects: [
                { 
                    image: mcjewelrySlide,
                    caption: `
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption`
                },
                { 
                    image: weekplannerSlide,
                    caption: `
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption`
                },
                { 
                    image: connectfourSlide,
                    caption: `
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption
                        Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption Caption`
                }
            ]
        };
    },
    computed: {
        currentImage() {
            return this.projects[this.currentIndex % this.projects.length].image;
        },
        currentCaption() {
            return this.projects[this.currentIndex % this.projects.length].caption;
        }
    },
    methods: {
        toggleCaption() {
            this.captionVisible = !this.captionVisible;
        },
        startSlide() {
            this.timer = setInterval(this.nextSlide, 6000);
        },
        nextSlide() {
            this.currentIndex += 1;
        }
    },
    mounted() {
        this.startSlide();
    },
    template: `
    <img id="project-image" v-bind:src="currentImage" @click="toggleCaption" />
    <div id="project-caption" v-if="captionVisible">
        {{ currentCaption }}
    </div>`
};