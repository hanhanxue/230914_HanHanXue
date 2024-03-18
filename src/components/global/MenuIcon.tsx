import { SVGProps } from "react"

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path fill="#000" d="M3 4h14v2H3zM3 14h14v2H3zM3 9h14v2H3z" />
  </svg>
)
export default MenuIcon
