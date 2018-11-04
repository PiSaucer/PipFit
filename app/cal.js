import clock from "clock";
import document from "document";
import userActivity from "user-activity";
import { HeartRateSensor } from "heart-rate";
import { locale } from "user-settings";
import { preferences } from "user-settings";
import * as messaging from "messaging";
import * as fs from "fs";
import { me as device } from "device";



let dailycals = document.getElementById("myCals");


function updateStats() {
  const metricCals = "calories";  // distance, calories, elevationGain, activeMinutes
  const amountCals = userActivity.today.adjusted[metricCals] || 0;
  dailymins.text = amountActive;
  let calString = util.thsdDot(amountCals);
}