export interface Plan {
  name: string;
  monthly: number;
  tagline: string;
  features: string[];
  highlighted?: boolean;
}

export const plans: Plan[] = [
  {
    name: "Starter",
    monthly: 49,
    tagline: "For gyms getting organised",
    features: [
      "Up to 150 members",
      "Member directory & plans",
      "Class schedule grid",
      "Manual check-in log",
      "Payment records",
    ],
  },
  {
    name: "Pro",
    monthly: 89,
    tagline: "For growing studios",
    highlighted: true,
    features: [
      "Up to 600 members",
      "QR attendance + member app codes",
      "Workout & diet plan builder",
      "Revenue analytics & heatmaps",
      "Expiry reminders & follow-ups",
      "Receipt uploads & exports",
    ],
  },
  {
    name: "Elite",
    monthly: 149,
    tagline: "For multi-branch operators",
    features: [
      "Unlimited members & branches",
      "Trainer performance analytics",
      "Freeze / pause memberships",
      "Priority support",
      "Custom branding",
    ],
  },
];

export const dashboardStats = [
  { label: "Active Members", value: "486", delta: "+38 this month", trend: "up" },
  { label: "Monthly Revenue", value: "$18,640", delta: "+12.4% vs Oct", trend: "up" },
  { label: "Check-ins Today", value: "132", delta: "Peak 6–8 PM expected", trend: "flat" },
  { label: "Expiring in 14 Days", value: "17", delta: "4 already renewed", trend: "warn" },
] as const;

export const expiringSoon = [
  { name: "Ali Raza", plan: "Starter", expiry: "Nov 24", days: 6 },
  { name: "Ayesha Khan", plan: "Pro", expiry: "Nov 27", days: 9 },
  { name: "Zara Iqbal", plan: "Student", expiry: "Dec 12", days: 24 },
];

export const landingStats = [
  { value: "486", label: "Active members tracked" },
  { value: "132", label: "Check-ins today" },
  { value: "$18.6k", label: "Revenue this month" },
  { value: "98.2%", label: "Payments collected on time" },
];
