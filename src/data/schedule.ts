export interface Trainer {
  id: string;
  name: string;
  initials: string;
  role: string;
  specialty: string;
  members: number;
  rating: number;
  classesPerWeek: number;
  hue: string;
}

export const trainers: Trainer[] = [
  { id: "t1", name: "Sara Malik", initials: "SM", role: "Head Coach", specialty: "Strength & Hypertrophy", members: 64, rating: 4.9, classesPerWeek: 9, hue: "from-lime-300/70 via-emerald-400/40 to-transparent" },
  { id: "t2", name: "Marcus Cole", initials: "MC", role: "Powerlifting Coach", specialty: "Squat · Bench · Deadlift", members: 48, rating: 4.8, classesPerWeek: 7, hue: "from-orange-400/70 via-red-400/30 to-transparent" },
  { id: "t3", name: "Lena Fischer", initials: "LF", role: "Mobility & Yoga", specialty: "Yoga · Mobility · Rehab", members: 57, rating: 5.0, classesPerWeek: 8, hue: "from-sky-400/70 via-indigo-400/30 to-transparent" },
  { id: "t4", name: "Daniyal Reyes", initials: "DR", role: "Conditioning Coach", specialty: "HIIT · Fat Loss · Boxing", members: 52, rating: 4.7, classesPerWeek: 10, hue: "from-fuchsia-400/60 via-purple-400/30 to-transparent" },
  { id: "t5", name: "Priya Nair", initials: "PN", role: "Spin & Endurance", specialty: "Cycling · Endurance", members: 41, rating: 4.8, classesPerWeek: 6, hue: "from-amber-300/70 via-yellow-400/30 to-transparent" },
  { id: "t6", name: "Tom Becker", initials: "TB", role: "CrossFit Coach", specialty: "Olympic Lifting · WODs", members: 39, rating: 4.9, classesPerWeek: 8, hue: "from-teal-300/70 via-cyan-400/30 to-transparent" },
];

export interface GymClass {
  id: string;
  name: string;
  trainer: string;
  day: string;
  time: string;
  duration: string;
  room: string;
  booked: number;
  capacity: number;
  intensity: "Low" | "Medium" | "High" | "Extreme";
}

export const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const classes: GymClass[] = [
  { id: "c1", name: "Iron Strength", trainer: "Sara Malik", day: "Mon", time: "06:00", duration: "60 min", room: "Strength Zone", booked: 16, capacity: 18, intensity: "High" },
  { id: "c2", name: "Sunrise Yoga", trainer: "Lena Fischer", day: "Mon", time: "07:30", duration: "45 min", room: "Studio B", booked: 12, capacity: 20, intensity: "Low" },
  { id: "c3", name: "Inferno HIIT", trainer: "Daniyal Reyes", day: "Mon", time: "18:00", duration: "40 min", room: "Main Floor", booked: 22, capacity: 24, intensity: "Extreme" },
  { id: "c4", name: "Power Hour", trainer: "Marcus Cole", day: "Tue", time: "06:00", duration: "60 min", room: "Strength Zone", booked: 10, capacity: 12, intensity: "High" },
  { id: "c5", name: "Spin Surge", trainer: "Priya Nair", day: "Tue", time: "07:00", duration: "45 min", room: "Cycle Studio", booked: 18, capacity: 20, intensity: "High" },
  { id: "c6", name: "BoxFit", trainer: "Daniyal Reyes", day: "Tue", time: "19:00", duration: "50 min", room: "Combat Area", booked: 14, capacity: 16, intensity: "Extreme" },
  { id: "c7", name: "CrossFit WOD", trainer: "Tom Becker", day: "Wed", time: "06:30", duration: "60 min", room: "Rig Zone", booked: 15, capacity: 15, intensity: "Extreme" },
  { id: "c8", name: "Core Crusher", trainer: "Sara Malik", day: "Wed", time: "12:15", duration: "30 min", room: "Studio A", booked: 11, capacity: 18, intensity: "Medium" },
  { id: "c9", name: "Vinyasa Flow", trainer: "Lena Fischer", day: "Wed", time: "18:30", duration: "60 min", room: "Studio B", booked: 17, capacity: 20, intensity: "Low" },
  { id: "c10", name: "Deadlift Club", trainer: "Marcus Cole", day: "Thu", time: "17:30", duration: "75 min", room: "Strength Zone", booked: 9, capacity: 10, intensity: "High" },
  { id: "c11", name: "Spin Surge", trainer: "Priya Nair", day: "Thu", time: "07:00", duration: "45 min", room: "Cycle Studio", booked: 19, capacity: 20, intensity: "High" },
  { id: "c12", name: "Mobility Reset", trainer: "Lena Fischer", day: "Thu", time: "20:00", duration: "40 min", room: "Studio B", booked: 8, capacity: 16, intensity: "Low" },
  { id: "c13", name: "Inferno HIIT", trainer: "Daniyal Reyes", day: "Fri", time: "06:00", duration: "40 min", room: "Main Floor", booked: 24, capacity: 24, intensity: "Extreme" },
  { id: "c14", name: "Iron Strength", trainer: "Sara Malik", day: "Fri", time: "17:00", duration: "60 min", room: "Strength Zone", booked: 15, capacity: 18, intensity: "High" },
  { id: "c15", name: "Olympic Lifting", trainer: "Tom Becker", day: "Sat", time: "09:00", duration: "90 min", room: "Rig Zone", booked: 11, capacity: 12, intensity: "High" },
  { id: "c16", name: "Weekend Warrior", trainer: "Tom Becker", day: "Sat", time: "11:00", duration: "60 min", room: "Main Floor", booked: 20, capacity: 26, intensity: "Medium" },
  { id: "c17", name: "Yin & Restore", trainer: "Lena Fischer", day: "Sun", time: "10:00", duration: "60 min", room: "Studio B", booked: 13, capacity: 18, intensity: "Low" },
  { id: "c18", name: "Open Mat Conditioning", trainer: "Daniyal Reyes", day: "Sun", time: "12:00", duration: "45 min", room: "Main Floor", booked: 9, capacity: 20, intensity: "Medium" },
];

export interface CheckIn {
  id: string;
  member: string;
  code: string;
  time: string;
  method: "QR Scan" | "Front Desk" | "App";
  status: "checked-in" | "denied";
  note?: string;
}

export const todaysCheckIns: CheckIn[] = [
  { id: "a1", member: "Hamza Tariq", code: "GF-1042", time: "06:12", method: "QR Scan", status: "checked-in" },
  { id: "a2", member: "Hira Shahid", code: "GF-1201", time: "06:15", method: "QR Scan", status: "checked-in" },
  { id: "a3", member: "Bilal Ahmed", code: "GF-0871", time: "06:31", method: "QR Scan", status: "checked-in" },
  { id: "a4", member: "Zara Iqbal", code: "GF-1105", time: "07:02", method: "App", status: "checked-in" },
  { id: "a5", member: "Omar Farooq", code: "GF-0764", time: "07:20", method: "QR Scan", status: "denied", note: "Membership expired Nov 09" },
  { id: "a6", member: "Fatima Noor", code: "GF-1029", time: "07:44", method: "QR Scan", status: "checked-in" },
  { id: "a7", member: "Elena Petrova", code: "GF-1187", time: "08:05", method: "Front Desk", status: "checked-in" },
  { id: "a8", member: "Mahnoor Asif", code: "GF-1158", time: "08:26", method: "QR Scan", status: "checked-in" },
  { id: "a9", member: "Ayesha Khan", code: "GF-0987", time: "09:10", method: "QR Scan", status: "checked-in", note: "Expires in 9 days" },
  { id: "a10", member: "Ali Raza", code: "GF-0812", time: "09:32", method: "App", status: "checked-in" },
];
