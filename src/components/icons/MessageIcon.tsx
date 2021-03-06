export function MessageIcon({
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
      <path
        d="M12 0C5.375 0 0 5.371 0 12s5.375 12 12 12c2.09 0 4.656-.523 6.488-1.516l3.492.48c.29.095.606.02.82-.194a.797.797 0 00.192-.82l-.515-3.442C23.555 16.633 24 14.176 24 12c0-6.629-5.371-12-12-12zm0 0"
        fill="#361e7c"
      ></path>
      <path
        d="M8.21 12.324c0-.894-.706-1.62-1.577-1.62-.875 0-1.582.726-1.582 1.62 0 .895.707 1.621 1.582 1.621.87 0 1.578-.726 1.578-1.62zm0 0M14.105 12.324c0-1.195-.94-2.16-2.105-2.16-1.164 0-2.105.965-2.105 2.16 0 1.196.94 2.164 2.105 2.164 1.164 0 2.105-.968 2.105-2.164zm0 0M18.95 12.324c0-.894-.708-1.62-1.583-1.62-.87 0-1.578.726-1.578 1.62 0 .895.707 1.621 1.578 1.621.875 0 1.582-.726 1.582-1.62zm0 0"
        fill="#fff"
      ></path>
    </svg>
  )
}
