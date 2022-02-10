import curlicueBlueBackground from "../../../../assets/curlicue-blues/eos_curlicue2e.png";
import { styles } from "./style.ProjectDisplay.css";

export const ProjectDisplay = {
    data() {
        return {
            imageBorder: curlicueBlueBackground
        };
    },
    props: {
        title: String,
        description: String,
        pictures: Array
    },
    template: `
    <div class="project">
        <div class="project-description">
            <div class="project-title">{{ title }}</div>
            <div>{{ description }}</div>
        </div>
        <div class="project-pictures">
            <img 
                v-for="picture in pictures" 
                v-bind:src="picture" 
                v-bind:style="{ backgroundImage: 'url(' + imageBorder + ')' }" 
            />
        </div>
    </div>`
};