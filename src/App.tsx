import "./tailwind.css";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Options } from "./components/Options";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  const [username, setUsername] = useState<string>("");
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

  const copyToClipboard = () => {
    if (username) {
      navigator.clipboard.writeText(`![${username}\'s Stats](${ghStats()})`);
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
    copyToClipboard,
    setUsername,
    setTheme,
    setCountPrivate,
    setBorder,
    setCompact,
  };

  return (
    <div className='h-screen flex flex-col items-center'>
      <div className=''>
        <Header />

        <Options {...optionsProps} />

        <div className='dlg:hidden'>
          {username ? (
            <div className='flex h-48'>
              <img
                className='outline-none shadow-lg rounded-xl'
                src={ghStats()}
                alt='github stats'
              />
              <img
                className='outline-none shadow-lg rounded-xl'
                src={ghTopLangs()}
                alt='github top languages'
              />
            </div>
          ) : (
            <h1 className='text-2xl text-green-400'>input your username</h1>
          )}
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
