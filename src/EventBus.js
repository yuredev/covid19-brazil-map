import Vue from 'vue';

const EventBus = new Vue({
    data() {
        return {
            states: []
        }
    }
});

export default EventBus;