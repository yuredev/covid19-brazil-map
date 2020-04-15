import { latLng } from "leaflet";

class State {
    constructor(posX, posY, confirmedCases, suspiciousCases, deaths) {
        this["lat-lng"] = latLng(posY, posX);
        this.fillOpacity = 0.5;
        this.confirmedCases = confirmedCases;
        this.suspiciousCases = suspiciousCases;
        this.deaths = deaths;
        this.setStyle();
    }

    setConfirmedCases(confirmedCases) {
        this.confirmedCases = confirmedCases;
        this.setStyle();
    }

    setStyle() {
        if (this.confirmedCases > 25000) {
            this.radius = 400000;
            this.color = '#770000';
            this.fillColor = "#770000";
        } else if (this.confirmedCases > 10000) {
            this.radius = 350000;
            this.color = '#880000';
            this.fillColor = "#880000";
        } else if (this.confirmedCases > 5000) {
            this.radius = 300000;
            this.color = '#990000';
            this.fillColor = "#990000";
        } else if (this.confirmedCases > 2000) {
            this.radius = 210000;
            this.color = '#990000';
            this.fillColor = "#990000";
        } else if (this.confirmedCases > 1000) {
            this.radius = 160000;
            this.color = '#AA0000';
            this.fillColor = "#AA0000";
        } else if (this.confirmedCases > 500) {
            this.radius = 130000;
            this.color = '#BB0000';
            this.fillColor = "#BB0000";
        } else if (this.confirmedCases > 200) {
            this.radius = 70000;
            this.color = '#CC0000';
            this.fillColor = "#CC0000";
        } else if (this.confirmedCases > 100) {
            this.radius = 35000;
            this.color = '#DD0000';
            this.fillColor = "#DD0000";
        } else {
            this.radius = 20000;
            this.color = '#FF3333';
            this.fillColor = "#FF3333";
        }
    }
}

export default State;