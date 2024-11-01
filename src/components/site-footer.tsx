import { siteConfig } from '@/config/site'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Semester™ 2024
        </p>
        <div className="flex gap-4">
          <Link href="/tos">
            <p className="text-xs text-muted-foreground">Termos</p>
          </Link>
          <Link href="/privacy">
            <p className="text-xs text-muted-foreground">Privacidade</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
