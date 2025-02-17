import type { Photo } from "react-photo-album";
import p1 from "../assets/gallery/photo_2025-02-17_14-21-46.jpg";
import p2 from "../assets/gallery/photo_2025-02-17_14-21-58.jpg";
import p3 from "../assets/gallery/photo_2025-02-17_14-22-03.jpg";
import p4 from "../assets/gallery/photo_2025-02-17_14-22-08.jpg";
import p5 from "../assets/gallery/photo_2025-02-17_14-22-13.jpg";
import p6 from "../assets/gallery/photo_2025-02-17_14-22-18.jpg";
import p7 from "../assets/gallery/photo_2025-02-17_14-22-23.jpg";
import p8 from "../assets/gallery/photo_2025-02-17_14-22-40.jpg";
import p9 from "../assets/gallery/photo_2025-02-17_14-22-44.jpg";
import p10 from "../assets/gallery/photo_2025-02-17_14-22-49.jpg";
import p11 from "../assets/gallery/photo_2025-02-17_14-22-53.jpg";
import p12 from "../assets/gallery/photo_2025-02-17_14-22-58.jpg";
import p13 from "../assets/gallery/photo_2025-02-17_14-23-03.jpg";
import p14 from "../assets/gallery/photo_2025-02-17_14-23-10.jpg";
import p15 from "../assets/gallery/photo_2025-02-17_14-23-14.jpg";
import p16 from "../assets/gallery/photo_2025-02-17_14-23-18.jpg";
import p17 from "../assets/gallery/photo_2025-02-17_14-23-22.jpg";
import p18 from "../assets/gallery/photo_2025-02-17_14-23-33.jpg";
import p19 from "../assets/gallery/photo_2025-02-17_14-23-37.jpg";
import p20 from "../assets/gallery/photo_2025-02-17_14-23-41.jpg";
import p21 from "../assets/gallery/photo_2025-02-17_14-23-46.jpg";
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photos = [
  {
    asset: p12,
    width: 1080,
    height: 780,
    alt: "Hiking boots",
  },
  {
    asset: p2,
    width: 1080,
    height: 1620,
    alt: "Purple petaled flowers near a mountain",
  },
  {
    asset: p3,
    width: 1080,
    height: 720,
    alt: "A person pointing at a beige map",
  },
  {
    asset: p4,
    width: 1080,
    height: 720,
    alt: "Two hikers walking toward a snow-covered mountain",
  },
  {
    asset: p5,
    width: 1080,
    height: 1620,
    alt: "A silver and black coffee mug on a brown wooden table",
  },
  {
    asset: p6,
    width: 1080,
    height: 607,
    alt: "A worm's eye view of trees at night",
  },
  {
    asset: p7,
    width: 1080,
    height: 608,
    alt: "A pine tree forest near a mountain at sunset",
  },
  {
    asset: p8,
    width: 1080,
    height: 720,
    alt: "Silhouette photo of three hikers near tall trees",
  },
  {
    asset: p9,
    width: 1080,
    height: 1549,
    alt: "A person sitting near a bonfire surrounded by trees",
  },
  {
    asset: p10,
    width: 1080,
    height: 720,
    alt: "Green moss on gray rocks in a river",
  },
  {
    asset: p11,
    width: 1080,
    height: 694,
    alt: "Landscape photography of mountains",
  },
  {
    asset: p1,
    width: 1080,
    height: 1620,
    alt: "A pathway between green trees during daytime",
  },
  {
    asset: p13,
    width: 1080,
    height: 720,
    alt: "A man wearing a black jacket and backpack standing on a grass field during sunset",
  },
  {
    asset: p14,
    width: 1080,
    height: 1440,
    alt: "Green pine trees under white clouds during the daytime",
  },
  {
    asset: p15,
    width: 1080,
    height: 1620,
    alt: "A hiker sitting near the cliff",
  },
  {
    asset: p16,
    width: 1080,
    height: 810,
    alt: "A tall mountain with a waterfall running down its side",
  },
  {
    asset: p17,
    width: 1080,
    height: 595,
    alt: "Blue mountains",
  },
  {
    asset: p18,
    width: 1080,
    height: 960,
    alt: "Green trees on a brown mountain under a blue sky during the daytime",
  },
  {
    asset: p19,
    width: 1080,
    height: 810,
    alt: "A red flower on a green grass field during the daytime",
  },
  {
    asset: p20,
    width: 1080,
    height: 720,
    alt: "A sign warning people not to disturb nature",
  },
  {
    asset: p21,
    width: 1080,
    height: 1440,
    alt: "A small creek in Yosemite National Park",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: asset,
      alt,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: asset,
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    } as Photo)
);

export default photos;
