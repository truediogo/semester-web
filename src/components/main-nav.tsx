import NextImage from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import Logo from '@/assets/logo.png'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { NavItem } from '@/types/nav'

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative h-8 w-8 rounded-xl overflow-hidden">
          <NextImage src={Logo} alt="Semester Logo" fill />
        </div>
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-sm font-medium text-muted-foreground',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
