import React from "react";
import { HiOutlineStar, HiStar, HiUserGroup } from "react-icons/hi";
import {AiOutlineStar} from "react-icons/ai";
import {RiGitRepositoryFill} from "react-icons/ri";
import Cards from "./Cards";

export default function AboutCards() {
  return (
    <div className="container mx-auto grid lg:grid-cols-12 gap-6 relative -top-20 px-2">
      <Cards
        title={"300+ Contributors"}
        text={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi
        omnis quod eos ratione beatae tempora non velit fugiat nesciunt cumque
        tenetur quae esse architecto est debitis, praesentium quisquam
        distinctio mollitia et libero aperiam repudiandae dolorem? Voluptatum
        quod sed dolore fuga est atque, consectetur, `}
        style="rounded-tr-none col-span-12 xl:!col-span-4 "
      >
        <HiUserGroup className="text-8xl mx-auto opacity-90" />
      </Cards>
      <Cards
        title={"200+ Stars"}
        text={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi
        omnis quod eos ratione beatae tempora non velit fugiat nesciunt cumque
        tenetur quae esse architecto est debitis, praesentium quisquam
        distinctio mollitia et libero aperiam repudiandae dolorem? Voluptatum
        quod sed dolore fuga est atque, consectetur, `}
        style="rounded-tl-none col-span-12 sm:col-span-6 xl:!col-span-3"
      >
        <AiOutlineStar className="text-8xl mx-auto opacity-90" />
      </Cards>
      <Cards
        title={"10+ Active Repo"}
        text={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi
        omnis quod eos ratione beatae tempora non velit fugiat nesciunt cumque
        tenetur quae esse architecto est debitis, praesentium quisquam
        distinctio mollitia et libero aperiam repudiandae dolorem? Voluptatum
        quod sed dolore fuga est atque, consectetur, `}
        style="rounded-tr-none col-span-12 sm:col-span-6 xl:!col-span-5"
      >
        <RiGitRepositoryFill className="text-8xl mx-auto opacity-90" />
      </Cards>
    </div>
  );
}
