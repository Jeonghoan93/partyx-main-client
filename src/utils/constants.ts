import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This Event is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This Event is has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This Event is modern!",
  },
  {
    label: "Countryside",
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
    label: "Lake",
    icon: GiBoatFishing,
    description: "This Event is near a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This Event has skiing activies!",
  },
  {
    label: "Castles",
    icon: GiCastle,
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
    label: "Arctic",
    icon: BsSnow,
    description: "This Event is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This Event is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This Event is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This Event is brand new and luxurious!",
  },
];
