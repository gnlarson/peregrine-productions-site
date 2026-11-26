// A single wave (the flow) resting on a flat bar (the smith's anvil).
// The same paths are used in public/favicon.svg.
export default function FlowsmithMark({ className, title }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <path
        d="M12 34 C20 34 22 18 32 18 S44 34 52 34"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path className="mark-base" d="M17 46 H47" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}
