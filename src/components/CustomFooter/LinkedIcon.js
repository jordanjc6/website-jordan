export const LinkedIcon = {
    props: {
        link: Object
    },
    computed: {
        linkName() {
            return this.link.name;
        },
        linkIcon() {
            return this.link.icon;
        }
    },
    template: `
        <a v-bind:href="link.address" target='_blank'>
            <img v-bind:src="linkIcon" v-bind:alt="linkName" />
        </a>`
};