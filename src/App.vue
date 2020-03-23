<template>
    <div id="app">
        <TopPane :brazilData="brazilData" />
        <Map />
        <BottomPane :updatedAt="updatedAt" />
    </div>
</template>

<script>
import Map from './components/Map';
import TopPane from './components/TopPane';
import BottomPane from './components/BottomPane';

export default {
    components: { 
        Map, 
        TopPane,
        BottomPane
    },
    data() {
        return {
            brazilData: {
                cases: undefined,
                deaths: undefined,
                recovered: undefined,
            },
            updatedAt: new String()
        }
    },
    async mounted() {
        let res = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil');
        let brazil = await res.json();
        this.updatedAt = brazil.data.updated_at;
        this.brazilData = brazil.data;
    }, 
}
</script>

<style>
    .pane{
        display: flex;
        justify-content: center;
    }   
    .info{
        position: fixed;
        display: flex;
        justify-content: space-evenly;
        width: 50%;
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
            justify-content: space-between;
            width: 75%;
            font-size: 0.8rem;
        }
    }
</style>