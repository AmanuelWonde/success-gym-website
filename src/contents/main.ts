import { Flame, HeartPulse, LucideIcon, Music, Repeat } from "lucide-react";
import aerobicsImage from "../assets/gallery/photo_2025-02-17_14-22-58.jpg";
import circuitImage from "../assets/gallery/photo_2025-02-17_14-22-08.jpg";
import danceFitnessImage from "../assets/gallery/photo_2025-02-17_14-22-53.jpg";
import crossFitImage from "../assets/cross-fit.jpg";

import biniPhoto from "../assets/trainers/biniyam.jpg";
import fasikaPhoto from "../assets/trainers/fasika.jpg";
import sisayPhoto from "../assets/trainers/sisay.jpg";
import ermiyasPhoto from "../assets/trainers/ermiyas.jpg";
import kenediPhoto from "../assets/trainers/kenedi.jpg";
import nahomPhoto from "../assets/trainers/nahom.jpg";
import natnaelPhoto from "../assets/trainers/natnael.jpg";
import demsPhoto from "../assets/trainers/dems.jpg";

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
    stat: "8+",
    info: "Experienced Trainers",
  },
];

export const trainers: { name: string; about: string; image: string }[] = [
  {
    name: "Coach Biniyam Nega",
    about:
      "Biniyam Nega, a highly experienced gym trainer with 10 years of expertise, has transformed hundreds of lives through personalized fitness programs. He has worked alongside international trainers, bringing global techniques to his training methods. 💪🔥",
    image: biniPhoto,
  },
  {
    name: "Coach Fasika",
    about:
      "Coach Fasika is a dedicated fitness trainer known for his structured workout programs and commitment to helping clients reach their peak performance. With years of experience, he has guided many individuals to achieve their fitness goals through discipline and tailored training. 🏋️‍♂️🔥",
    image: fasikaPhoto,
  },
  {
    name: "Coach Ermiyas Tades",
    about:
      "Coach Ermiyas Tades is an inspiring fitness trainer who transformed his own life by overcoming obesity. His journey from struggling with weight to becoming a top fitness coach serves as a powerful example for many. He specializes in weight loss programs and strength training. 💪🏆",
    image: ermiyasPhoto,
  },
  {
    name: "Coach Sisay Azmeraw",
    about:
      "Coach Sisay Azmeraw brings a wealth of experience in strength training and endurance workouts. He is passionate about pushing his clients beyond their limits, helping them build both physical and mental toughness. 🏆🔥",
    image: sisayPhoto,
  },
  {
    name: "Coach Nahom Ketema",
    about:
      "Coach Nahom Ketema is a performance-driven trainer with expertise in muscle building and athletic conditioning. His personalized training programs help individuals achieve optimal fitness levels while focusing on proper technique and injury prevention. 🏋️‍♂️🏅",
    image: nahomPhoto,
  },
  {
    name: "Coach Kenedi Grema",
    about:
      "Coach Kenedi Grema is known for his dynamic training sessions that combine functional fitness, agility drills, and strength training. His high-energy approach keeps clients motivated and engaged throughout their fitness journey. 🔥💪",
    image: kenediPhoto,
  },
  {
    name: "Coach Natnael Assefa",
    about:
      "Coach Natnael Assefa is a well-rounded fitness expert specializing in endurance training and body sculpting. His client-centered coaching style helps individuals gain confidence, build strength, and maintain a healthy lifestyle. 🏃‍♂️💯",
    image: natnaelPhoto,
  },
  {
    name: "Coach Dems",
    about:
      "Coach Dems is a dedicated fitness professional with a strong focus on functional training and mobility exercises. He believes in holistic fitness, ensuring his clients not only look strong but also feel agile and energetic in their daily lives. 💪⚡",
    image: demsPhoto,
  },
];
