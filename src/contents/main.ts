import {
  Dumbbell,
  HeartPulse,
  LucideIcon,
  MinusCircle,
  ShieldCheck,
} from "lucide-react";

export const prices: {
  period: string;
  price: string;
  includedServices: string[];
}[] = [];

export const programs: {
  image: string;
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    image: "/src/assets/strength-training.jpg",
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build muscle and enhance endurance with expert guidance.",
  },
  {
    image: "/src/assets/body-building.jpg",
    icon: MinusCircle,
    title: "Body Building",
    description:
      "Sculpt your physique with professional bodybuilding routines.",
  },
  {
    image: "/src/assets/aerobics.webp",
    icon: HeartPulse,
    title: "Aerobics",
    description: "Boost stamina and burn calories with high-energy workouts.",
  },
  {
    image: "/src/assets/karate.webp",
    icon: ShieldCheck,
    title: "Taekwondo",
    description: "Master self-defense techniques with disciplined training.",
  },
];

export const qualities: { title: string; description: string }[] = [
  {
    title: "Full of Gym Accessories",
    description: "Equipped with the latest machines and free weights.",
  },
  {
    title: "Clean Showers",
    description: "Hygienic and well-maintained showers for a fresh experience.",
  },
  {
    title: "Steam Room",
    description: "Relax and detox in our high-quality steam rooms.",
  },
  {
    title: "Experienced Trainers",
    description: "Get expert guidance from certified fitness professionals.",
  },
];
