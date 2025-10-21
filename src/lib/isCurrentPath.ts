'use client'

import { usePathname } from 'next/navigation'

export const useIsCurrentPath = (
  targetPath: string,
  options?: { root?: boolean }
): boolean => {
  const pathname = usePathname()

  if (options?.root) {
    const currentRoot = '/' + pathname.split('/')[1]
    const targetRoot = '/' + targetPath.split('/')[1]
    return currentRoot === targetRoot
  }

  return pathname === targetPath
}