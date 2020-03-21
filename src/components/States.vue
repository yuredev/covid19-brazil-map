<template>
    <div>
        <template v-for="(state, key) of states">
            <LCircle v-bind="states[key]" :key="key"> 
                <LPopup>
                    <p>
                        <strong>{{key.toUpperCase()}}</strong> <br />
                        Casos confirmados: {{state.confirmedCases}} <br />
                        Casos suspeitos: {{state.suspiciousCases}} <br />
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

export default {
    components: { LCircle, LPopup },
    data() {
        return {
            states: {
                rn: new State(-36.3, -5.5, 6),
                pb: new State(-36.7, -7.2, 2),
                pe: new State(-37.5, -8.5, 2),
                al: new State(-36.2, -9.7, 2),
                se: new State(-37.2, -10.7, 2),
                ce: new State(-39.55, -5.2, 2),
                pi: new State(-42.1, -7, 2),
                ma: new State(-45.3, -4.7, 2),
                to: new State(-48.5, -10, 2),
                go: new State(-51, -17, 2),
                df: new State(-47.9, -15.77, 2),
                mt: new State(-56, -12.77, 2),
                pa: new State(-53.3, -4, 2),
                ms: new State(-55, -20.47, 2),
                am: new State(-65, -4.1, 2),
                rr: new State(-61.4, 2, 2),
                ap: new State(-51.7, 1.15, 2),
                ro: new State(-63, -11.1, 2),
                ac: new State(-70.4, -9, 2),
                ba: new State(-41.7, -12.3, 2),
                mg: new State(-44.6, -18.85, 2),
                es: new State(-40.55, -19.7, 2),
                rj: new State(-42.65, -22.6, 2),
                sp: new State(-48.3, -22.781325, 30000),
                pr: new State(-51, -25, 2),
                sc: new State(-49.8, -27.5, 2),
                rs: new State(-53.3, -30.3, 2),
            }
        }
    },
}
</script>