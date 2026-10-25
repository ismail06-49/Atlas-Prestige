import Image from "next/image";

const Home = () => {
  return (
    <main id="home" className="flex-1 bg-[#faf9f6] text-neutral-900">
      <section className="mx-auto grid min-h-[64vh] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1fr_0.9fr] md:gap-14 md:py-20">
        <div>
          <p className="mb-6 text-[11px] font-medium tracking-[0.24em] text-[#9b713e]">
            A MORE PERSONAL KIND OF PRESTIGE
          </p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.08] sm:text-6xl">
            Curated with care.
            <br />
            Chosen for you.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-neutral-600">
            Discover a considered collection and attentive service, shaped around what matters to you.
          </p>
          <a
            href="#collection"
            className="mt-9 inline-flex min-h-12 w-fit items-center bg-neutral-900 px-6 text-xs font-medium tracking-widest text-white transition-colors hover:bg-[#8b6334]"
          >
            EXPLORE THE COLLECTION
          </a>
        </div>
        <div className="relative aspect-square w-full overflow-hidden bg-[#2d1b13]">
          <Image
            src="/watch.jpg"
            alt="Gold-accented watch with a black dial and strap"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </section>

      <section id="collection" className="scroll-mt-24 border-t border-neutral-200 bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] tracking-[0.22em] text-[#9b713e]">01 / THE COLLECTION</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Distinctive by nature.</h2>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-t border-neutral-200 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] tracking-[0.22em] text-[#9b713e]">02 / OUR SERVICES</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Considered at every step.</h2>
        </div>
      </section>

      <section id="story" className="scroll-mt-24 border-t border-neutral-200 bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] tracking-[0.22em] text-[#9b713e]">03 / ATLAS PRESTIGE</p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">A more thoughtful standard.</h2>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-neutral-200 bg-neutral-900 px-5 py-16 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] tracking-[0.22em] text-[#d0a56e]">BEGIN A CONVERSATION</p>
            <h2 className="mt-3 font-serif text-3xl">We would be glad to help.</h2>
          </div>
          <a href="mailto:hello@atlasprestige.com" className="text-sm text-white underline decoration-[#d0a56e] underline-offset-4">
            hello@atlasprestige.com
          </a>
        </div>
      </section>
    </main>
  )
}

export default Home
