import { latLng } from "leaflet";

class State {
    constructor(posX, posY, confirmedCases, suspiciousCases, deaths) {
        this["lat-lng"] = latLng(posY, posX);
        this.fillOpacity = 0.5;
        this.confirmedCases = confirmedCases;
        this.suspiciousCases = suspiciousCases;
        this.deaths = deaths;

        if (confirmedCases > 30000) {
            this.radius = 300000;
            this.color = '#770000';
            this.fillColor = "#770000";
        } else if (confirmedCases > 15000) {
            this.radius = 140000;
            this.color = '#880000';
            this.fillColor = "#880000";
        } else if (confirmedCases > 5000) {
            this.radius = 120000;
            this.color = '#990000';
            this.fillColor = "#990000";
        } else if (confirmedCases > 2000) {
            this.radius = 100000;
            this.color = '#990000';
            this.fillColor = "#990000";
        } else if (confirmedCases > 1000) {
            this.radius = 90000;
            this.color = '#AA0000';
            this.fillColor = "#AA0000";
        } else if (confirmedCases > 500) {
            this.radius = 85000;
            this.color = '#BB0000';
            this.fillColor = "#BB0000";
        } else if (confirmedCases > 200) {
            this.radius = 80000;
            this.color = '#CC0000';
            this.fillColor = "#CC0000";
        } else if (confirmedCases > 50) {
            this.radius = 65000;
            this.color = '#DD0000';
            this.fillColor = "#DD0000";
        } else if (confirmedCases > 25) {
            this.radius = 55000;
            this.color = '#EE0000';
            this.fillColor = "#EE0000";
        } else {
            this.radius = 40000;
            this.color = '#FF0000';
            this.fillColor = "#FF0000";
        }
    }
}

export default State;