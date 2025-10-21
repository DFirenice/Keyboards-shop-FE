'use client'

import type { Ticons } from "@/types/icons"
import type { SVGProps } from "react"
import { icons } from "@/data/icons"
import { cn } from "@/lib/utils"

export type TIconSize = 'tiny' | 'small' | 'default' | 'large' | 'fill'

interface IIconProps extends SVGProps<SVGAElement> {
  size?: TIconSize
  id: Ticons
}

const Icon = (
  {
    size = 'default',
    id, ...rest
  }: IIconProps
) => {
  const IconComponent = icons[id] || null

  const sizePx = {
    tiny: '1.125rem', // 18px
    small: '1.5rem',  // 24px
    default: '2rem',  // 32px
    large: '2.5rem',  // 40px
    fill: ['100%', 'auto']
  }[size]

  if (!IconComponent) return null

  return (
    <div
      className={cn(
        "inline-flex justify-center items-center w-fit h-fit select-none",
        rest.className
      )}
    >
      <IconComponent
        style={Array.isArray(sizePx) ? { width: sizePx[0], height: sizePx[1] } : { width: sizePx, height: sizePx }}
        className={`pointer-events-none aspect-square`}
        {...rest}
      />
    </div>
  )
}

export default Icon