<template>
    <div class="ranking-container">
        <div @click="showRanking = !showRanking" class="show-ranking-button">
            <span>Ranking</span>
            <img src="../assets/ranking-icon.png" alt="mostrar ranking">
        </div>

        <table v-show="showRanking">
            <tr>
                <th>Posição</th>
                <th>Estado</th>
                <th>Casos</th>
                <th>Mortes</th>
            </tr>
            <tr v-for="(state, index) of rankingOfStates" :key="state.uf">
                <td>
                    <strong>
                        {{index+1}}°
                    </strong>
                </td>
                <td>{{state.uf}}</td>
                <td>{{state.confirmedCases}}</td>
                <td>{{state.deaths}}</td>
            </tr>
        </table>
    </div>
</template>

<script>

import EventBus from '../EventBus';

export default {
    data() {
        return {
            showRanking: true,
            states: []
        }
    },
    computed: {
        rankingOfStates() {
            const array = [];
            for (const state of Object.values(this.states)) {
                array.push(state);
            }
            return array.sort((a, b) => a.confirmedCases < b.confirmedCases);
        }
    },
    methods: {
        formatPosition(i) {
            return i+1 > 9 ? i+1 : '0' + (i+1);
        }
    },
    mounted() {
        EventBus.$on('setStatesData', statesData => {
            this.states = statesData;
            console.log(this.states);
        });
    },
}
</script>

<style scoped>

    .ranking-container {
        height: 100%;
        position: fixed;
        z-index: 2;
        right: 6px;
        top: 3px;
        display: flex;
    }

    @media (max-width: 600px) {
        .ranking-container {
            display: none;
        }
    }

    .ranking-container table{
        box-sizing: border-box;
        background-color: rgba(220, 50, 90, 0.45);
        border-color: rgb(100, 0, 0);
        border-width: 1px;
        border-radius: 5px;
        width: 270px;
        padding: 0;
        margin: 0;
        border-color: red;
        font-family: 'Roboto', cursive;
        border-collapse: collapse;
    }
    
    .ranking-container table th{
        font-weight: 500;
        padding: 4px;
        margin: 0;
        box-sizing: border-box;
        background-color: rgba(220, 20, 60, 0.35);
    }

    .ranking-container tr {
        box-sizing: border-box;
        border-style: groove;
        border-width: 1px;
        border-color: rgba(0, 0, 0, 0.295);
    }

    .ranking-container table td {
        box-sizing: border-box;
        text-align: center;
        padding: 2px 0px;
    }

    .ranking-container .show-ranking-button {
        display: flex;
        margin: 5px 10px;
        justify-content: space-between;
        font-family: 'Roboto';
        width: 75px;
        font-size: .8rem;
        align-items: center;
        height: 20px;
        cursor: pointer;
    }

    .ranking-container .show-ranking-button span {
        margin-bottom: 2px;
        font-weight: 500;
    }

    .ranking-container .show-ranking-button img {
        height: 100%;
    }

</style>