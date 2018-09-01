import { HealthAlert } from "./health-alert";
import { BatteryPlot } from "./battery-plot";
import { CardioPlot } from "./cardio-plot";

export class Dashboard {
    healthAlerts: HealthAlert[];
    batteryPlot: BatteryPlot;
    cardioPlot: CardioPlot;
}