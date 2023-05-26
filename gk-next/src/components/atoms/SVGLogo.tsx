type SVGLogoType = {
  strokeColor: string;
  fillColor?: string;
  className?: string;
};

export function SVGLogo({
  strokeColor = "#000",
  fillColor = "#00000000",
  className,
}: SVGLogoType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="214.688"
      height="154.186"
      version="1.1"
      viewBox="0 0 56.803 43"
      xmlSpace="preserve"
      className={className}
    >
      <g transform="translate(-140.848 -75.698)">
        <g
          fill="#fff"
          stroke={strokeColor}
          strokeDasharray="none"
          strokeOpacity="1"
          strokeWidth="1.417"
          transform="matrix(.35278 0 0 .35278 -34.967 37.278)"
        >
          <g
            fill={fillColor}
            fillOpacity="1"
            fillRule="evenodd"
            stroke={strokeColor}
            strokeDasharray="none"
            strokeLinecap="round"
            strokeOpacity="1"
            strokeWidth="2.126"
            paintOrder="stroke markers fill"
          >
            <path d="M591.36 122.617l26.513 8.116c6.142 1.88 5.911 2.484 5.911 8.719v73.19c.117 7.52-1.538 6.557-6.974 4.763l-21.87-7.123c-5.33-1.735-4.613-.969-2.139-5.726 5.718-10.991 7.53-22.527 9.711-34.73.74-4.142 1.386-5.475-3.467-7.009l-7.843-2.478c-4.53-1.218-4.471-3.144-4.471-6.817v-26.91c0-2.556.511-5.183 4.63-3.996z"></path>
            <path d="M542.808 195.216c4.794-1.804 9.298-4.86 12.245-8.203 4.158-4.717 2.115-6.125 7.371-4.258 1.653.586 3.31 1.141 4.978 1.685 5.898 1.924 5.724 1.858 10.785-1.743L593.7 171.66c7.354-5.232 6.29-5.06 4.807 3.579-1.868 10.877-4.446 23.207-10.8 32.066-3.13 4.363-6.849 7.767-11.345 10.467-3.509 2.107-4.184 1.786-7.805.524-12.42-4.337-21.152-10.801-26.85-18.122-2.691-3.457-2.665-3.541 1.1-4.958z"></path>
            <path d="M627.574 109.455l27.766 8.5c3.35 1.122 4.757 2.315 1.592 6.092l-28.069 36.395c-2.366 3.07-1.586.431-1.739-1.331v-24.32c0-4.615.635-4.511-3.775-5.861l-8.864-2.714c-3.65-.983-3.246-2.334-1.202-4.976l7.685-9.95c2.199-2.795 3.886-2.728 6.606-1.835z"></path>
            <path d="M630.104 168.894l26.372 22.563c3.096 2.4 4.921 3.68-.83 1.919l-25.22-7.72c-2.64-.829-3.233-1.903-3.302-4.572v-10.957c0-4.425-.326-4.062 2.98-1.233z"></path>
            <path d="M553.113 122.4l19.65 5.887c9.764 2.868 5.828 2.587-1.388 4.042-45.16 9.12-58.643 65.825-8.694 86.95 6.705 2.836 7.39 2.3-.156 3.798-74.301 14.768-86.827-86.376-23.008-101.354 5.573-1.308 7.972-1.009 13.596.676z"></path>
            <path d="M574.626 159.19l16.107 5.15c6.485 2.073 5.987 1.423.49 5.194l-14.508 10.1c-4.393 3.014-4.265 2.996-9.312 1.29l-16.46-5.565c-6.583-2.226-6.03-1.57-.323-5.23l15.494-10.101c3.953-2.536 4.016-2.275 8.512-.837z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}