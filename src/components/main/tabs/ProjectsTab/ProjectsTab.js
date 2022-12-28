import { ProjectDisplay } from "./ProjectDisplay.js";
import rfbpWelcome from '../../../../assets/paralucent-rfbp-snips/welcome-page.png';
import rfbpBuild from '../../../../assets/paralucent-rfbp-snips/build-portfolio.png';
import rfbpBuild2 from '../../../../assets/paralucent-rfbp-snips/build-portfolio2.png';
import rfbpSearch from '../../../../assets/paralucent-rfbp-snips/simple-search.png';
import rfbpFilter from '../../../../assets/paralucent-rfbp-snips/advanced-search.png';
import rfbpFilled from '../../../../assets/paralucent-rfbp-snips/filled-portfolio.png';
import rfbpSummary from '../../../../assets/paralucent-rfbp-snips/portfolio-summary.png';
import rfbpGenerate from '../../../../assets/paralucent-rfbp-snips/generate-report.png';
import rfbpFeeComp from '../../../../assets/paralucent-rfbp-snips/fee-comparison.png';
import rfbpFeeCompRes from '../../../../assets/paralucent-rfbp-snips/fee-comparison-result.png';
import rfbpFeeCompRes2 from '../../../../assets/paralucent-rfbp-snips/fee-comparison-result2.png';
import rfbpFeeTable from '../../../../assets/paralucent-rfbp-snips/fee-structure-table.png';
import webanalyticsdashboardCharts from '../../../../assets/analyticsdashboard/dashboard_charts.png';
import webanalyticsdashboardCharts2 from '../../../../assets/analyticsdashboard/dashboard_ss.png';
import webanalyticsdashboardTable from '../../../../assets/analyticsdashboard/dashboard_table.png';
import webanalyticsdashboardCustom from '../../../../assets/analyticsdashboard/dashboard_custom.png';
import leaQuotesAppForm from '../../../../assets/leaquotesapp/form.png';
import leaQuotesAppHome from '../../../../assets/leaquotesapp/home.png';
import leaQuotesAppSidenav from '../../../../assets/leaquotesapp/sidenav.png';
import mcjewelryAdminPage from '../../../../assets/mcjewelry/admin-page.png';
import mcjewelryItemSelection from '../../../../assets/mcjewelry/item-selection.png';
import mcjewelrySearch from '../../../../assets/mcjewelry/search-parameters.png';
import weekPlannerDay from '../../../../assets/weekplanner/day.png';
import weekPlannerForm from '../../../../assets/weekplanner/form.png';
import weekPlannerHome from '../../../../assets/weekplanner/home.png';
import connectFour from '../../../../assets/connectfour.png';
import { styles } from "./style.ProjectsTab.css";

export const ProjectsTab = {
    data() {
        return {
            projects: [
                { 
                    title: 'Mutual Fund Fee Calculator',
                    ref: 'mutualfundfeecalculator',
                    description: `
                        Mutual Fund Fee Calculator is an app that BMO employees will
                        use to assist with investment portfolio management by
                        calculating and comparing fees for the inputted portfolio.
                        There are two different app flows that depends on user input
                        at the landing page. Both options allow for simple search and
                        advanced criteria filtering of over 1200 different funds within
                        and external to BMO. At the end of each flow is a results/summary
                        page where you may review the comparisons and print a result pdf.`,
                    pictures: [
                        rfbpWelcome,
                        rfbpBuild,
                        rfbpBuild2,
                        rfbpSearch,
                        rfbpFilter,
                        rfbpFilled,
                        rfbpSummary,
                        rfbpGenerate,
                        rfbpFeeComp,
                        rfbpFeeCompRes,
                        rfbpFeeCompRes2,
                        rfbpFeeTable
                    ]
                },
                { 
                    title: 'Web Analytics Dashboard',
                    ref: 'webanalyticsdashboard',
                    description: `
                        Web Analytics Dashboard is a custom Vue solution created to
                        help MCAP visualize what is stored in its analytics database
                        and understand the actions that clients take on the company's
                        homeowner, investor, lender, and broker portal sites. On the
                        first page, users may select the desired daterange to display
                        preset metrics. On the second page, users may input site, 
                        logtype, and daterange parameters to generate a chart. This
                        front-end receives the data through several endpoints created
                        across 2 apis developed with ASP.NET Core.`,
                    pictures: [
                        webanalyticsdashboardCharts,
                        webanalyticsdashboardCharts2,
                        webanalyticsdashboardTable,
                        webanalyticsdashboardCustom
                    ]
                },
                { 
                    title: 'Lea Quotes App',
                    ref: 'leaquotesapp',
                    description: `
                        This is a full-stack web application developed for my 
                        sister to create and manage her list of funny quotes 
                        and conversations from around the house. The front-end 
                        was built using Angular and NestJS was used to create 
                        the backend. The REST API manages crud operations of 
                        conversation entries. Conversations are stored in two 
                        PostgreSQL tables: 'quotes' and 'phrases'. The title, 
                        context, and speakers are 'quotes' attributes and each 
                        quote record is related to the appropriate 'phrase' record 
                        by quoteid. Each phrase record records the speaker and text.`,
                    pictures: [
                        leaQuotesAppHome,
                        leaQuotesAppForm,
                        leaQuotesAppSidenav
                    ]
                },
                { 
                    title: 'MCJewelry Pricing Tool',
                    ref: 'mcjewelrypricingtool',
                    description: `
                        This is a full-stack web application developed for a 
                        small jewelry business that is used to manage inventory 
                        and price items. The front-end was made using HTML/CSS + 
                        JavaScript and the back-end was built using NestJS. The 
                        REST API makes requests to the back-end which communicates 
                        with the PostgreSQL DB via TypeORM to perform search and 
                        CRUD operations on the jewelry inventory.`,
                    pictures: [
                        mcjewelrySearch,
                        mcjewelryItemSelection,   
                        mcjewelryAdminPage                   
                    ]
                },
                { 
                    title: 'Week Planner',
                    ref: 'weekplanner',
                    description: `
                        Week Planner is a web application made with JS, HTML, and CSS 
                        that helps students manage their time. The app enables users to 
                        name and schedule various event types, categorized by color, for all 
                        the days of the week. The planner provides storage for each event 
                        accurate to the minute in order for students to remain productive.`,
                    pictures: [
                        weekPlannerHome,
                        weekPlannerDay,
                        weekPlannerForm,
                    ]
                },
                { 
                    title: 'Java Connect Four',
                    ref: 'javaconnectfour',
                    description: `
                        Connect 4 is a terminal-based recreation 
                        of the game Connect Four coded in Java. 
                        Players take turns placing their tokens 
                        on the board by inputting the desired 
                        column number. The board GUI was created 
                        using Java Swing and this game supports 
                        multiplayer.`,
                    pictures: [
                        connectFour
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
            v-bind:title="project.title"
            v-bind:description="project.description"
            v-bind:pictures="project.pictures"
            v-bind:ref="project.ref"
        ></project-display>
    </div>`,
    components: {
        ProjectDisplay
    }
};