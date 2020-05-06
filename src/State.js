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
        if (this.confirmedCases > 50000) {
            this.radius = 400000;
            this.color = 'rgb(100, 0, 30)';
            this.fillColor = "rgb(100, 0, 30)";
        } else if (this.confirmedCases > 30000) {
            this.radius = 330000;
            this.color = 'rgb(120, 0, 20)';
            this.fillColor = "rgb(120, 0, 20)";
        } else if (this.confirmedCases > 20000) {
            this.radius = 280000;
            this.color = 'rgb(150, 0, 10)';
            this.fillColor = "rgb(150, 0, 10)";
        } else if (this.confirmedCases > 10000) {
            this.radius = 200000;
            this.color = 'rgb(170, 0, 0)';
            this.fillColor = "rgb(170, 0, 0)";
        } else if (this.confirmedCases > 7500) {
            this.radius = 150000;
            this.color = 'rgb(180, 0, 0)';
            this.fillColor = "rgb(180, 0, 0)";
        } else if (this.confirmedCases > 5000) {
            this.radius = 100000;
            this.color = 'rgb(195, 0, 0)';
            this.fillColor = "rgb(195, 0, 0)";
        } else if (this.confirmedCases > 2000) {
            this.radius = 80000;
            this.color = 'rgb(205, 10, 0)';
            this.fillColor = "rgb(205, 10, 0)";
        } else if (this.confirmedCases > 1000) {
            this.radius = 60000;
            this.color = 'rgb(215, 20, 0)';
            this.fillColor = "rgb(215, 20, 0)";
        } else if (this.confirmedCases > 500) {
            this.radius = 50000;
            this.color = 'rgb(225, 30, 0)';
            this.fillColor = "rgb(225, 30, 0)";
        } else if (this.confirmedCases > 200) {
            this.radius = 45000;
            this.color = 'rgb(235, 40, 0)';
            this.fillColor = "rgb(235, 40, 0)";
        } else if (this.confirmedCases > 100) {
            this.radius = 30000;
            this.color = 'rgb(245, 50, 0)';
            this.fillColor = "rgb(245, 50, 0)";
        } else {
            this.radius = 25000;
            this.color = 'rgb(255, 60, 0)';
            this.fillColor = "rgb(255, 60, 0)";
        }
    }
}

export default State;