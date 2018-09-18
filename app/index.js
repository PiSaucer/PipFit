import { HeartRateSensor } from "heart-rate";
import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { today } from "user-activity";
import { battery } from "power";
import { charger } from "power";



// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
}

//heart rate
let hrmData = document.getElementById("hrm-data");

let hrm = new HeartRateSensor();

hrm.start();

function refreshData() {
  let data = {
    hrm: 
      hrm.heartRate ? hrm.heartRate : 0
    
  };

  hrmData.text = JSON.stringify(data.hrm);
}

refreshData();
setInterval(refreshData, 1000);

// steps
let txtSteps = document.getElementById("txtSteps");

// inside the clock tick handler
txtSteps.text = today.adjusted.steps || 0;

// battery
console.log(Math.floor(battery.chargeLevel) + "%");
console.log("The charger " + (charger.connected ? "is" : "is not") + " connected");

txtBattery.text = battery.chargeLevel