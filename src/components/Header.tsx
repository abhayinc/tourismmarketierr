import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { ISTClock } from './ISTClock'

export function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 text-xs font-medium tracking-tight text-zinc-500 dark:text-zinc-400">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>
              Abhay Tank <span className="hidden sm:inline">/ Available</span>
              <span className="hidden md:inline">
                {' '}
                / <ISTClock /> IST
              </span>
            </span>
          </Link>
        </div>
        <ThemeToggle className="sm:hidden" />
      </div>
      <nav className="flex items-center justify-between sm:justify-start gap-2 sm:gap-3 border-t sm:border-0 border-zinc-100 dark:border-zinc-800 pt-3 sm:pt-0 w-full sm:w-auto">
        <div className="flex gap-3">
          <Link href="/#about" className="hover:text-black dark:hover:text-white transition-colors">
            About
          </Link>
          <span>/</span>
          <Link href="/#projects" className="hover:text-black dark:hover:text-white transition-colors">
            Projects
          </Link>
          <span>/</span>
          <Link href="#contact" className="hover:text-black dark:hover:text-white transition-colors">
            Contact
          </Link>
        </div>
        <span className="hidden sm:inline">/</span>
        <ThemeToggle className="hidden sm:inline" />
      </nav>
    </header>
  )
}
