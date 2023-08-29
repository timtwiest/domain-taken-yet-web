import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="container">
      <div className="flex items-center justify-between border-b py-4">
        <div className="flex items-center space-x-2">
          <div className="flex flex-col space-y-1 text-sm leading-none">
            <Link href="/" className="flex flex-col">
              <span className="text-lg font-bold">{siteConfig.name}</span>
            </Link>
            <div className="pt-1">
              <p className="text-muted-foreground">
                {siteConfig.description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.npm}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
            >
              <Icons.npm className="h-5 w-5" />
              <span className="sr-only">NPM</span>
            </div>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
