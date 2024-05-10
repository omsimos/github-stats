type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  back: (props: IconProps) => (
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
        d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
      />
    </svg>
  ),

  code: (props: IconProps) => (
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
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
      />
    </svg>
  ),

  link: (props: IconProps) => (
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
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      />
    </svg>
  ),
  clipboard: (props: IconProps) => (
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
        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
      />
    </svg>
  ),

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
