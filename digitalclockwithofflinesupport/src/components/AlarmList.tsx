"use client";
import { useAlarm } from "@/hooks/useAlarm";

export default function AlarmList() {
  const { alarms } = useAlarm();

  return (
    <div>
      <h2>Alarms:</h2>
      <ul>
        {alarms.map((alarm, index) => (
          <li key={index}>{alarm.time} {alarm.snoozed ? "(Snoozed)" : ""}</li>
        ))}
      </ul>
    </div>
  );
}
