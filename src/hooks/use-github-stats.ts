export type IStats = {
  theme?: string;
  username?: string;
  countPrivate?: string;
  border?: string;
};

export const useGithubStats = (data: IStats) => {
  const { theme, username, countPrivate, border } = data;

  const stats = `https://github-readme-stats.vercel.app/api?username=${username}&theme=${theme}&show_icons=true&hide_border=${border}&count_private=${countPrivate}`;

  const topLanguages = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${theme}&show_icons=true&hide_border=${border}&layout=compact`;

  const streak = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=${border}`;

  return { stats, topLanguages, streak };
};
