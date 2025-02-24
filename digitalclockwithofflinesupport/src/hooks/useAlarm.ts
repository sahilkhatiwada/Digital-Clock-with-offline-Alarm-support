import { useState } from "react";

interface Alarm {
  time: string;
  snoozed: boolean;
}

export function useAlarm() {
  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const [alarmTriggered, setAlarmTriggered] = useState<boolean>(false);
  const [currentAlarmIndex, setCurrentAlarmIndex] = useState<number | null>(null);

  const addAlarm = (time: string) => {
    setAlarms([...alarms, { time: time + ":00", snoozed: false }]);
  };

  const triggerAlarm = (index: number) => {
    setAlarmTriggered(true);
    setCurrentAlarmIndex(index);
    let alarmAudio = new Audio("/default-alarm.mp3");
    alarmAudio.play();
  };

  const snoozeAlarm = () => {
    if (currentAlarmIndex === null) return;
    let snoozedTime = new Date();
    snoozedTime.setMinutes(snoozedTime.getMinutes() + 5);
    let snoozedAlarm = snoozedTime.toLocaleTimeString("en-US", { hour12: false });
    let updatedAlarms = [...alarms];
    updatedAlarms[currentAlarmIndex] = { time: snoozedAlarm, snoozed: true };
    setAlarms(updatedAlarms);
    stopAlarm();
  };

  const stopAlarm = () => {
    setAlarmTriggered(false);
    setCurrentAlarmIndex(null);
  };

  return { alarms, addAlarm, triggerAlarm, alarmTriggered, stopAlarm, snoozeAlarm };
}
