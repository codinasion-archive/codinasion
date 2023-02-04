import { repoList } from "@/data/Obj/obj";
import React from "react";
import RepoCard from "./RepoCard";

export default function RepoContainerI() {
  return (
    <div className="px-2 lg:container mx-auto space-y-5">
      {repoList.map((item) => (
        <RepoCard
          key={Math.random() * 50 + item.title}
          id={item.id}
          imgUrl={item.imgUrl}
          title={item.title}
          desc={item.desc}
          repoUrl={item.repoUrl}
          order={[2, 4]}
        />
      ))}
    </div>
  );
}
