import lossaGr9 from '../../../../assets/sportsPictures/lossa-gr9.png';
import lossaGr12 from '../../../../assets/sportsPictures/lossa-gr12.png';
import ofsaaCentral from '../../../../assets/sportsPictures/ofsaa-central.png';
import ontarioCupFinal from '../../../../assets/sportsPictures/ontario-cup-final.jpg';
import opdlCupFinal from '../../../../assets/sportsPictures/opdl-cup-final.jpg';
import opdlCupFinal2 from '../../../../assets/sportsPictures/opdl-cup-final2.jpg';
import opdlCupFinal3 from '../../../../assets/sportsPictures/opdl-cup-final3.jpg';
import xcGr9 from '../../../../assets/sportsPictures/xc-gr9.png';
import { styles } from "./style.SportSlide.css";

export const SportSlide = {
    data() {
        return {
            pictures: [
                lossaGr9,
                lossaGr12,
                ofsaaCentral,
                ontarioCupFinal,
                opdlCupFinal,
                opdlCupFinal2,
                opdlCupFinal3,
                xcGr9
            ]
        };
    },
    template: `
    <div id="collage-container">
        <img v-for="picture in pictures" v-bind:src="picture" />
        <img />
    </div>`
};