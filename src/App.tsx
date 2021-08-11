import "./tailwind.css";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Options } from "./components/Options";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [theme, setTheme] = useState<string>("vue-dark");
  const [border, setBorder] = useState<string>("true");
  const [countPrivate, setCountPrivate] = useState<string>("false");
  const [copied, setCopied] = useState<boolean>(false);

  const ghStats = () => {
    return `https://github-readme-stats.vercel.app/api?username=${username}&theme=${theme}&show_icons=true&hide_border=${border}&count_private=${countPrivate}`;
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
    copyToClipboard,
    setUsername,
    setTheme,
    setCountPrivate,
    setBorder,
  };

  return (
    <div className='h-screen bg-gray-900 font-mono text-gray-200 flex flex-col items-center'>
      <Header />
      <Options {...optionsProps} />

      <div className='dlg:hidden mt-4'>
        {username ? (
          <img className='outline-none shadow-lg' src={ghStats()} alt='github stats' />
        ) : (
          <h1 className='text-2xl text-green-400'>input your username...</h1>
        )}
      </div>

      <div className='hidden dlg:block text-green-400'>
        <p>Not Available for Mobile! 😭</p>
      </div>

      <Footer />
    </div>
  );
};

export default App;
