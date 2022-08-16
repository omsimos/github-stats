import { Toast } from 'react-hot-toast';

export const countPrivateCommits = [
  { value: 'true', name: 'Show Private Commits' },
  { value: 'false', name: 'Hide Private Commits' },
];

export const showBorder = [
  { value: 'true', name: 'Hide Border' },
  { value: 'false', name: 'Show Border' },
];

export const darkToast: Partial<Toast> = {
  style: {
    background: '#2d3748',
    color: '#f9f9f9',
    fontSize: '0.9rem',
    border: '1px solid #f9f9f9',
  },
  position: 'top-right',
};
