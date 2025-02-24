"use client";
import { useClock } from "@/hooks/useClock";
import AlarmForm from "./AlarmForm";
import AlarmList from "./AlarmList";
import AlarmControls from "./AlarmControls";
import ThemeToggle from "./ThemeToggle";

export default function DigitalClock() {
  const { currentTime, alarmTriggered, stopAlarm, snoozeAlarm } = useClock();

  return (
    <div className="clock-container">
      <ThemeToggle />
      <h1>Digital Clock</h1>
      <p className="clock-time">{currentTime}</p>
      
      <AlarmForm />
      <AlarmList />
      
      {alarmTriggered && <AlarmControls onStop={stopAlarm} onSnooze={snoozeAlarm} />}
    </div>
  );
}
