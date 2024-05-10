"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";

import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
import { useGithubStats } from "@/hooks/use-github-stats";
import { useParams, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
        <div key={value} className="w-full">
          <ImgPreview
            alt={alt}
            value={value}
            imgSrc={imgSrc}
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
          />
        </div>
      ))}
    </Tabs>
  );
};

const ImgPreview = ({
  value,
  imgSrc,
  alt,
  openDialog,
  setOpenDialog,
}: {
  value: string;
  imgSrc: string;
  alt: string;
  openDialog: string;
  setOpenDialog: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [imgLoad, setImgLoad] = useState(true);

  const { username } = useParams<{ username: string }>();

  const copyVariants = [
    {
      type: "markdown",
      Icon: () => <Icons.clipboard />,
    },
    {
      type: "link",
      Icon: () => <Icons.link />,
    },
    {
      type: "code",
      Icon: () => <Icons.code />,
    },
  ];

  const copyToClipboard = (type: string) => {
    if (username) {
      let copiedText = "";

      if (type === "markdown") {
        copiedText = `![GitHub Stats](${imgSrc})`;
      } else if (type === "link") {
        copiedText = imgSrc;
      } else if (type === "code") {
        copiedText = `<img src="${imgSrc}" alt="${username}'s GitHub Stats" />`;
      }
      navigator.clipboard.writeText(copiedText);
      toast.success("Copied to Clipboard!");
    }
  };

  return (
    <>
      <Dialog
        open={openDialog === value}
        onOpenChange={() => setOpenDialog(openDialog === value ? "" : value)}
      >
        <DialogContent className="sm:p-10">
          <div>
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
          </div>
        </DialogContent>
      </Dialog>

      <TabsContent
        key={value}
        value={value}
        className="w-full relative sm:flex gap-3"
      >
        {imgLoad && (
          <Icons.spinner className="absolute top-14 left-1/2 -translate-x-1/2" />
        )}

        <Image
          width={400}
          height={150}
          className="w-full output cursor-pointer"
          src={imgSrc}
          alt={alt}
          priority
          onLoadStart={() => setImgLoad(true)}
          onLoad={() => setImgLoad(false)}
          onClick={() => setOpenDialog(value)}
        />

        {username && (
          <div className="mt-2 sm:mt-0 flex sm:flex-col justify-between">
            <div className="sm:flex-col flex gap-2">
              {copyVariants.map(({ type, Icon }) => (
                <TooltipProvider key={type}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        variant="outline"
                        size="icon"
                        className="[&>*]:h-5"
                        onClick={() => copyToClipboard(type)}
                      >
                        <Icon />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Copy as {type}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>

            <Button asChild variant="outline" size="icon" className="[&>*]:h-5">
              <Link href="/">
                <Icons.back className="h-5" />
              </Link>
            </Button>
          </div>
        )}
      </TabsContent>
    </>
  );
};
