"use client"
import { TbBeach, TbMountain, TbPool } from "react-icons/tb"
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi"
import { MdOutlineVilla } from 'react-icons/md'
import { FaSkiing } from "react-icons/fa"
import { BsSnow } from "react-icons/bs"
import { IoDiamond } from "react-icons/io5"

import Container from "../container";
import CategoryBox from "./category-box";
import { useSearchParams, usePathname } from "next/navigation";

export const categories = [
    {
      label : "Beach",
      icon : TbBeach,
      description : "Beach"
    },
    {
      label : "Windmills",
      icon : GiWindmill,
      description : "Windmill"
    },
    {
      label : "Modern",
      icon : MdOutlineVilla,
      description : "Modern"
    },
    {
      label : "Countryside",
      icon : TbMountain,
      description : "Countryside"
    },
    {
      label : "Pools",
      icon : TbPool,
      description : "pool"
    },
    {
      label : "Islands",
      icon : GiIsland,
      description : "islands"
    },
    {
      label : "Lake",
      icon : GiBoatFishing,
      description : "lake"
    },
    {
      label : "Skiing",
      icon : FaSkiing,
      description : "skiing"
    },
    {
      label : "Castles",
      icon : GiCastle,
      description : "castle"
    },
    {
      label : "Camping",
      icon : GiForestCamp,
      description : "camping"
    },
    {
      label : "Arctic",
      icon : BsSnow,
      description : "arctic"
    },
    {
      label : "Cave",
      icon : GiCaveEntrance,
      description : "cave"
    },
    {
      label : "Desert",
      icon : GiCactus,
      description : "desert"
    },
    {
      label : "Barns",
      icon : GiBarn,
      description : "barn"
    },
    {
      label : "Lux",
      icon : IoDiamond,
      description : "luxuries"
    },
]

const Categories = () => {

  const params = useSearchParams();

  const category = params?.get('category')
  const pathname = usePathname();
  const isMainPage = pathname === '/'

  if(!isMainPage) {
    return null
  }
  
    return ( 
        <Container>
          <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
            {categories.map((item) => (
                <CategoryBox
                  key={item.label}
                  label={item.label}
                  selected={category === item.label}
                  icon={item.icon}
                />
            ))}
          </div>
        </Container>
     );
}
 
export default Categories;