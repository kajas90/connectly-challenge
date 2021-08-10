export function FBIcon({
  className,
  width = 24,
  height = 24
}: {
  className?: string
  width?: number
  height?: number
}) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <g fill-rule="evenodd" clip-path="url(#clip0)" clip-rule="evenodd">
        <path
          fill="url(#fbm_paint0_radial)"
          d="M12 0C5.24 0 0 4.952 0 11.64c0 3.498 1.434 6.521 3.769 8.61a.958.958 0 01.322.684l.065 2.134a.96.96 0 001.348.85l2.381-1.052a.958.958 0 01.641-.047c1.095.3 2.26.461 3.474.461 6.76 0 12-4.952 12-11.64C24 4.952 18.76 0 12 0z"
        ></path>
        <path
          fill="#fff"
          d="M4.794 15.044L8.32 9.452a1.8 1.8 0 012.603-.48l2.803 2.102a.72.72 0 00.868-.002l3.786-2.874c.506-.384 1.165.221.827.758l-3.525 5.593a1.8 1.8 0 01-2.603.48l-2.803-2.103a.72.72 0 00-.868.002l-3.786 2.874c-.506.384-1.165-.221-.827-.758z"
        ></path>
      </g>
      <defs>
        <radialGradient
          id="fbm_paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="translate(4.62 23.872) scale(26.1503)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#09F"></stop>
          <stop offset=".61" stop-color="#A033FF"></stop>
          <stop offset=".935" stop-color="#FF5280"></stop>
          <stop offset="1" stop-color="#FF7061"></stop>
        </radialGradient>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h24v24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}
