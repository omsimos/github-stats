import React from "react";
import Image from "next/image";
import { type Stats, useGithubStats } from "@/hooks/use-github-stats";

export const Preview = ({
  theme,
  countPrivate,
  hideBorder,
}: Omit<Stats, "username">) => {
  const { stats, topLanguages, streak } = useGithubStats({
    username: "hyamero",
    theme: "tokyonight",
    countPrivate: "true",
    hideBorder: "true",
  });
  return (
    <section className="mt-12 flex flex-col gap-2">
      <Image
        width={400}
        height={150}
        className="w-full output"
        src={stats}
        alt="github stats"
      />
      <Image
        width={300}
        height={150}
        className="w-full output"
        src={topLanguages}
        alt="github top languages"
      />
      <Image
        width={300}
        height={150}
        className="w-full output"
        src={streak}
        alt="github streak"
      />
    </section>
  );
};
