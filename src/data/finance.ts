export type PaymentStatus = "paid" | "pending" | "overdue";

export interface Payment {
  id: string;
  member: string;
  code: string;
  plan: string;
  amount: number;
  method: "Card" | "Bank Transfer" | "Cash" | "—";
  dueDate: string;
  paidDate?: string;
  status: PaymentStatus;
  receipt: boolean;
}

export const payments: Payment[] = [
  { id: "p1", member: "Hamza Tariq", code: "GF-1042", plan: "Elite — Annual", amount: 899, method: "Card", dueDate: "Nov 01, 2026", paidDate: "Nov 01, 2026", status: "paid", receipt: true },
  { id: "p2", member: "Fatima Noor", code: "GF-1029", plan: "Elite — Annual", amount: 899, method: "Bank Transfer", dueDate: "Nov 03, 2026", paidDate: "Nov 02, 2026", status: "paid", receipt: true },
  { id: "p3", member: "Bilal Ahmed", code: "GF-0871", plan: "Pro — Monthly", amount: 89, method: "Card", dueDate: "Nov 05, 2026", paidDate: "Nov 05, 2026", status: "paid", receipt: true },
  { id: "p4", member: "Ayesha Khan", code: "GF-0987", plan: "Pro — Monthly", amount: 89, method: "—", dueDate: "Nov 27, 2026", status: "pending", receipt: false },
  { id: "p5", member: "Omar Farooq", code: "GF-0764", plan: "Starter — Monthly", amount: 49, method: "—", dueDate: "Nov 09, 2026", status: "overdue", receipt: false },
  { id: "p6", member: "Mahnoor Asif", code: "GF-1158", plan: "Pro — Monthly", amount: 89, method: "Cash", dueDate: "Nov 08, 2026", paidDate: "Nov 08, 2026", status: "paid", receipt: true },
  { id: "p7", member: "Shayan Mirza", code: "GF-0749", plan: "Student — Monthly", amount: 39, method: "—", dueDate: "Nov 02, 2026", status: "overdue", receipt: false },
  { id: "p8", member: "Hira Shahid", code: "GF-1201", plan: "Elite — Quarterly", amount: 269, method: "Card", dueDate: "Nov 10, 2026", paidDate: "Nov 09, 2026", status: "paid", receipt: true },
  { id: "p9", member: "Zara Iqbal", code: "GF-1105", plan: "Student — Monthly", amount: 39, method: "Bank Transfer", dueDate: "Nov 12, 2026", paidDate: "Nov 12, 2026", status: "paid", receipt: true },
  { id: "p10", member: "Ali Raza", code: "GF-0812", plan: "Starter — Monthly", amount: 49, method: "—", dueDate: "Nov 24, 2026", status: "pending", receipt: false },
  { id: "p11", member: "Elena Petrova", code: "GF-1187", plan: "Pro — Monthly", amount: 89, method: "Card", dueDate: "Nov 14, 2026", paidDate: "Nov 13, 2026", status: "paid", receipt: true },
  { id: "p12", member: "Usman Ghani", code: "GF-0933", plan: "Pro — Frozen", amount: 0, method: "—", dueDate: "—", status: "pending", receipt: false },
];

export const revenueSeries = [
  { month: "Dec", revenue: 11240, members: 402 },
  { month: "Jan", revenue: 12890, members: 418 },
  { month: "Feb", revenue: 12310, members: 421 },
  { month: "Mar", revenue: 13980, members: 433 },
  { month: "Apr", revenue: 14250, members: 440 },
  { month: "May", revenue: 15120, members: 452 },
  { month: "Jun", revenue: 14780, members: 449 },
  { month: "Jul", revenue: 15640, members: 461 },
  { month: "Aug", revenue: 16420, members: 470 },
  { month: "Sep", revenue: 17180, members: 477 },
  { month: "Oct", revenue: 17960, members: 483 },
  { month: "Nov", revenue: 18640, members: 486 },
];

export const weeklyAttendance = [
  { day: "Mon", checkins: 148 },
  { day: "Tue", checkins: 132 },
  { day: "Wed", checkins: 156 },
  { day: "Thu", checkins: 141 },
  { day: "Fri", checkins: 118 },
  { day: "Sat", checkins: 164 },
  { day: "Sun", checkins: 96 },
];

/** Peak-hours heatmap: rows = days, cols = 6a..9p blocks, value 0..1 */
export const peakHeatmap: { day: string; cells: number[] }[] = [
  { day: "Mon", cells: [0.9, 0.55, 0.3, 0.45, 0.85, 1.0, 0.7] },
  { day: "Tue", cells: [0.8, 0.5, 0.28, 0.4, 0.8, 0.92, 0.62] },
  { day: "Wed", cells: [0.95, 0.6, 0.35, 0.5, 0.88, 1.0, 0.74] },
  { day: "Thu", cells: [0.85, 0.52, 0.3, 0.42, 0.82, 0.9, 0.66] },
  { day: "Fri", cells: [0.88, 0.48, 0.26, 0.38, 0.7, 0.78, 0.5] },
  { day: "Sat", cells: [0.45, 0.85, 1.0, 0.9, 0.55, 0.4, 0.3] },
  { day: "Sun", cells: [0.3, 0.6, 0.75, 0.65, 0.4, 0.3, 0.22] },
];
export const heatmapHours = ["6a", "8a", "10a", "12p", "3p", "6p", "8p"];

export const financeSummary = {
  mrr: 18640,
  mrrGrowth: 12.4,
  collectedThisMonth: 15230,
  pendingAmount: 178,
  overdueAmount: 88,
  overdueCount: 2,
};
