import lossaGr9 from '../../../../assets/sportsPictures/lossa-gr9.png';
import lossaGr12 from '../../../../assets/sportsPictures/lossa-gr12.png';
import ofsaaCentral from '../../../../assets/sportsPictures/ofsaa-central.png';
import ontarioCupFinal from '../../../../assets/sportsPictures/ontario-cup-final.jpg';
import opdlCupFinal from '../../../../assets/sportsPictures/opdl-cup-final.jpg';
import opdlCupFinal2 from '../../../../assets/sportsPictures/opdl-cup-final2.jpg';
import opdlCupFinal3 from '../../../../assets/sportsPictures/opdl-cup-final3.jpg';
import xcGr9 from '../../../../assets/sportsPictures/xc-gr9.png';
import curlicueLightBlueBackground from "../../../../assets/curlicue-blues/eos_curlicue2h.png";
import { styles } from "./style.SportsTab.css";

export const SportsTab = {
    data() {
        return {
            imageBorder: curlicueLightBlueBackground,
            pictures: [
                lossaGr9,
                lossaGr12,
                ofsaaCentral,
                ontarioCupFinal,
                opdlCupFinal,
                opdlCupFinal2,
                opdlCupFinal3,
                xcGr9
            ],
            isImageActive: false,
            activeIndex: null,
            sportsWrapperHeight: null
        };
    },
    methods: {
        zoomImage(index) {
            if(window.innerWidth > 428) {
                this.isImageActive = !this.isImageActive;
                this.activeIndex = index;
            }
        }
    },
    template: `
    <div id="sports-wrapper" ref="sports_wrapper">
        <img 
            v-bind:class="{ imageActive: isImageActive && activeIndex === index }" 
            v-for="(picture, index) in pictures" 
            v-bind:src="picture" 
            v-bind:style="[isImageActive && activeIndex === index ? { borderImageSource: 'url(' + imageBorder + ')'} : { borderImageSource: 'none'}]"
            @click="zoomImage(index)" 
        />
        <img />
    </div>`
};