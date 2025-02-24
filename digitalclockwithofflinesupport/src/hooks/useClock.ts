import { useState, useEffect } from "react";
import { useAlarm } from "./useAlarm";

export function useClock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { alarms, triggerAlarm, alarmTriggered, stopAlarm, snoozeAlarm } = useAlarm();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    alarms.forEach((alarm, index) => {
      if (formatTime(currentTime) === alarm.time) {
        triggerAlarm(index);
      }
    });
  }, [currentTime, alarms]);

  const formatTime = (time: Date): string => time.toLocaleTimeString("en-US", { hour12: false });

  return { currentTime: formatTime(currentTime), alarmTriggered, stopAlarm, snoozeAlarm };
}
