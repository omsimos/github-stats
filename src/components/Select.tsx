import React from 'react';

interface SelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: JSX.Element;
  label: string;
}

const Select = ({ options, label, ...rest }: SelectProps) => {
  return (
    <div className='choices'>
      <label>{label}</label>
      <select className='input appearance-none' {...rest}>
        {options}
      </select>
    </div>
  );
};

export default Select;
