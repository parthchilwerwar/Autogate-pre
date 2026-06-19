import { Signal, Wifi, BatteryFull } from "lucide-react";

// Android status bar shown at the top of the device mockups: clock on the left,
// signal/wifi/battery icons on the right. Purely decorative.
export default function AndroidStatusBar() {
  return (
    <div className="android-statusbar">
      <span>12:30</span>
      <div className="flex items-center gap-1.5">
        <Signal className="w-3.5 h-3.5" />
        <Wifi className="w-3.5 h-3.5" />
        <BatteryFull className="w-4 h-4" />
      </div>
    </div>
  );
}
