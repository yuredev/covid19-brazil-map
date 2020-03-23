<template>
    <div class="pane">
        <div class="info">
            <div>
                Casos: {{brazilData.cases}}
            </div>   
            <div>
                Mortes: {{brazilData.deaths}}
            </div> 
            <div class="recovered">
                Recuperados: {{brazilData.recovered}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        brazilData: Object
    }
}
</script>