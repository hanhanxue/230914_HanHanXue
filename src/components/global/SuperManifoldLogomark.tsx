import { SVGProps } from "react"

const SuperManifoldLogomark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="var(--c-icon-primary)"
      fillRule="evenodd"
      d="M22 0h20v20H22V0Zm4 8h4v4h-4V8Zm8 4h-4v4h4v-4Zm0-4h-4V4h4v4Zm0 0v4h4V8h-4ZM0 0h20v20H0V0Zm4 10a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      clipRule="evenodd"
    />
  </svg>
)

export default SuperManifoldLogomark
