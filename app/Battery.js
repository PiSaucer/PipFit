
import { battery } from 'power';

// battery
const batteryIcon = document.getElementById('batteryIcon');
function updateBattery() {
  const { chargeLevel } = battery;
  if (chargeLevel >= 60) {
    batteryIcon.image = 'images/battery_full.png';
  } else if (chargeLevel >= 20) {
    batteryIcon.image = 'images/battery_mid.png';
  } else {
    batteryIcon.image = 'images/battery_low.png';
  }
  batteryNum1.image = `images/num_s_${getNumberOfPlace(chargeLevel, 1)}.png`;
  batteryNum2.image = `images/num_s_${getNumberOfPlace(chargeLevel, 2)}.png`;
  batteryNum3.image = `images/num_s_${getNumberOfPlace(chargeLevel, 3)}.png`;
}

console.log(Math.floor(battery.chargeLevel) + "%");
