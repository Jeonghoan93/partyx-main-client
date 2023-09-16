import { IconType } from "react-icons";
import { AiOutlineCrown, AiOutlineFire, AiOutlineHome } from "react-icons/ai";
import {
  BsFillPeopleFill,
  BsLightningCharge,
  BsMusicNoteBeamed,
} from "react-icons/bs";
import { FaBuilding, FaMask } from "react-icons/fa";
import { GiForestCamp, GiPentacle } from "react-icons/gi";
import { HiOutlineSparkles } from "react-icons/hi";
import { IoMdBeer } from "react-icons/io";
import { MdFestival, MdOutdoorGrill, MdSportsHandball } from "react-icons/md";
import {
  RiGamepadLine,
  RiInkBottleLine,
  RiMovie2Line,
  RiSearchLine,
} from "react-icons/ri";

import { SiBytedance } from "react-icons/si";

export type Category = {
  label: string;
  icon: IconType;
  description: string;
};

export const categories: Category[] = [
  {
    label: "Trending",
    icon: AiOutlineFire,
    description: "Stay in the trend with this event!",
  },
  {
    label: "Now",
    icon: BsLightningCharge,
    description: "Happening now!",
  },
  {
    label: "New",
    icon: HiOutlineSparkles,
    description: "New in town!",
  },
  {
    label: "Clubs",
    icon: FaBuilding,
    description: "Event in a lively club setting!",
  },
  {
    label: "House",
    icon: AiOutlineHome,
    description: "Homey event vibes!",
  },
  {
    label: "Festivals",
    icon: MdFestival,
    description: "Feel the festival spirit!",
  },
  {
    label: "Rave",
    icon: BsMusicNoteBeamed,
    description: "Dance to the beat!",
  },

  {
    label: "Outdoor",
    icon: MdOutdoorGrill,
    description: "Experience the great outdoors!",
  },
  {
    label: "Hangout",
    icon: BsFillPeopleFill,
    description: "Chill and hang out!",
  },
  {
    label: "Dance",
    icon: SiBytedance,
    description: "Move to the rhythm!",
  },
  {
    label: "Costume",
    icon: FaMask,
    description: "Show up in your best costume!",
  },
  {
    label: "Pub",
    icon: IoMdBeer,
    description: "Relax with some brews!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "Become one with nature!",
  },
  {
    label: "Sports",
    icon: MdSportsHandball,
    description: "Get sporty and active!",
  },
  {
    label: "Lux",
    icon: AiOutlineCrown,
    description: "A touch of luxury!",
  },
  {
    label: "Mystery",
    icon: GiPentacle,
    description: "Unravel the event's secrets!",
  },
  {
    label: "Beach",
    icon: RiSearchLine,
    description: "Soak up the sun on the beach!",
  },
  {
    label: "Movie",
    icon: RiMovie2Line,
    description: "Watch top movies under the stars!",
  },
  {
    label: "Gaming",
    icon: RiGamepadLine,
    description: "Engage in thrilling game battles!",
  },
  {
    label: "Wine",
    icon: RiInkBottleLine,
    description: "Savor the finest wines!",
  },
];
