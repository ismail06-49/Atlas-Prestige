import Link from "next/link";

const links = [
  { label: "Home", href: "#collection", },
  { label: "Shop", href: "#shop" },
  { label: "Watches", href: "#watches" },
  { label: "Perfumes", href: "#perfumes" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#faf9f6]/95 backdrop-blur">
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Atlas Prestige home" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center border border-[#a77b43] font-serif text-lg text-[#a77b43]">
            A
          </span>
          <span className="leading-none">
            <span className="block font-serif text-[19px] tracking-[0.04em] text-neutral-900">
              ATLAS
            </span>
            <span className="mt-1 block text-[9px] tracking-[0.26em] text-neutral-500">
              PRESTIGE
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-neutral-600 transition-colors hover:text-[#a77b43]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden border border-neutral-900 px-5 py-3 text-[11px] font-medium tracking-[0.12em] text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white md:inline-flex"
        >
          GET IN TOUCH
        </Link>

        <details className="group relative md:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 text-xs font-medium tracking-[0.12em] text-neutral-800 [&::-webkit-details-marker]:hidden">
            MENU
            <span aria-hidden="true" className="text-base leading-none text-[#a77b43]">+</span>
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-[calc(100%+12px)] flex w-56 flex-col border border-neutral-200 bg-[#faf9f6] p-2 shadow-lg"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-[#8b6334]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mx-2 my-2 border border-neutral-900 px-3 py-3 text-center text-[10px] font-medium tracking-[0.12em] text-neutral-900"
            >
              GET IN TOUCH
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
};

export default Navbar;
