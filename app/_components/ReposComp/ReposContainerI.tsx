import React from "react";
import RepoCard from "./RepoCard";

const desc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates doloribus sunt, doloremque quam labore iure maiores cum vero facilis dolor deleniti consequatur, nisi dicta molestiae rerum quaerat, quidem quisquam accusamus`;

type repoListType = {
  id: number;
  title: string;
  desc: string;
  imgUrl: string;
  repoUrl: string;
  style: string;
}[];

const repoList: repoListType = [
  {
    id: 1,
    title: "Codinasion Tools",
    desc,
    imgUrl:
      "https://images.unsplash.com/photo-1605661538700-68f27cb6509d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    repoUrl: "https://github.com/codinasion",
    style: "",
  },
  {
    id: 2,
    title: "Program",
    desc,
    imgUrl:
      "https://images.unsplash.com/photo-1605557626540-ae67a4e1a62a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    repoUrl: "https://github.com/codinasion",
    style: "flex-row-reverse",
  },
  {
    id: 1,
    title: "Codinasion Tools",
    desc,
    imgUrl:
      "https://images.unsplash.com/photo-1605557833946-8f264331f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    repoUrl: "https://github.com/codinasion",
    style: "",
  },
  {
    id: 2,
    title: "Program",
    desc,
    imgUrl:
      "https://images.unsplash.com/photo-1605557626569-8e90be178386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    repoUrl: "https://github.com/codinasion",
    style: "flex-row-reverse",
  },
];

export default function RepoContainerI() {
  return (
    <div className="px-2 container mx-auto">
      {repoList.map((item) => (
        <RepoCard
          key={Math.random() * 50 + item.title}
          imgUrl={item.imgUrl}
          title={item.title}
          desc={item.desc}
          repoUrl={item.repoUrl}
          style={item.style}
        />
      ))}
    </div>
  );
}
