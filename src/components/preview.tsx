"use client";

import React from "react";
import Image from "next/image";
import { useGithubStats } from "@/hooks/use-github-stats";
import { useParams, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Preview = () => {
  const searchParams = useSearchParams();

  const { username } = useParams<{ username: string }>();
  const theme = searchParams.get("theme") || "tokyonight";
  const countPrivate = searchParams.get("count_private") || "true";
  const hideBorder = searchParams.get("hide_border") || "true";

  const { stats, topLanguages, streak } = useGithubStats({
    username: username ?? "hyamero",
    theme,
    countPrivate,
    hideBorder,
  });

  const tabsData = [
    {
      name: "Stats",
      value: "stats",
      content: () => (
        <Image
          width={400}
          height={150}
          className="w-full output"
          src={stats}
          alt="github stats"
          priority
        />
      ),
    },
    {
      name: "Top Languages",
      value: "languages",
      content: () => (
        <Image
          width={300}
          height={150}
          className="w-full output"
          src={topLanguages}
          alt="github top languages"
          priority
        />
      ),
    },
    {
      name: "Streak",
      value: "streak",
      content: () => (
        <Image
          width={300}
          height={150}
          className="w-full output"
          src={streak}
          alt="github streak"
          priority
        />
      ),
    },
  ];

  return (
    <Tabs defaultValue="stats" className="w-full mt-5">
      <TabsList className="w-full bg-transparent px-0 flex mb-5">
        {tabsData.map(({ name, value }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="w-full data-[state=active]:border-primary/50 border-secondary transition-color border-b rounded-none"
          >
            {name}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabsData.map(({ content, value }) => (
        <TabsContent key={value} value={value} className="w-full">
          {content()}
        </TabsContent>
      ))}
    </Tabs>
  );
};
