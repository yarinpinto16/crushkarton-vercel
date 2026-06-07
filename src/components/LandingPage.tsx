const logoAsset = { url: "/images/cardboard-baler-logo.png" };
const vanAsset = { url: "/images/service-van.png" };
import heroImg from "@/assets/hero-baler.jpg";
import repairImg from "@/assets/service-repair.jpg";
import saleImg from "@/assets/baler-sale.jpg";
import rentalImg from "@/assets/baler-rental.jpg";
import usedImg from "@/assets/baler-used.jpg";
import balesImg from "@/assets/bales.jpg";
import { useState } from "react";
import {
  Phone,
  Wrench,
  PackageOpen,
  Recycle,
  ShoppingCart,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

const WA = "https://wa.me/972525595975";
const TEL = "tel:+972525595975";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A10 10 0 0 0 4.1 17.5L3 21l3.6-1.07A10 10 0 1 0 19.05 4.9Zm-7.04 15.3a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-2.14.63.64-2.08-.2-.32a8.3 8.3 0 1 1 6.23 3.11Zm4.55-6.22c-.25-.13-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.16.25-.62.8-.76.96-.14.17-.28.18-.52.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.28.37-.42.13-.14.17-.25.26-.41.08-.17.04-.31-.02-.44-.06-.13-.55-1.34-.76-1.84-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.41.06-.62.31-.21.25-.81.79-.81 1.93s.83 2.24.95 2.4c.12.17 1.64 2.5 3.96 3.5.55.24.99.38 1.33.49.56.18 1.07.15 1.47.09.45-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.31Z" />
    </svg>
  );
}
function MiniBaler({ className, delay = "0s" }: { className?: string; delay?: string }) {
  return (
    <svg viewBox="0 0 64 80" className={className} aria-hidden="true">
      {/* frame */}
      <rect x="6" y="10" width="52" height="64" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.85" />
      <rect x="6" y="10" width="52" height="6" fill="currentColor" opacity="0.25" />
      {/* ram */}
      <g className="animate-press-ram" style={{ animationDelay: delay }}>
        <rect x="12" y="20" width="40" height="8" rx="1.5" fill="currentColor" opacity="0.9" />
        <rect x="22" y="16" width="20" height="6" rx="1" fill="currentColor" opacity="0.6" />
      </g>
      {/* cardboard bale */}
      <g className="animate-press-squash" style={{ animationDelay: delay, transformOrigin: "32px 70px" }}>
        <rect x="14" y="44" width="36" height="26" rx="1" fill="currentColor" opacity="0.45" />
        <line x1="14" y1="52" x2="50" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.7" />
        <line x1="14" y1="60" x2="50" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      </g>
      {/* base */}
      <rect x="4" y="72" width="56" height="4" rx="1" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

function FloatBox({ className, delay = "0s" }: { className?: string; delay?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <g className="animate-float-box" style={{ animationDelay: delay, transformOrigin: "center" }}>
        <rect x="6" y="8" width="28" height="24" rx="2" fill="currentColor" opacity="0.35" />
        <path d="M6 14 L20 18 L34 14" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
        <line x1="20" y1="18" x2="20" y2="32" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      </g>
    </svg>
  );
}


const services = [
  {
    title: "השכרת מכבשי קרטון",
    desc: "מכבשי קרטון להשכרה לעסקים, מחסנים ומפעלים, עם פתרון גמיש לתקופות קצרות או ארוכות.",
    icon: PackageOpen,
    img: rentalImg,
  },
  {
    title: "מכירת מכבשי קרטון",
    desc: "מכירת מכבשי קרטון חדשים ומשומשים, בהתאמה לגודל העסק, נפח העבודה וסוג השימוש.",
    icon: ShoppingCart,
    img: saleImg,
  },
  {
    title: "תיקון ושירות למכבשים",
    desc: "שירות תיקונים מקצועי למכבשי קרטון, כולל איתור תקלות, תחזוקה וטיפול במערכות הידראוליות.",
    icon: Wrench,
    img: repairImg,
  },
  {
    title: "קניית מכבשים משומשים",
    desc: "יש לכם מכבש קרטון שלא בשימוש? אנחנו קונים מכבשים משומשים ומציעים תהליך מהיר ופשוט.",
    icon: Recycle,
    img: usedImg,
  },
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header — white */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 text-neutral-900 backdrop-blur-xl">
        <div className="container-page flex h-20 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="מכבשי קרטון פתרונות" className="h-14 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
            <a href="#top" className="transition hover:text-neutral-900">ראשי</a>
            <a href="#services" className="transition hover:text-neutral-900">השירותים שלנו</a>
            <a href="#contact" className="transition hover:text-neutral-900">צור קשר</a>
          </nav>
          <a
            href={TEL}
            className="hidden items-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:border-neutral-300 md:inline-flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span dir="ltr">052-559-5975</span>
          </a>
          <button
            type="button"
            aria-label="פתח תפריט"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-neutral-900 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-black/10 bg-white md:hidden">
            <nav className="container-page flex flex-col py-3 text-base font-medium text-neutral-800">
              <a href="#top" onClick={() => setMenuOpen(false)} className="py-3">ראשי</a>
              <a href="#services" onClick={() => setMenuOpen(false)} className="py-3 border-t border-black/5">השירותים שלנו</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="py-3 border-t border-black/5">צור קשר</a>
              <a href={TEL} onClick={() => setMenuOpen(false)} className="mt-2 inline-flex items-center gap-2 border-t border-black/5 py-3 text-primary">
                <Phone className="h-4 w-4" />
                <span dir="ltr">052-559-5975</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="מכבש קרטון תעשייתי במחסן"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/75 to-background/10" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>

        {/* decorative animated balers */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 hidden md:block">
          <MiniBaler className="absolute bottom-12 left-10 h-24 w-20 text-primary/40" />
          <FloatBox className="absolute top-24 left-1/4 h-10 w-10 text-primary/30" delay="1s" />
          <FloatBox className="absolute bottom-32 left-1/2 h-8 w-8 text-primary/25" delay="2.5s" />
        </div>

        <div className="container-page relative grid min-h-[680px] items-center py-20 md:py-28 lg:min-h-[760px]">
          <div className="max-w-2xl">
            <h1 className="text-balance text-4xl font-black leading-[1.05] md:text-6xl lg:text-7xl">
              פתרונות דחיסת
              <br />
              <span className="text-primary">קרטון לעסקים</span>
            </h1>
            <h2 className="mt-5 text-xl font-semibold text-foreground/90 md:text-2xl">
              השכרה, מכירה, תיקון וקניית מכבשי קרטון משומשים
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              פתרונות מקצועיים למכבשי קרטון עבור עסקים, מחסנים, מפעלים ומרכזים לוגיסטיים.
              שירות מהיר, אמין ומותאם לצרכי העסק.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-3 rounded-md bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-[0_20px_50px_-25px_rgba(0,0,0,0.6)] transition hover:bg-primary-hover"
              >
                <WhatsAppIcon className="h-5 w-5" />
                שלחו הודעה בוואטסאפ
              </a>
              <a
                href={TEL}
                className="inline-flex items-center gap-3 rounded-md border border-border bg-surface/60 px-6 py-4 text-base font-semibold text-foreground backdrop-blur transition hover:bg-surface-elevated"
              >
                <Phone className="h-5 w-5 text-primary" />
                התקשרו עכשיו
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
              {["השכרה", "מכירה", "תיקון", "קניית מכבשים משומשים"].map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-primary" />}
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative overflow-hidden border-t border-border bg-surface/30 py-20 md:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
          <FloatBox className="absolute top-10 right-10 h-12 w-12 text-primary/25" />
          <MiniBaler className="absolute -bottom-2 right-6 h-20 w-16 text-primary/25" delay="0.8s" />
          <FloatBox className="absolute bottom-16 left-12 h-10 w-10 text-primary/20" delay="2s" />
        </div>
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black md:text-5xl">השירותים שלנו</h2>
            <p className="mt-4 text-muted-foreground">
              כל מה שהעסק שלכם צריך בתחום מכבשי הקרטון — במקום אחד, בצורה פשוטה, מקצועית ומהירה.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-primary/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                  <div className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary/30 bg-background/80 text-primary backdrop-blur">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service Van */}
      <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
            <img
              src={vanAsset.url}
              alt="ניידת שירות מכבשי קרטון"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              שירות תיקונים<br />
              <span className="text-primary">עד העסק</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              הצוות שלנו מספק שירות תיקונים ותחזוקה למכבשי קרטון, עם הגעה לעסק לפי צורך ותיאום מראש.
              המטרה שלנו היא להחזיר את המכבש לעבודה במהירות ולצמצם זמני השבתה.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "הגעה לעסק בתיאום מראש",
                "איתור תקלות וטיפול מקצועי",
                "תחזוקה ותיקון מערכות הידראוליות",
                "שירות לעסקים, מחסנים ומפעלים",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-md border border-border bg-surface/60 p-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="relative isolate overflow-hidden border-t border-border py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <img src={balesImg} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
          <MiniBaler className="absolute bottom-8 right-10 h-20 w-16 text-primary/40" />
          <MiniBaler className="absolute top-10 left-12 h-16 w-14 text-primary/30" delay="1.2s" />
          <FloatBox className="absolute top-1/3 right-1/4 h-9 w-9 text-primary/25" delay="2s" />
        </div>
        <div className="container-page relative">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-gradient-to-b from-surface/90 to-background/90 p-8 text-center backdrop-blur md:p-14">
            
            <h2 className="text-3xl font-black md:text-5xl">צריכים פתרון למכבש קרטון?</h2>
            <p className="mt-4 text-lg font-semibold text-foreground/90">
              דברו איתנו ונעזור לכם לבחור את הפתרון המתאים
            </p>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              שלחו לנו הודעה בוואטסאפ או התקשרו, ונחזור אליכם עם מענה מקצועי ומהיר.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 rounded-md bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition hover:bg-primary-hover"
              >
                <WhatsAppIcon className="h-5 w-5" />
                שלחו הודעה בוואטסאפ
              </a>
              <a
                href={TEL}
                className="inline-flex items-center gap-3 rounded-md border border-border bg-surface-elevated px-6 py-4 text-base font-semibold text-foreground transition hover:border-primary/40"
              >
                <Phone className="h-5 w-5 text-primary" />
                התקשרו עכשיו
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              מענה לעסקים, מחסנים, מפעלים ומרכזים לוגיסטיים בכל הארץ.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container-page grid gap-8 md:grid-cols-3">
          <div>
            <img src={logoAsset.url} alt="מכבשי קרטון פתרונות" className="h-14 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              פתרונות דחיסת קרטון לעסקים, מחסנים ומפעלים בכל הארץ.
            </p>
          </div>
          <div className="md:text-center">
            <h4 className="text-sm font-bold text-foreground">השירותים שלנו</h4>
            <p className="mt-3 text-sm text-muted-foreground">
              השכרה <span className="text-primary">•</span> מכירה <span className="text-primary">•</span> תיקון <span className="text-primary">•</span> קניית מכבשים משומשים
            </p>
          </div>
          <div className="md:text-end">
            <h4 className="text-sm font-bold text-foreground">דברו איתנו</h4>
            <p className="mt-3 text-sm text-muted-foreground" dir="ltr">052-559-5975</p>
          </div>
        </div>
        <div className="container-page mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} מכבשי קרטון פתרונות. כל הזכויות שמורות.
        </div>
      </footer>

      {/* Floating contact buttons — visible on all screens, follow scroll */}
      <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-3">
        <a
          href={WA}
          target="_blank"
          rel="noopener"
          aria-label="שלחו הודעה בוואטסאפ"
          className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_30px_-8px_rgba(0,0,0,0.6)] ring-1 ring-black/10 transition hover:scale-105 hover:bg-primary-hover"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
        <a
          href={TEL}
          aria-label="התקשרו עכשיו"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface-elevated text-primary shadow-[0_12px_30px_-8px_rgba(0,0,0,0.6)] backdrop-blur transition hover:scale-105 md:hidden"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
