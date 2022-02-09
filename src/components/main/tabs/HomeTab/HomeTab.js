import { ProjectSlide } from "./ProjectSlide.js";
import { QuoteSlide } from "./QuoteSlide.js";
import { SportSlide } from "./SportSlide.js";
import displayPicture from "../../../../assets/display-picture.jpg";
import { styles } from "./style.HomeTab.css";
import curlicueLightBlueBackground from "../../../../assets/curlicue-blues/eos_curlicue2h.png";

export const HomeTab = {
    data() {
        return {
            quoteSlideBackground: curlicueLightBlueBackground,
            displayPicture: displayPicture,
            greeting: `Hey, I'm Jordan Castro`,
            biography: `I'm a 2nd year electrical engineering student at the University of Waterloo. For my
Spring 2021 coop I was employed as a Front-End UI/UX Developer at Gore Mutual.
I am currently employed as a Jr. Software Engineer at MCAP for my Winter 2022 coop.

I have experience in full stack development using technologies such as ReactJS, Angular,
Vue.js, NestJS, Node.js, ASP.Net, SQL Server, and PostgreSQL. I have also taken object
-oriented programming courses in C++, C#, Java, and Python.
            
I am interested in software development and exploring the telecommunications industry. 
You may view my personal projects under the projects tab.`
        };
    },
    template: `
    <div id="home-container">
        <img id="display-picture" v-bind:src="displayPicture" />
        <div id="biography">
            <div id="greeting">{{ greeting }}</div>{{ biography }}
        </div>
    </div>
    <div id="projects-container">
        <project-slide v-bind="$attrs">
        </project-slide>
    </div>
    <div id="quotes-container" v-bind:style="{ backgroundImage: 'url(' + quoteSlideBackground + ')' }">
        <quote-slide>
        </quote-slide>
    </div>
    <div id="sports-container">
        <sport-slide>
        </sport-slide>
    </div>`,
    components: {
        ProjectSlide,
        QuoteSlide,
        SportSlide
    }
};