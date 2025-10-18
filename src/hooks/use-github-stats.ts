import { useMemo } from "react";

export type Stats = {
  theme?: string;
  username?: string;
  countPrivate?: string;
  hideBorder?: string;
};

export const useGithubStats = (data: Stats) => {
  const { theme, username, countPrivate, hideBorder } = data;

  return useMemo(() => {
    const encodedUsername = encodeURIComponent(username ?? "");
    const encodedTheme = encodeURIComponent(theme ?? "");
    const encodedHideBorder = encodeURIComponent(hideBorder ?? "");
    const encodedCountPrivate = encodeURIComponent(countPrivate ?? "");

    const stats = `https://github-readme-stats.vercel.app/api?username=${encodedUsername}&theme=${encodedTheme}&show_icons=true&hide_border=${encodedHideBorder}&count_private=${encodedCountPrivate}`;
    const topLanguages = `https://github-readme-stats.vercel.app/api/top-langs/?username=${encodedUsername}&theme=${encodedTheme}&show_icons=true&hide_border=${encodedHideBorder}&layout=compact`;
    const streak = `https://streak-stats.demolab.com?user=${encodedUsername}&theme=${encodedTheme}&hide_border=${encodedHideBorder}`;

    return { stats, topLanguages, streak };
  }, [username, theme, hideBorder, countPrivate]);
};
