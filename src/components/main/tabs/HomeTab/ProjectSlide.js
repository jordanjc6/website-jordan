import mcjewelrySlide from "../../../../assets/mcjewelry/search-parameters.png";
import weekplannerSlide from "../../../../assets/weekplanner/form.png";
import connectfourSlide from "../../../../assets/connectfour.png";
import curlicueBlueBackground from "../../../../assets/curlicue-blues/eos_curlicue2e.png";
import { styles } from "./style.ProjectSlide.css";

export const ProjectSlide = {
    data() {
        return {
            imageBorder: curlicueBlueBackground,
            captionVisible: false,
            currentIndex: 0,
            projects: [
                { 
                    image: mcjewelrySlide,
                    caption: `
                        MCJewelry Pricing Tool`
                },
                { 
                    image: weekplannerSlide,
                    caption: `
                        Week Planner`
                },
                { 
                    image: connectfourSlide,
                    caption: `
                        Java Connect Four`
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
            this.timer = setInterval(this.nextSlide, 3000);
        },
        nextSlide() {
            this.currentIndex += 1;
        }
    },
    mounted() {
        this.startSlide();
    },
    template: `
    <img 
        id="project-image" 
        v-bind:src="currentImage" 
        v-bind:style="{ backgroundImage: 'url(' + imageBorder + ')' }" 
        @click="toggleCaption" 
    />
    <div id="project-caption" v-if="captionVisible">
        View {{ currentCaption }} in Projects tab.
    </div>`
};