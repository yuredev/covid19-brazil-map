<template>
    <div id="app">
        <div class="display">
            <h1>
                Mapa COVID-19 Brasil 
                <div>
                    Por: <a href="http://github.com/yurematias"> Yure Matias</a>
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
    }
}
</script>

<style scoped>

    .display{
        display: flex;
        justify-content: center;
    }

    h1{
        display: flex;
        justify-content: space-evenly;
        width: 50%;
        position: absolute;
        z-index: 99;
        font-size: 1.4rem;
        font-family: 'Roboto', cursive;
        padding: 2px;   
        background-color: rgba(220, 20, 60, 0.274);
        border: 0;
        margin: 0;
    }
    /* #app{
        background-color: rgb(179, 1, 1);
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    } */
</style>