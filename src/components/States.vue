<template>
    <div>
        <template v-for="(state, key) of states">
            <LCircle v-bind="states[key]" :key="key"> 
                <LPopup>
                    <p>
                        <strong>{{state.name}}</strong> <br />
                        Casos confirmados: {{state.confirmedCases}} <br />
                        Mortes: {{state.deaths}} 
                    </p>
                </LPopup>
            </LCircle>
        </template>
    </div>
</template>

<script>

import State from '../State';
import { LCircle, LPopup } from 'vue2-leaflet';
import EventBus from '../EventBus';

export default {
    components: { LCircle, LPopup },
    data() {
        return {
            states: {
                ac: new State(-70.4, -9),  
                al: new State(-36.2, -9.7),
                ap: new State(-51.7, 1.15),
                am: new State(-65, -4.1),
                ba: new State(-41.7, -12.3),
                ce: new State(-39.55, -5.2),
                df: new State(-47.9, -15.77),
                es: new State(-40.55, -19.7),
                go: new State(-51, -17, 2),
                ma: new State(-45.3, -4.7),
                mt: new State(-56, -12.77),
                ms: new State(-55, -20.47),
                mg: new State(-44.6, -18.85),
                pr: new State(-51, -25),
                pb: new State(-36.7, -7.2),
                pa: new State(-53.3, -4),
                pe: new State(-37.5, -8.5),
                pi: new State(-42.1, -7),
                rn: new State(-36.3, -5.5),
                rs: new State(-53.3, -30.3),
                rj: new State(-42.65, -22.6),
                ro: new State(-63, -11.1),
                rr: new State(-61.4, 2),
                sc: new State(-49.8, -27.5),
                se: new State(-37.2, -10.7),
                sp: new State(-48.3, -22.781325),
                to: new State(-48.5, -10),
            }
        }
    }, 
    async mounted() {
        const res = await fetch('https://covid19-brazil-api.now.sh/api/report/v1');
        const states = await res.json();
        this.setCovidInfo(states.data);
    },
    methods: {
        setCovidInfo(statesArray) {
            for (let i = 0; i < statesArray.length; i++) {
                this.states[statesArray[i].uf.toLowerCase()].setConfirmedCases(statesArray[i].cases);
                this.states[statesArray[i].uf.toLowerCase()].deaths = statesArray[i].deaths;
                this.states[statesArray[i].uf.toLowerCase()].name = statesArray[i].state;
                this.states[statesArray[i].uf.toLowerCase()].uf = statesArray[i].uf;
            }
            EventBus.$emit('setStatesData', this.states);
        }  
    }
}
</script>