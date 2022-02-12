import React from 'react';
import { Options } from './components/Options';
import { OptionsProvider } from './context/OptionsContext';
import { Output } from './components/Output';
import { Footer, Header } from './components';

const App: React.FC = () => {
  return (
    <div className='min-h-screen relative flex flex-col pb-24'>
      <Header />

      <div className='flex dxl:flex-col dxl:items-center justify-between w-9/12 mx-auto overflow-x-hidden mt-4 max-w-screen-xl'>
        <OptionsProvider>
          <Options />
          <Output />
        </OptionsProvider>
      </div>

      <Footer />
    </div>
  );
};

export default App;
