import { CiBeerMugFull } from "react-icons/ci";
import { FaBuildingFlag, FaPeopleRobbery } from "react-icons/fa6";
import {
  GiCaveEntrance,
  GiFamilyHouse,
  GiForestCamp,
  GiIsland,
  GiSpaceSuit,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdFestival, MdOutlineVilla, MdSportsHandball } from "react-icons/md";
import { TbMountain, TbPool } from "react-icons/tb";

export const categories = [
  {
    label: "Clubs",
    icon: FaBuildingFlag,
    description: "This Event is at festival!",
  },
  {
    label: "House",
    icon: GiFamilyHouse,
    description: "This Event is at house!",
  },
  {
    label: "Festivals",
    icon: MdFestival,
    description: "This Event is at festival!",
  },
  {
    label: "Rave",
    icon: MdOutlineVilla,
    description: "This Event is modern!",
  },
  {
    label: "Outdoors",
    icon: TbMountain,
    description: "This Event is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is Event has a beautiful pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This Event is on an island!",
  },
  {
    label: "Dance",
    icon: FaPeopleRobbery,
    description: "This Event is near a lake!",
  },
  {
    label: "Costume",
    icon: GiSpaceSuit,
    description: "This Event has skiing activies!",
  },
  {
    label: "Pub",
    icon: CiBeerMugFull,
    description: "This Event is an ancient castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This Event is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This Event offers camping activities!",
  },
  {
    label: "Sports",
    icon: MdSportsHandball,
    description: "This Event is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This Event is brand new and luxurious!",
  },
];
