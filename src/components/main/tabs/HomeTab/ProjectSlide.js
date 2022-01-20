import { styles } from "./style.ProjectSlide.css";

export const ProjectSlide = {
    data() {
        return {
            currentProjectImage: "https://i.imgflip.com/58r9dj.jpg"
        };
    },
    template: `
    <img id="projectImage" v-bind:src="currentProjectImage" />`
};