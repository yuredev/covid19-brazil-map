<template>
    <div id="app">
        <TopPane :brazilData="brazilData" />
        <Ranking />
        <Map />
        <BottomPane :updatedAt="updatedAt" />
    </div>
</template>

<script>
import Map from './components/Map';
import TopPane from './components/TopPane';
import BottomPane from './components/BottomPane';
import Ranking from './components/Ranking';

export default {
    components: { 
        Map, 
        TopPane,
        BottomPane,
        Ranking
    },
    data() {
        return {
            brazilData: {
                cases: undefined,
                deaths: undefined,
            },
            updatedAt: new String()
        }
    },
    async mounted() {
        const res = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil');
        const brazil = await res.json();
        this.updatedAt = brazil.data.updated_at;
        this.brazilData = brazil.data;
    }, 
}
</script>

<style>
    * {
        user-select: none;
    }
    .pane{
        display: flex;
        justify-content: center;
    }   
    .pane > .info{
        position: fixed;
        display: flex;
        justify-content: space-evenly;
        width: 30%;
        z-index: 2;
        font-size: 1.1rem;
        font-family: 'Roboto', cursive;
        padding: 2px;   
        background-color: rgba(220, 20, 60, 0.35);
        border: 1px;
        border-radius: 2px;
        border-style: dotted;
        border-color: rgb(100, 0, 0);
        margin: 0;
    }
    @media (max-width: 600px) {
        div.pane > div.info {
            width: 50%;
            font-size: 0.8rem;
        }
    }
</style>