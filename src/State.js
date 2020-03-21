import { latLng } from "leaflet";

class State {
    constructor(posX, posY, numberOfCases) {
        this["lat-lng"] = latLng(posY, posX);
        if (numberOfCases > 30000) {
            this.radius = 300000;
            this.color = '#770000';
            this.fillColor = "#770000";
        } else if (numberOfCases > 15000) {
            this.radius = 140000;
            this.color = '#880000';
            this.fillColor = "#880000";
        } else if (numberOfCases > 5000) {
            this.radius = 120000;
            this.color = '#990000';
            this.fillColor = "#990000";
        } else if (numberOfCases > 2000) {
            this.radius = 100000;
            this.color = '#990000';
            this.fillColor = "#990000";
        } else if (numberOfCases > 1000) {
            this.radius = 90000;
            this.color = '#AA0000';
            this.fillColor = "#AA0000";
        } else if (numberOfCases > 500) {
            this.radius = 85000;
            this.color = '#BB0000';
            this.fillColor = "#BB0000";
        } else if (numberOfCases > 200) {
            this.radius = 80000;
            this.color = '#CC0000';
            this.fillColor = "#CC0000";
        } else if (numberOfCases > 50) {
            this.radius = 65000;
            this.color = '#DD0000';
            this.fillColor = "#DD0000";
        } else if (numberOfCases > 25) {
            this.radius = 55000;
            this.color = '#EE0000';
            this.fillColor = "#EE0000";
        } else {
            this.radius = 40000;
            this.color = '#FF0000';
            this.fillColor = "#FF0000";
        }
        this.fillOpacity = '0.5';
    }
}

export default State;