import { latLng } from "leaflet";

class State {
  constructor(posX, posY, confirmedCases, suspiciousCases, deaths) {
    this["lat-lng"] = latLng(posY, posX);
    this.fillOpacity = 0.5;
    this.color = 'rgb(90, 0, 40)';
    this.fillColor = "rgb(100, 0, 30)";
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
    if (this.confirmedCases < 70000) {
      this.radius = 70000 / 2;
    } else if (this.confirmedCases > 1000000) {
      this.radius = 1000000 / 2;
    } else {
      this.radius = this.confirmedCases ? this.confirmedCases / 2 : 0;  
    }
  }
}

export default State;
