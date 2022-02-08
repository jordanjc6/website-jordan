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
            slideIn: false,
            slideOut: false,
            currentIndex: 0,
            projects: [
                { 
                    image: mcjewelrySlide,
                    caption: 'MCJewelry Pricing Tool'
                },
                { 
                    image: weekplannerSlide,
                    caption: 'Week Planner'
                },
                { 
                    image: connectfourSlide,
                    caption: 'Java Connect Four'
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
            setInterval(this.animateSlideIn, 5000);
            setTimeout(() => {
                setInterval(this.toggleSlideIn, 5000);
            }, 750);
            setTimeout(() => {
                setInterval(this.animateSlideOut, 5000);
            }, 4250);
            setTimeout(() => {
                setInterval(this.toggleSlideOut, 5000);
            }, 4999);
        },
        animateSlideIn() {
            this.slideIn = true;
            this.currentIndex += 1;
        },
        toggleSlideIn() {
            this.slideIn = false;
        },
        animateSlideOut() {
            this.captionVisible = false;
            this.slideOut = true;
        },
        toggleSlideOut() {
            this.slideOut = false;
        }
    },
    mounted() {
        setTimeout(() => {
            this.captionVisible = false;
            this.slideOut = true;
        }, 4250);
        setTimeout(() => {
            this.slideOut = false;
        }, 4999);
        this.startSlide();
    },
    emits: ['switchTab'],
    template: `
    <img 
        id="project-image" 
        v-bind:class="{ slideIn: slideIn, slideOut: slideOut }"
        v-bind:src="currentImage" 
        v-bind:style="{ backgroundImage: 'url(' + imageBorder + ')' }" 
        @click="toggleCaption" 
    />
    <div 
        id="project-caption" 
        v-if="captionVisible"
        v-bind:style="{ backgroundImage: 'url(' + imageBorder + ')' }"
        @click="$emit('switchTab', 'projects', currentCaption)"
    >
        Click to View {{ currentCaption }} in Projects tab!
    </div>`
};