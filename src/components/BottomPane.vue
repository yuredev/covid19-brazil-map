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
            return `${day}/${month}/${year}`;
        }
    }
}
</script>

<style scoped>

a{
    color: black;
}

div.pane > div.info {
    bottom: 0;
}

@media (max-width: 600px) {
    div.pane > div.info {
        width: 90%;
        background-color: rgba(220, 120, 160, 0.9);
        box-sizing: border-box;
        border-style: none;
        border-top-style: dotted;
        border-top-color: rgb(100, 0, 0);
        padding: 4px 4px;
        font-size: 0.74rem;
    }
}

</style>