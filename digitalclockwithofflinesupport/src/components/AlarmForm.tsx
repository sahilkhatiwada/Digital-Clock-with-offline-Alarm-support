"use client";
import { useAlarm } from "@/hooks/useAlarm";
import { FormEvent } from "react";

export default function AlarmForm() {
  const { addAlarm } = useAlarm();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const alarmTime = formData.get("alarmTime") as string;
    addAlarm(alarmTime);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Set Alarm:</label>
      <input type="time" name="alarmTime" required />
      <button type="submit">Add Alarm</button>
    </form>
  );
}