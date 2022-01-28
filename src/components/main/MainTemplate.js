import { HomeTab } from "./tabs/HomeTab/HomeTab.js"
import { ProjectsTab } from "./tabs/ProjectsTab/ProjectsTab.js";
import { QuotesTab } from "./tabs/QuotesTab/QuotesTab.js";
import { SportsTab } from "./tabs/SportsTab/SportsTab.js";

export const MainTemplate = {
    props: {
        currentTabComponent: String
    },
    template: `
    <main>
        <component :is="currentTabComponent"></component>
    </main>`,
    components: {
        HomeTab,
        ProjectsTab,
        QuotesTab,
        SportsTab
    }
}