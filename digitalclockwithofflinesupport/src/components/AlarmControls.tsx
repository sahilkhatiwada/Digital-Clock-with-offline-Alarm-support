"use client";

interface AlarmControlsProps {
  onSnooze: () => void;
  onStop: () => void;
}

export default function AlarmControls({ onSnooze, onStop }: AlarmControlsProps) {
  return (
    <div>
      <button onClick={onSnooze}>Snooze 5 min</button>
      <button onClick={onStop}>Stop</button>
    </div>
  );
}
