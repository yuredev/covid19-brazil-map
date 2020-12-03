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
    if (this.confirmedCases < 40000) {
      this.radius = 40000;
    } else if (this.confirmedCases > 550000) {
      this.radius = 550000;
    } else {
      this.radius = this.confirmedCases ? this.confirmedCases : 0;  
    }
  }
}

export default State;