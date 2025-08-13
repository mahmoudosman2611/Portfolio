import Card from "../Card/Card";

import FreshCartImg from "../../assets/imgs/freshcartproject.PNG";
import FokirImg from "../../assets/imgs/fokir.png";
import DevfolioImg from "../../assets/imgs/devfoilo.png";

export default function Projects() {
  return (
    <section
      id="Projects"
      className="relative scroll-mt-28 bg-black text-white py-16 md:py-20 overflow-hidden"
    >
      {/* خلفية شبكية خفيفة + هالات بالـprimary */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(59,130,246,0.18), transparent 45%),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 60px 60px, 60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-24 -left-24 hidden md:block h-80 w-80 rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(closest-side, rgba(29,78,216,0.35), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 hidden md:block h-[26rem] w-[26rem] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(closest-side, rgba(59,130,246,0.28), transparent 70%)" }}
      />

      <div className="relative container mx-auto px-6 md:px-20">
        <div className="mb-12 md:mb-16 text-center">
          <h2
            className="inline-block text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight
                       bg-gradient-to-r from-primary-300 via-primary-200 to-primary-50 bg-clip-text text-transparent
                       drop-shadow-[0_0_14px_rgba(59,130,246,0.25)]"
          >
            My Projects
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Selected works focused on speed, accessibility, and clean UX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md
                          shadow-[0_0_24px_rgba(59,130,246,0.08)]
                          transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]">
            <Card
              title="Fresh Cart"
              img={FreshCartImg}
              liveDemo="https://fresh-cart-rouge-psi.vercel.app/"
              repo="https://github.com/mahmoudosman2611/FreshCart"
              description="FreshCart is a fast and modern online store for fresh groceries and essentials. Enjoy easy browsing, secure checkout, and quick delivery to your door."
            />
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md
                          shadow-[0_0_24px_rgba(59,130,246,0.08)]
                          transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]">
            <Card
              title="Fokir"
              img={FokirImg}
              liveDemo="https://mahmoudosman2611.github.io/Fokir/"
              repo="https://github.com/mahmoudosman2611/Fokir"
              description="Fokir is a fully responsive website designed with HTML, CSS, and Bootstrap. It offers a seamless user experience with a clean and modern design."
            />
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur-md
                          shadow-[0_0_24px_rgba(59,130,246,0.08)]
                          transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]">
            <Card
              title="Devfolio"
              img={DevfolioImg}
              liveDemo="https://mahmoudosman2611.github.io/Devfolio/"
              repo="https://github.com/mahmoudosman2611/Devfolio"
              description="Devfolio is a modern, responsive personal portfolio built using HTML, CSS, Bootstrap, and the Typed.js library. It features smooth scrolling, attractive animations, and an elegant layout."
            />
          </div>
        </div>

        {/* ملاحظة صغيرة بنفس ستايل الأقسام السابقة */}
        <div className="mt-8 text-center text-xs text-white/50">
          * More projects available upon request.
        </div>
      </div>
    </section>
  );
}
