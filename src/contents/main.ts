import { Flame, HeartPulse, LucideIcon, Music, Repeat } from "lucide-react";
import aerobicsImage from "../assets/gallery/photo_2025-02-17_14-22-58.jpg";
import circuitImage from "../assets/gallery/photo_2025-02-17_14-22-08.jpg";
import danceFitnessImage from "../assets/gallery/photo_2025-02-17_14-22-53.jpg";
import crossFitImage from "../assets/gallery/photo_2025-02-17_14-23-03.jpg";
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
    image: circuitImage,
    icon: Repeat,
    title: "Circuit",
    description:
      "Engage in high-intensity full-body workouts for endurance and strength.",
  },
  {
    image: danceFitnessImage,
    icon: Music,
    title: "Dance Fitness",
    description:
      "Stay fit with fun and energetic dance-based workout sessions.",
  },
  {
    image: crossFitImage,
    icon: Flame,
    title: "Cross Fit",
    description:
      "Push your limits with dynamic and functional high-intensity training.",
  },
  {
    image: aerobicsImage,
    icon: HeartPulse,
    title: "Aerobics",
    description: "Boost stamina and burn calories with high-energy workouts.",
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
export const stat: { stat: string; info: string }[] = [
  {
    stat: "20K+",
    info: "Socail Media Followers",
  },
  {
    stat: "10+",
    info: "Years Of Experience",
  },
  {
    stat: "2",
    info: "Branches",
  },
  {
    stat: "7+",
    info: "Experienced Trainers",
  },
];
