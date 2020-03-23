<template>
    <div class="pane">
        <div class="info">
            <div>Atualizado em: {{updatedAtFormated}}</div>
            <div>
                Desenvolvido por:  
                <a href="http://github.com/yurematias">Yure Matias</a>    
            </div>
        </div>
    </div>
</template>

<script>

import customSplit from '../cutomSplit';

export default {
    props: {
        updatedAt: String
    },
    computed: {
        updatedAtFormated() {
            // a data de atualização vem no formato '2020-03-23T18:51:04.000Z'
            // para isso é preciso tratar essa string para o formato 'DD/MM/AA - HH:MM:SS'
            let date = customSplit(this.updatedAt, '-', 'T', ':', '.');
            let year = date[0];
            let month = date[1];
            let day = date[2];
            let hour = date[3];
            let minutes = date[4];
            let seconds = date[5];
            return `${day}/${month}/${year} as ${hour}:${minutes}:${seconds}`;
        }
    }
}
</script>

<style scoped>

a{
    color: black;
}

div.info {
    width: 60%;
    bottom: 0;
}

</style>