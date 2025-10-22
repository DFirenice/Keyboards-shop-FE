'use client'

import { usePathname } from 'next/navigation'

export const useIsCurrentPath = () => {
  const pathname = usePathname()

  return (targetPath?: string, options?: { root?: boolean }): boolean => {
    if (!targetPath) return false

    if (options?.root) {
      const currentRoot = '/' + pathname.split('/')[1]
      const targetRoot = '/' + targetPath.split('/')[1]
      return currentRoot === targetRoot
    }

    return pathname === targetPath
  }
}