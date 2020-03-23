<template>
    <div id="app">
        <div class="display">
            <h1>
                <div class="title">
                    Casos no Brasil: {{brazilCases}}
                </div>   
                <div>
                    Mortes: {{brazilDeaths}}
                </div> 
            </h1>
        </div>
        <Map />
    </div>
</template>

<script>
import Map from './components/Map';

export default {
    components: {
        Map
    },
    data() {
        return {
            brazilCases: undefined,
            brazilDeaths: undefined
        }
    },
    async mounted() {
        let res = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil');
        let data = await res.json();
        this.brazilCases = data.data.cases;
        this.brazilDeaths = data.data.deaths;
    },
}
</script>

<style scoped>

    .display{
        display: flex;
        justify-content: center;
    }

        
    @media (max-width: 600px) {
        .title {
            display: none;
        }
    }

    h1{
        display: flex;
        justify-content: space-evenly;
        width: 50%;
        position: absolute;
        z-index: 99;
        font-size: 1.1rem;
        font-family: 'Roboto', cursive;
        padding: 2px;   
        background-color: rgba(220, 20, 60, 0.274);
        border: 0;
        margin: 0;
    }
</style>