/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { HiSelector, HiCheck } from 'react-icons/hi';
import { nanoid } from 'nanoid';

type IChoice = { value: string; name: string };

interface SelectProps {
  label: string;
  options: IChoice[];
  onChange: (selected: IChoice) => void;
  defaultValue?: IChoice;
}

function Select({ label, options, onChange, defaultValue }: SelectProps) {
  const [selectedOption, setSelectedOption] = useState(
    defaultValue ?? options[0]
  );

  useEffect(() => {
    onChange(selectedOption);
  }, [selectedOption]);

  const ids = useMemo(() => options.map(() => nanoid()), [options]);

  return (
    <div>
      <p className='text-sm md:text-base'>{label}</p>
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        <div className='relative w-full shadow-lg'>
          <Listbox.Button className='input'>
            <span className='block truncate'>{selectedOption.name}</span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <HiSelector
                className='w-5 h-5 text-gray-400'
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
            <Listbox.Options className='absolute z-20 w-full py-1 mt-1 overflow-auto text-sm bg-gray-700 rounded shadow-lg md:text-base max-h-60'>
              {options.map((item, idx) => (
                <Listbox.Option
                  key={ids[idx]}
                  className={({ active }) =>
                    `${
                      active ? 'bg-gray-600' : 'bg-gray-700'
                    } cursor-pointer transition-colors duration-150 select-none relative py-2 pl-10 pr-4`
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
                        <span className='text-green-400 absolute inset-y-0 left-0 flex items-center pl-3'>
                          <HiCheck className='w-5 h-5' aria-hidden='true' />
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
}

export default Select;
