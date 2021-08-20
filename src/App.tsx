import "./tailwind.css";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Options } from "./components/Options";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  const [username, setUsername] = useState<string>("joshxfi");
  const [theme, setTheme] = useState<string>("vue-dark");
  const [border, setBorder] = useState<string>("true");
  const [countPrivate, setCountPrivate] = useState<string>("true");
  const [copied, setCopied] = useState<boolean>(false);
  const [compact, setCompact] = useState<string>("compact");

  const ghStats = () => {
    return `https://github-readme-stats.vercel.app/api?username=${username}&theme=${theme}&show_icons=true&hide_border=${border}&count_private=${countPrivate}`;
  };

  const ghTopLangs = () => {
    return `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${theme}&show_icons=true&hide_border=${border}&layout=${compact}`;
  };

  const copyStats = () => {
    if (username) {
      navigator.clipboard.writeText(`![${username}\'s Stats](${ghStats()})`);
      setCopied(true);

      setTimeout(() => setCopied(false), 4000);
    }
    return;
  };

  const copyLangs = () => {
    if (username) {
      navigator.clipboard.writeText(
        `![${username}\'s Top Languages](${ghTopLangs()})`
      );
      setCopied(true);

      setTimeout(() => setCopied(false), 4000);
    }
    return;
  };

  const optionsProps = {
    username,
    theme,
    countPrivate,
    border,
    copied,
    compact,
    copyStats,
    copyLangs,
    setUsername,
    setTheme,
    setCountPrivate,
    setBorder,
    setCompact,
  };

  return (
    <div className='min-h-screen relative flex flex-col'>
      <Header />
      <div className='flex justify-between w-9/12 mx-auto overflow-x-hidden mt-10'>
        <Options {...optionsProps} />

        <div className='dlg:hidden flex flex-col justify-center mt-8'>
          <img
            className='mb-4 outline-none shadow-lg rounded-xl min-h-48 w-[30rem]'
            src={ghStats()}
            alt='github stats'
          />
          <img
            className='outline-none shadow-lg rounded-xl min-h-48 w-[30rem]'
            src={ghTopLangs()}
            alt='github top languages'
          />
        </div>

        <div className='hidden dmd:block my-auto text-xl text-green-400'>
          <p>Not Available for Mobile! 😭</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
