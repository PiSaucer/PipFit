import { HeartRateSensor } from "heart-rate";
import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { today } from "user-activity";
import { charger, battery } from "power";
import { goals } from "user-activity";
import { today } from "user-activity";
import * as battery from "battery";
import { me as device } from "device";
import * as messaging from "messaging";


import * as util from "../common/utils";

console.log("PiSaucer's PipFit")

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
let elDate = document.getElementById("date");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let dtDate = new Date();
  let hours = today.getHours();
  
   elDate.text = `${util.getDay3(dtDate.getDay())} ${dtDate.getDate()} ${util.getMonth3(dtDate.getMonth())}`;
  
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

//calorires
console.log((today.local.calories || 0) + " calories");

let dailycals = document.getElementById("myCals");


//settings
let background = document.getElementById("background");

messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === "color" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    console.log(`Setting background color: ${color}`);
  }
};