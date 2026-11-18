export type MemberStatus = "active" | "expiring" | "overdue" | "frozen";

export interface ProgressEntry {
  date: string;
  weightKg: number;
  bodyFat: number;
  note: string;
}

export interface Member {
  id: string;
  code: string;
  name: string;
  initials: string;
  phone: string;
  email: string;
  plan: "Starter" | "Pro" | "Elite" | "Student";
  status: MemberStatus;
  joined: string;
  expiry: string;
  daysLeft: number;
  trainer: string;
  goal: string;
  attendanceRate: number;
  workoutPlan: { focus: string; days: { day: string; session: string }[] };
  dietPlan: { calories: string; protein: string; meals: string[] };
  progress: ProgressEntry[];
}

export const members: Member[] = [
  {
    id: "m1",
    code: "GF-1042",
    name: "Hamza Tariq",
    initials: "HT",
    phone: "+92 321 555 0142",
    email: "hamza.t@example.com",
    plan: "Elite",
    status: "active",
    joined: "Jan 2026",
    expiry: "Jan 18, 2027",
    daysLeft: 62,
    trainer: "Sara Malik",
    goal: "Build lean muscle",
    attendanceRate: 92,
    workoutPlan: {
      focus: "Push / Pull / Legs — hypertrophy block",
      days: [
        { day: "Mon", session: "Push — chest, shoulders, triceps" },
        { day: "Tue", session: "Pull — back, biceps, rear delts" },
        { day: "Thu", session: "Legs — squat focus + calves" },
        { day: "Sat", session: "Upper body pump + core finisher" },
      ],
    },
    dietPlan: {
      calories: "2,850 kcal",
      protein: "185 g protein / day",
      meals: ["High-protein breakfast bowl", "Grilled chicken + rice lunch", "Whey + banana post-workout", "Beef stir-fry dinner"],
    },
    progress: [
      { date: "Aug 2026", weightKg: 78.4, bodyFat: 19.2, note: "Started Elite plan" },
      { date: "Sep 2026", weightKg: 79.6, bodyFat: 18.1, note: "Strength up on all main lifts" },
      { date: "Oct 2026", weightKg: 80.9, bodyFat: 17.0, note: "Added Saturday pump session" },
      { date: "Nov 2026", weightKg: 82.1, bodyFat: 16.2, note: "On track for winter bulk goal" },
    ],
  },
  {
    id: "m2",
    code: "GF-0987",
    name: "Ayesha Khan",
    initials: "AK",
    phone: "+92 300 555 0987",
    email: "ayesha.k@example.com",
    plan: "Pro",
    status: "expiring",
    joined: "Dec 2025",
    expiry: "Nov 27, 2026",
    daysLeft: 9,
    trainer: "Daniyal Reyes",
    goal: "Lose 8 kg sustainably",
    attendanceRate: 84,
    workoutPlan: {
      focus: "Full-body strength + conditioning",
      days: [
        { day: "Mon", session: "Full body A — squat, press, row" },
        { day: "Wed", session: "Conditioning — sled, ropes, bike intervals" },
        { day: "Fri", session: "Full body B — deadlift, lunges, core" },
      ],
    },
    dietPlan: {
      calories: "1,750 kcal",
      protein: "130 g protein / day",
      meals: ["Greek yogurt + berries", "Chicken salad wrap", "Protein smoothie", "Salmon + greens dinner"],
    },
    progress: [
      { date: "Aug 2026", weightKg: 74.8, bodyFat: 31.5, note: "Restarted after summer break" },
      { date: "Sep 2026", weightKg: 72.9, bodyFat: 29.8, note: "Consistent 3x per week" },
      { date: "Oct 2026", weightKg: 71.2, bodyFat: 28.4, note: "Waist down 4 cm" },
      { date: "Nov 2026", weightKg: 70.1, bodyFat: 27.3, note: "Renewal due — reminder sent" },
    ],
  },
  {
    id: "m3",
    code: "GF-0871",
    name: "Bilal Ahmed",
    initials: "BA",
    phone: "+92 333 555 0871",
    email: "bilal.a@example.com",
    plan: "Pro",
    status: "active",
    joined: "Mar 2026",
    expiry: "Mar 04, 2027",
    daysLeft: 107,
    trainer: "Marcus Cole",
    goal: "First powerlifting meet",
    attendanceRate: 96,
    workoutPlan: {
      focus: "Squat / Bench / Deadlift peaking program",
      days: [
        { day: "Mon", session: "Squat heavy + accessories" },
        { day: "Tue", session: "Bench press + upper back" },
        { day: "Thu", session: "Deadlift + posterior chain" },
        { day: "Fri", session: "Bench volume + arms" },
      ],
    },
    dietPlan: {
      calories: "3,200 kcal",
      protein: "200 g protein / day",
      meals: ["Eggs + oats power breakfast", "Double chicken rice box", "Mass shake post-training", "Pasta + lean mince dinner"],
    },
    progress: [
      { date: "Aug 2026", weightKg: 91.0, bodyFat: 18.9, note: "Total at 480 kg" },
      { date: "Sep 2026", weightKg: 92.3, bodyFat: 18.4, note: "Squat PR 180 kg" },
      { date: "Oct 2026", weightKg: 93.1, bodyFat: 18.0, note: "Deadlift PR 210 kg" },
      { date: "Nov 2026", weightKg: 94.0, bodyFat: 17.6, note: "Meet prep starts December" },
    ],
  },
  {
    id: "m4",
    code: "GF-1105",
    name: "Zara Iqbal",
    initials: "ZI",
    phone: "+92 345 555 1105",
    email: "zara.i@example.com",
    plan: "Student",
    status: "active",
    joined: "Jun 2026",
    expiry: "Dec 12, 2026",
    daysLeft: 24,
    trainer: "Lena Fischer",
    goal: "General fitness + mobility",
    attendanceRate: 71,
    workoutPlan: {
      focus: "Strength foundations + mobility",
      days: [
        { day: "Tue", session: "Lower body + mobility flow" },
        { day: "Thu", session: "Upper body + core" },
        { day: "Sun", session: "Yoga + breathwork class" },
      ],
    },
    dietPlan: {
      calories: "2,050 kcal",
      protein: "110 g protein / day",
      meals: ["Oats + fruit", "Lentil soup + chicken", "Fruit + nuts snack", "Balanced home dinner"],
    },
    progress: [
      { date: "Aug 2026", weightKg: 61.5, bodyFat: 26.0, note: "First unassisted pull-up" },
      { date: "Sep 2026", weightKg: 60.8, bodyFat: 25.1, note: "Hip mobility improving" },
      { date: "Oct 2026", weightKg: 60.2, bodyFat: 24.4, note: "Added Sunday yoga" },
      { date: "Nov 2026", weightKg: 59.7, bodyFat: 23.8, note: "Steady, sustainable pace" },
    ],
  },
  {
    id: "m5",
    code: "GF-0764",
    name: "Omar Farooq",
    initials: "OF",
    phone: "+92 312 555 0764",
    email: "omar.f@example.com",
    plan: "Starter",
    status: "overdue",
    joined: "Feb 2026",
    expiry: "Nov 09, 2026",
    daysLeft: -9,
    trainer: "Daniyal Reyes",
    goal: "Get back in shape",
    attendanceRate: 43,
    workoutPlan: {
      focus: "Re-entry program — machines + light cardio",
      days: [
        { day: "Mon", session: "Machine circuit A" },
        { day: "Wed", session: "Zone 2 cardio 30 min" },
        { day: "Fri", session: "Machine circuit B" },
      ],
    },
    dietPlan: {
      calories: "2,200 kcal",
      protein: "140 g protein / day",
      meals: ["Simple protein breakfast", "Office lunch — grilled option", "Casein before bed"],
    },
    progress: [
      { date: "Aug 2026", weightKg: 88.2, bodyFat: 27.5, note: "Attendance dropping" },
      { date: "Sep 2026", weightKg: 87.6, bodyFat: 27.0, note: "Coach check-in call done" },
      { date: "Oct 2026", weightKg: 87.9, bodyFat: 27.2, note: "Missed 3 weeks — travel" },
      { date: "Nov 2026", weightKg: 88.4, bodyFat: 27.6, note: "Payment overdue — follow-up scheduled" },
    ],
  },
  {
    id: "m6",
    code: "GF-1029",
    name: "Fatima Noor",
    initials: "FN",
    phone: "+92 301 555 1029",
    email: "fatima.n@example.com",
    plan: "Elite",
    status: "active",
    joined: "Jan 2026",
    expiry: "Jan 30, 2027",
    daysLeft: 74,
    trainer: "Sara Malik",
    goal: "Marathon cross-training",
    attendanceRate: 89,
    workoutPlan: {
      focus: "Strength for runners + injury prevention",
      days: [
        { day: "Tue", session: "Single-leg strength + plyometrics" },
        { day: "Thu", session: "Posterior chain + core stability" },
        { day: "Sat", session: "Mobility + prehab circuit" },
      ],
    },
    dietPlan: {
      calories: "2,400 kcal",
      protein: "135 g protein / day",
      meals: ["Carb-loaded pre-run breakfast", "Balanced lunch bowl", "Recovery smoothie", "Protein-rich dinner"],
    },
    progress: [
      { date: "Aug 2026", weightKg: 58.9, bodyFat: 20.4, note: "Half marathon PB 1:52" },
      { date: "Sep 2026", weightKg: 58.4, bodyFat: 19.8, note: "No knee pain this block" },
      { date: "Oct 2026", weightKg: 58.1, bodyFat: 19.3, note: "Strength numbers climbing" },
      { date: "Nov 2026", weightKg: 57.8, bodyFat: 18.9, note: "Full marathon prep begins" },
    ],
  },
  {
    id: "m7",
    code: "GF-0933",
    name: "Usman Ghani",
    initials: "UG",
    phone: "+92 322 555 0933",
    email: "usman.g@example.com",
    plan: "Pro",
    status: "frozen",
    joined: "Apr 2026",
    expiry: "Apr 15, 2027",
    daysLeft: 149,
    trainer: "Marcus Cole",
    goal: "Hypertrophy — paused for travel",
    attendanceRate: 0,
    workoutPlan: {
      focus: "Upper / lower split (on hold)",
      days: [
        { day: "Mon", session: "Upper A" },
        { day: "Wed", session: "Lower A" },
        { day: "Fri", session: "Upper B" },
      ],
    },
    dietPlan: {
      calories: "Maintenance while frozen",
      protein: "160 g protein / day",
      meals: ["Flexible — maintenance guidelines sent"],
    },
    progress: [
      { date: "Aug 2026", weightKg: 84.6, bodyFat: 16.8, note: "Best block so far" },
      { date: "Sep 2026", weightKg: 85.8, bodyFat: 16.1, note: "Requested freeze from October" },
      { date: "Oct 2026", weightKg: 85.5, bodyFat: 16.3, note: "Membership frozen — travel" },
      { date: "Nov 2026", weightKg: 85.2, bodyFat: 16.5, note: "Returns December 10" },
    ],
  },
  {
    id: "m8",
    code: "GF-1158",
    name: "Mahnoor Asif",
    initials: "MA",
    phone: "+92 346 555 1158",
    email: "mahnoor.a@example.com",
    plan: "Pro",
    status: "active",
    joined: "Jul 2026",
    expiry: "Jan 08, 2027",
    daysLeft: 52,
    trainer: "Lena Fischer",
    goal: "Strength + posture correction",
    attendanceRate: 88,
    workoutPlan: {
      focus: "Strength basics + postural work",
      days: [
        { day: "Mon", session: "Goblet squat progression + rows" },
        { day: "Wed", session: "Hip hinge + carries" },
        { day: "Fri", session: "Press + postural circuit" },
      ],
    },
    dietPlan: {
      calories: "1,950 kcal",
      protein: "125 g protein / day",
      meals: ["Protein oats", "Chicken + quinoa bowl", "Skyr + berries", "Veg + paneer dinner"],
    },
    progress: [
      { date: "Aug 2026", weightKg: 66.3, bodyFat: 28.9, note: "Form foundations set" },
      { date: "Sep 2026", weightKg: 65.4, bodyFat: 27.9, note: "Deadlift 70 kg with clean form" },
      { date: "Oct 2026", weightKg: 64.6, bodyFat: 27.0, note: "Posture visibly improved" },
      { date: "Nov 2026", weightKg: 63.9, bodyFat: 26.2, note: "Moving to barbell program" },
    ],
  },
  {
    id: "m9",
    code: "GF-0812",
    name: "Ali Raza",
    initials: "AR",
    phone: "+92 333 555 0812",
    email: "ali.r@example.com",
    plan: "Starter",
    status: "expiring",
    joined: "Nov 2025",
    expiry: "Nov 24, 2026",
    daysLeft: 6,
    trainer: "Daniyal Reyes",
    goal: "Consistency first",
    attendanceRate: 64,
    workoutPlan: {
      focus: "3-day full body beginner progression",
      days: [
        { day: "Mon", session: "Full body — machines + dumbbells" },
        { day: "Wed", session: "Full body — cables + bodyweight" },
        { day: "Sat", session: "Optional cardio + core" },
      ],
    },
    dietPlan: {
      calories: "2,350 kcal",
      protein: "150 g protein / day",
      meals: ["Eggs + toast", "Work canteen — protein first", "Whey shake evenings"],
    },
    progress: [
      { date: "Aug 2026", weightKg: 79.8, bodyFat: 23.4, note: "Two sessions a week average" },
      { date: "Sep 2026", weightKg: 79.1, bodyFat: 22.8, note: "Habit streak: 12 days" },
      { date: "Oct 2026", weightKg: 78.5, bodyFat: 22.1, note: "Considering Pro upgrade" },
      { date: "Nov 2026", weightKg: 78.0, bodyFat: 21.6, note: "Renewal conversation booked" },
    ],
  },
  {
    id: "m10",
    code: "GF-1201",
    name: "Hira Shahid",
    initials: "HS",
    phone: "+92 300 555 1201",
    email: "hira.s@example.com",
    plan: "Elite",
    status: "active",
    joined: "Sep 2026",
    expiry: "Mar 02, 2027",
    daysLeft: 104,
    trainer: "Sara Malik",
    goal: "Athletic performance",
    attendanceRate: 94,
    workoutPlan: {
      focus: "Athletic power + sprint mechanics",
      days: [
        { day: "Mon", session: "Power cleans + jumps" },
        { day: "Wed", session: "Sprint mechanics + sled" },
        { day: "Fri", session: "Strength — trap bar + split squats" },
      ],
    },
    dietPlan: {
      calories: "2,600 kcal",
      protein: "160 g protein / day",
      meals: ["Athlete breakfast plate", "Rice + chicken power lunch", "Pre-session carbs", "Recovery dinner + shake"],
    },
    progress: [
      { date: "Sep 2026", weightKg: 63.0, bodyFat: 19.5, note: "Baseline testing complete" },
      { date: "Oct 2026", weightKg: 63.6, bodyFat: 18.8, note: "Vertical jump +4 cm" },
      { date: "Nov 2026", weightKg: 64.1, bodyFat: 18.2, note: "10 m sprint time down 0.08 s" },
    ],
  },
  {
    id: "m11",
    code: "GF-0749",
    name: "Shayan Mirza",
    initials: "SM",
    phone: "+92 315 555 0749",
    email: "shayan.m@example.com",
    plan: "Student",
    status: "overdue",
    joined: "May 2026",
    expiry: "Nov 02, 2026",
    daysLeft: -16,
    trainer: "Marcus Cole",
    goal: "Build strength on a budget",
    attendanceRate: 52,
    workoutPlan: {
      focus: "Barbell basics — linear progression",
      days: [
        { day: "Tue", session: "Squat + bench + row" },
        { day: "Thu", session: "Deadlift + press + pull-ups" },
      ],
    },
    dietPlan: {
      calories: "2,700 kcal",
      protein: "155 g protein / day",
      meals: ["Budget protein breakfast", "Hostel-friendly lunch plan", "Milk + whey shake"],
    },
    progress: [
      { date: "Aug 2026", weightKg: 68.4, bodyFat: 15.9, note: "Bench at bodyweight" },
      { date: "Sep 2026", weightKg: 69.8, bodyFat: 15.5, note: "Great progress block" },
      { date: "Oct 2026", weightKg: 70.5, bodyFat: 15.2, note: "Exams — attendance dipped" },
      { date: "Nov 2026", weightKg: 70.9, bodyFat: 15.0, note: "Payment overdue — student plan grace" },
    ],
  },
  {
    id: "m12",
    code: "GF-1187",
    name: "Elena Petrova",
    initials: "EP",
    phone: "+92 341 555 1187",
    email: "elena.p@example.com",
    plan: "Pro",
    status: "active",
    joined: "Aug 2026",
    expiry: "Feb 14, 2027",
    daysLeft: 89,
    trainer: "Lena Fischer",
    goal: "Yoga + strength balance",
    attendanceRate: 81,
    workoutPlan: {
      focus: "Strength 2x + yoga 2x hybrid",
      days: [
        { day: "Mon", session: "Strength — lower body" },
        { day: "Tue", session: "Vinyasa yoga class" },
        { day: "Thu", session: "Strength — upper body" },
        { day: "Sat", session: "Yin yoga + mobility" },
      ],
    },
    dietPlan: {
      calories: "2,000 kcal",
      protein: "115 g protein / day",
      meals: ["Smoothie bowl", "Buddha bowl lunch", "Protein snack", "Light balanced dinner"],
    },
    progress: [
      { date: "Aug 2026", weightKg: 59.2, bodyFat: 24.6, note: "Joined with hybrid goal" },
      { date: "Sep 2026", weightKg: 58.7, bodyFat: 23.9, note: "First crow pose hold" },
      { date: "Oct 2026", weightKg: 58.3, bodyFat: 23.2, note: "Squat depth improved" },
      { date: "Nov 2026", weightKg: 57.9, bodyFat: 22.6, note: "Loving the hybrid split" },
    ],
  },
];

export const memberStats = {
  total: 486,
  activeToday: 132,
  newThisMonth: 38,
  churnRisk: 11,
};
