"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useGithubStats } from "@/hooks/use-github-stats";
import { useParams, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "./icons";
import { Dialog, DialogContent } from "./ui/dialog";

export const Preview = () => {
  const searchParams = useSearchParams();
  const themePreview = searchParams.get("theme_preview");

  const [openDialog, setOpenDialog] = useState("");

  const { username } = useParams<{ username: string }>();
  const theme = searchParams.get("theme") || themePreview || "tokyonight";
  const countPrivate = searchParams.get("count_private") || "true";
  const hideBorder = searchParams.get("hide_border") || "true";

  const { stats, topLanguages, streak } = useGithubStats({
    username: username ?? "leerob",
    theme,
    countPrivate,
    hideBorder,
  });

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
        <React.Fragment key={value}>
          <Dialog
            key={value}
            open={openDialog === value}
            onOpenChange={() =>
              setOpenDialog(openDialog === value ? "" : value)
            }
          >
            <DialogContent>
              <ImgPreview value={value} imgSrc={imgSrc} alt={alt} />
            </DialogContent>
          </Dialog>
          <div
            className="w-full cursor-pointer"
            onClick={() => setOpenDialog(value)}
          >
            <ImgPreview value={value} imgSrc={imgSrc} alt={alt} />
          </div>
        </React.Fragment>
      ))}
    </Tabs>
  );
};

const ImgPreview = ({
  value,
  imgSrc,
  alt,
}: {
  value: string;
  imgSrc: string;
  alt: string;
}) => {
  const [imgLoad, setImgLoad] = useState(true);

  return (
    <TabsContent key={value} value={value} className="w-full relative">
      {imgLoad && (
        <Icons.spinner className="absolute top-14 left-1/2 -translate-x-1/2" />
      )}

      <Image
        width={400}
        height={150}
        className="w-full output"
        src={imgSrc}
        alt={alt}
        priority
        onLoadStart={() => setImgLoad(true)}
        onLoad={() => setImgLoad(false)}
      />
    </TabsContent>
  );
};
