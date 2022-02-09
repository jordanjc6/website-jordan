import { ProjectDisplay } from "./ProjectDisplay.js";
import { styles } from "./style.ProjectsTab.css";

export const ProjectsTab = {
    data() {
        return {
            projects: [
                { 
                    name: 'MCJewelry Pricing Tool',
                    ref: 'mcjewelrypricingtool',
                    description: `
                        This is MCJewelry Pricing Tool. This is project 1. This is project 1.
                        This is project 1. This is project 1. This is project 1.
                        This is project 1. This is project 1. This is project 1.
                        This is project 1. This is project 1. This is project 1.
                        This is project 1. This is project 1. This is project 1.`,
                    pictures: [
                        'https://i.imgflip.com/58r9dj.jpg',
                        'https://www.fredrogerscenter.org/wp-content/uploads/2015/11/dark-grey-background-FRC-Grey.png'
                    ]
                },
                { 
                    name: 'Week Planner',
                    ref: 'weekplanner',
                    description: `
                        This is Week Planner. This is project 2. This is project 2.
                        This is project 2. This is project 2. This is project 2.
                        This is project 2. This is project 2. This is project 2.
                        This is project 2. This is project 2. This is project 2.
                        This is project 2. This is project 2. This is project 2.`,
                    pictures: [
                        'https://wallpapercave.com/wp/wp3269246.jpg',
                        'https://i.imgflip.com/58r9dj.jpg',
                        'https://www.fredrogerscenter.org/wp-content/uploads/2015/11/dark-grey-background-FRC-Grey.png'
                    ]
                },
                { 
                    name: 'Java Connect Four',
                    ref: 'javaconnectfour',
                    description: `
                        This is Java Connect Four. This is project 3. This is project 3.
                        This is project 3. This is project 3. This is project 3.
                        This is project 3. This is project 3. This is project 3.
                        This is project 3. This is project 3. This is project 3.
                        This is project 3. This is project 3. This is project 3.`,
                    pictures: [
                        'https://wallpapercave.com/wp/wp3269246.jpg',
                        'https://i.imgflip.com/58r9dj.jpg',
                        'https://www.fredrogerscenter.org/wp-content/uploads/2015/11/dark-grey-background-FRC-Grey.png',
                        'https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg'
                    ]
                }
            ]
        };
    },
    mounted() {
        console.log(this.projectsTabLocation.value);
        if(this.projectsTabLocation.value !== 'top') {
            this.$refs[this.projectsTabLocation.value].$el.scrollIntoView({ behavior: 'smooth' });
        }
    },
    inject: ['projectsTabLocation'],
    template: `
    <div id="projects-wrapper">
        <project-display
            v-bind:description="projects[0].description"
            v-bind:pictures="projects[0].pictures"
            v-bind:ref="projects[0].ref"
        ></project-display>
        <project-display
            v-bind:description="projects[1].description"
            v-bind:pictures="projects[1].pictures"
            v-bind:ref="projects[1].ref"
        ></project-display>
        <project-display
            v-bind:description="projects[2].description"
            v-bind:pictures="projects[2].pictures"
            v-bind:ref="projects[2].ref"
        ></project-display>
    </div>`,
    components: {
        ProjectDisplay
    }
};