"use client"
import { TbBeach } from "react-icons/tb"
import { GiWindmill } from "react-icons/gi"
import { MdOutlineVilla } from 'react-icons/md'

import Container from "../container";
import CategoryBox from "./category-box";

export const categories = [
    {
        label : "Пляж",
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
    }
]

const Categories = () => {
    return ( 
        <Container>
          <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
            {categories.map((item) => (
                <CategoryBox
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                />
            ))}
          </div>
        </Container>
     );
}
 
export default Categories;