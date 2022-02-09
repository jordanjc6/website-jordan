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
            this.$refs[this.projectsTabLocation.value][0].$el.scrollIntoView({ behavior: 'smooth' });
        }
    },
    inject: ['projectsTabLocation'],
    template: `
    <div id="projects-wrapper">
        <project-display
            v-for="project in projects"
            v-bind:description="project.description"
            v-bind:pictures="project.pictures"
            v-bind:ref="project.ref"
        ></project-display>
    </div>`,
    components: {
        ProjectDisplay
    }
};