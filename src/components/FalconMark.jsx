// A peregrine in a stoop: wings folded back, head down.
export default function FalconMark({ className, title }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <path d="M32 62 C34.5 61 36.5 58 36.5 54 L38 44 C46 38 55 24 57 4 C50 13 44 20 37.5 24 L36.5 13 L32 14.5 L27.5 13 L26.5 24 C20 20 14 13 7 4 C9 24 18 38 26 44 L27.5 54 C27.5 58 29.5 61 32 62 Z" fill="currentColor" />
    </svg>
  )
}
