"use client";
import React, { Suspense, useState, useEffect } from "react";
import Button from "app/_components/Button";
import Loading from "app/_components/Loading/Loading";
import TestimonialContainer from "app/_components/TestimonialComp/TestimonialContainer";
import { fetchData, imgUrl } from "app/_functions/functions";
const RepoCardII = React.lazy(
  () => import("app/_components/ReposComp/RepoCardII")
);

export default function Page() {
  const [data, setData] = useState<string[] | null>(null);
  const [dataLimit, setDataLimit] = useState<number>(5);

  useEffect(() => {
    const url: string =
      "https://api.github.com/orgs/codinasion/repos?per_page=100&page=1";
    const processData = async () => {
      const data = await fetchData(url);
      const shortData = await data.sort(
        (a: { forks: string }, b: { forks: string }) =>
          parseFloat(b.forks) - parseFloat(a.forks)
      );
      setData(shortData);
    };
    processData();
  }, []);

  return (
    <div className="space-y-5">
      {data !== null ? (
        <Suspense fallback={<Loading />}>
          <div className="p-2 lg:container mx-auto  rounded-[50px] bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-32 space-y-3">
            {data.slice(0, dataLimit).map((item: any) => (
              <RepoCardII
                key={item.id}
                id={item.id}
                imgUrl={imgUrl}
                title={item.name}
                desc={item.description}
                repoUrl={item.name}
                status={{
                  forks: item.forks,
                  stars: item.stargazers_count,
                  watchers: item.watchers_count,
                }}
              />
            ))}
            <Button
              setState={setDataLimit}
              state={dataLimit}
              style={"mt-5"}
              limitSteps={5}
            >
              Expend...
            </Button>
          </div>
        </Suspense>
      ) : (
        <Loading />
      )}

      <TestimonialContainer />
    </div>
  );
}
