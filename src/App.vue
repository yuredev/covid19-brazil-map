<template>
    <div id="app">
        <div class="display">
            <h1>
                <div class="title">
                    Mapa COVID-19 Brasil
                </div>   
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

    #app{
        margin: 0;
        border: 0;
        padding: 0;
    }

    .display{
        display: flex;
        justify-content: center;
    }

    a{
        text-decoration: none;
        color: black;
    }

    @media (max-width: 800px) {
        .title {
            display: none;
        }
    }

    h1{
        display: flex;
        justify-content: space-evenly;
        width: 50%;
        position: absolute;
        z-index: 2;
        font-size: 1.2rem;
        font-family: 'Roboto', cursive;
        padding: 2px;   
        background-color: rgba(220, 20, 60, 0.274);
        border: 0;
        margin: 0;
    }
</style>