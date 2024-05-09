type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  adjust: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
      />
    </svg>
  ),

  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect width="6" height="14" x="1" y="4" fill="currentColor">
        <animate
          id="svgSpinnersBarsScaleFade0"
          fill="freeze"
          attributeName="y"
          begin="0;svgSpinnersBarsScaleFade1.end-0.25s"
          dur="0.75s"
          values="1;5"
        ></animate>
        <animate
          fill="freeze"
          attributeName="height"
          begin="0;svgSpinnersBarsScaleFade1.end-0.25s"
          dur="0.75s"
          values="22;14"
        ></animate>
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="0;svgSpinnersBarsScaleFade1.end-0.25s"
          dur="0.75s"
          values="1;.2"
        ></animate>
      </rect>
      <rect width="6" height="14" x="9" y="4" fill="currentColor" opacity=".4">
        <animate
          fill="freeze"
          attributeName="y"
          begin="svgSpinnersBarsScaleFade0.begin+0.15s"
          dur="0.75s"
          values="1;5"
        ></animate>
        <animate
          fill="freeze"
          attributeName="height"
          begin="svgSpinnersBarsScaleFade0.begin+0.15s"
          dur="0.75s"
          values="22;14"
        ></animate>
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="svgSpinnersBarsScaleFade0.begin+0.15s"
          dur="0.75s"
          values="1;.2"
        ></animate>
      </rect>
      <rect width="6" height="14" x="17" y="4" fill="currentColor" opacity=".3">
        <animate
          id="svgSpinnersBarsScaleFade1"
          fill="freeze"
          attributeName="y"
          begin="svgSpinnersBarsScaleFade0.begin+0.3s"
          dur="0.75s"
          values="1;5"
        ></animate>
        <animate
          fill="freeze"
          attributeName="height"
          begin="svgSpinnersBarsScaleFade0.begin+0.3s"
          dur="0.75s"
          values="22;14"
        ></animate>
        <animate
          fill="freeze"
          attributeName="opacity"
          begin="svgSpinnersBarsScaleFade0.begin+0.3s"
          dur="0.75s"
          values="1;.2"
        ></animate>
      </rect>
    </svg>
  ),
};
