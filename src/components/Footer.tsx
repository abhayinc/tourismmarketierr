import Link from 'next/link'

export function Footer() {
  return (
    <>
      <section className="space-y-6 sm:space-y-8 pt-12" id="contact">
        <div className="flex items-center gap-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Get in Touch
          </h2>
          <svg
            className="w-8 h-4 text-[#f5c75d]/85 dark:text-[#f5c75d]/65 select-none"
            viewBox="0 0 40 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 8 C 10 2, 18 13, 26 5 C 32 -1, 35 12, 38 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="space-y-4">
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            Let&apos;s create beautiful designs that turn travelers into your loyal customers.
          </p>
          <div className="pt-2 select-none">
            <a
              href="https://wa.me/919174024621?text=Hi%20Abhay,%20I'd%20like%20to%20start%20a%20project%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-b border-zinc-950 dark:border-white pb-0.5 text-zinc-950 dark:text-white font-medium hover:text-[#f5c75d] hover:border-[#f5c75d] transition-all duration-200 text-sm sm:text-base"
            >
              Start a project with me
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>
        <div className="space-y-2 pt-4 text-xs sm:text-sm font-medium text-zinc-400 dark:text-zinc-500">
          <div className="flex items-baseline gap-4">
            <span className="w-20 flex-shrink-0">EMAIL</span>
            <a href="mailto:tourismmarketier@gmail.com" className="text-zinc-950 dark:text-zinc-100 hover:underline break-all">
              tourismmarketier@gmail.com
            </a>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="w-20 flex-shrink-0">WHATSAPP</span>
            <a
              href="https://wa.me/919174024621"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-950 dark:text-zinc-100 hover:underline break-all"
            >
              +91 91740 24621
            </a>
          </div>
        </div>
      </section>

      <footer className="pt-10 sm:pt-12 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center text-[10px] font-medium text-zinc-400 dark:text-zinc-500 pb-12">
        <span>© 2026 Abhay Tank</span>
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://tourismmarketier.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline hover:text-black dark:hover:text-white"
          >
            tourismmarketier.com
          </a>
          <span className="hidden sm:inline text-zinc-200 dark:text-zinc-800">/</span>
          <div className="flex items-center gap-3">
            <a
              href="https://in.linkedin.com/in/abhaytank"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/tourismmarketier"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1BY3srzLke/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
