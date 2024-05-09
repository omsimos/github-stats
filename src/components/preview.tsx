"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useGithubStats } from "@/hooks/use-github-stats";
import { useParams, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "./icons";

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

  const [imageLoad, setImageLoad] = useState({
    stats: true,
    languages: true,
    streak: true,
  });

  const handleImageLoad = (key: string) => {
    setImageLoad((prev) => ({ ...prev, [key]: false }));
  };

  enum tabValues {
    "stats",
    "languages",
    "streak",
  }

  const tabsData = [
    {
      name: "Stats",
      value: "stats",
      imgSrc: stats,
      alt: "github stats",
    },
    {
      name: "Top Languages",
      value: "languages",
      imgSrc: topLanguages,
      alt: "github top languages",
    },
    {
      name: "Streak",
      value: "streak",
      imgSrc: streak,
      alt: "github streak",
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
      {!username && (
        <p className="text-sm italic text-muted-foreground">
          This is only a preview, generate stats to get your result.
        </p>
      )}
      {tabsData.map(({ value, imgSrc, alt }) => (
        <TabsContent key={value} value={value} className="w-full relative">
          {imageLoad[value as keyof typeof tabValues] === true && (
            <Icons.spinner className="absolute top-14 left-1/2 -translate-x-1/2" />
          )}

          <Image
            width={400}
            height={150}
            className="w-full output"
            src={imgSrc}
            alt={alt}
            priority
            onLoad={() => handleImageLoad(value)}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
};
