/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { HiSelector, HiCheck } from 'react-icons/hi';

type IChoice = { value: string; name: string };

interface SelectProps {
  label: string;
  options: IChoice[];
  onChange: (selected: IChoice) => void;
  defaultValue?: IChoice;
}

export const Select = ({
  label,
  options,
  onChange,
  defaultValue,
}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState(
    defaultValue ?? options[0]
  );

  useEffect(() => {
    onChange(selectedOption);
  }, [selectedOption]);

  return (
    <div>
      <p className='text-sm md:text-base'>{label}</p>
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <div className='relative w-full shadow-lg'>
          <Listbox.Button className='input'>
            <span className='block truncate'>{selectedOption.name}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <HiSelector
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded bg-gray-700 py-1 text-sm shadow-lg md:text-base'>
              {options.map((item) => (
                <Listbox.Option
                  key={item.name}
                  className={({ active }) =>
                    `${
                      active ? 'bg-gray-600' : 'bg-gray-700'
                    } relative cursor-pointer select-none py-2 pl-10 pr-4 transition-colors duration-150`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`text-sm lg:text-base ${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-green-400'>
                          <HiCheck className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
