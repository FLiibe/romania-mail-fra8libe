import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, 
  ShoppingCart, 
  Smartphone,
  BookOpen,
  Shield,
  EyeOff, 
  Clock, 
  Home, 
  ShieldCheck, 
  Flame, 
  Scroll, 
  Briefcase, 
  Moon, 
  AlertCircle, 
  Lock, 
  CheckCircle 
} from "lucide-react";

const notificationsData = [
  { name: "Mariana S.", city: "București", time: "acum 2 minute" },
  { name: "Elena R.", city: "Cluj-Napoca", time: "acum 5 minute" },
  { name: "Beatrice L.", city: "Timișoara", time: "acum 12 minute" },
  { name: "Fernanda M.", city: "Iași", time: "acum 8 minute" },
  { name: "Carla P.", city: "Constanța", time: "acum 15 minute" },
  { name: "Amanda K.", city: "Brașov", time: "acum 3 minute" },
  { name: "Regina V.", city: "Craiova", time: "acum 20 minute" },
  { name: "Patrícia G.", city: "Galați", time: "acum 7 minute" },
  { name: "Letícia B.", city: "Oradea", time: "acum 10 minute" },
  { name: "Cláudia O.", city: "Sibiu", time: "acum 4 minute" },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentNotification, setCurrentNotification] = useState<number | null>(null);

  useEffect(() => {
    const showRandomNotification = () => {
      const randomIndex = Math.floor(Math.random() * notificationsData.length);
      setCurrentNotification(randomIndex);
      
      // Hide after 6 seconds
      setTimeout(() => {
        setCurrentNotification(null);
      }, 6000);
    };

    // Initial delay: 2 seconds after page load
    const initialTimer = setTimeout(showRandomNotification, 2000);

    // Interval for subsequent notifications: Every 12 seconds
    const interval = setInterval(showRandomNotification, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const toggleFaq = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    const search = window.location.search;
    
    // If it's an internal hash link on the same page, we scroll.
    if (url.startsWith('#') && url !== '#') {
      const targetId = url.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (url === '#' || !url) {
      // Smooth scroll to offer section by default if URL is '#'
      const element = document.getElementById('oferta');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const separator = url.includes('?') ? '&' : '?';
    const cleanSearch = search.startsWith('?') ? search.substring(1) : search;
    const finalUrl = cleanSearch ? `${url}${separator}${cleanSearch}` : url;
    
    window.location.href = finalUrl;
  };

  const faqData = [
    {
      q: "Trebuie să am experiență cu ritualuri sau tradiții?",
      a: "Nu. Ghidul este scris pentru orice femeie, indiferent de cunoștințele pe care le are deja. Totul este explicat pas cu pas, fără termeni complicați."
    },
    {
      q: "Plantele și materialele sunt greu de găsit?",
      a: "Nu, toate se găsesc la piață, la magazinul din colț sau chiar în bucătăria ta, cum ar fi busuiocul, usturoiul, sarea sau ața roșie."
    },
    {
      q: "Cum primesc materialul după cumpărare?",
      a: "Instant, în format digital, pe email. Poți citi ghidul direct de pe telefon sau laptop, oricând dorești."
    },
    {
      q: "Dacă nu mi se pare mie sau nu simt nicio diferență?",
      a: "Ai garanție 7 zile. Dacă nu ești mulțumită, îți returnăm banii, fără întrebări."
    }
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">Tradiții Străbune · Ritualuri de Casă</div>
          <h1 className="display">
            Bunica Ta Știa Să Te Ferească de Deochi.<br />
            <em>Tu Mai Știi?</em>
          </h1>
          <p className="sub sans">
            Ritualurile de protecție și purificare transmise din generație în generație sunt simple, nu necesită costuri mari sau produse scumpe, iar eficiența lor se păstrează și astăzi.
          </p>
          <div className="my-8 flex justify-center">
            <img 
              src="https://res.cloudinary.com/dgncwrnvw/image/upload/v1784914803/mockup_d6qjqh.png" 
              alt="Ghidul Ritualurilor Străbune Mockup" 
              className="w-full max-w-lg h-auto object-contain mx-auto filter drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <a 
            id="977c361c-28d3-013d-3b65-f4c59a4a9495"
            href="#oferta" 
            className="cta-btn"
            onClick={(e) => handleNavigation(e, "#oferta")}
          >
            Vreau Ritualurile de Protecție →
          </a>
          <div className="microcopy flex items-center justify-center gap-1.5 mt-4 text-[var(--ink-dim)]">
            <Smartphone className="w-4 h-4 text-[var(--gold)] opacity-85" />
            <span>Acces digital imediat, pe telefon sau laptop</span>
          </div>
        </div>
      </section>

      {/* THREAD DIVIDER 1 */}
      <svg className="thread" viewBox="0 0 760 34" preserveAspectRatio="none">
        <path d="M0,17 C120,2 180,32 320,17 C460,2 520,32 660,17 C700,10 730,20 760,17" />
      </svg>

      {/* PAIN POINTS */}
      <section className="pains">
        <div className="wrap">
          <div className="pains-grid">
            <div className="pain-card flex flex-col gap-3 items-start">
              <div className="w-10 h-10 rounded-full bg-[rgba(156,31,26,0.12)] flex items-center justify-center border border-[rgba(156,31,26,0.25)] flex-shrink-0">
                <EyeOff className="w-5 h-5 text-[var(--thread-bright)]" />
              </div>
              <span className="sans leading-relaxed">
                Te simți "deocheat" fără să știi de ce, iar ziua nu mai are sens
              </span>
            </div>
            <div className="pain-card flex flex-col gap-3 items-start">
              <div className="w-10 h-10 rounded-full bg-[rgba(156,31,26,0.12)] flex items-center justify-center border border-[rgba(156,31,26,0.25)] flex-shrink-0">
                <Clock className="w-5 h-5 text-[var(--thread-bright)]" />
              </div>
              <span className="sans leading-relaxed">
                Obosești fără motiv, dormi agitat, te trezești sleit
              </span>
            </div>
            <div className="pain-card flex flex-col gap-3 items-start">
              <div className="w-10 h-10 rounded-full bg-[rgba(156,31,26,0.12)] flex items-center justify-center border border-[rgba(156,31,26,0.25)] flex-shrink-0">
                <Home className="w-5 h-5 text-[var(--thread-bright)]" />
              </div>
              <span className="sans leading-relaxed">
                Simți că cineva "aduce ghinion" în casa ta sau la job
              </span>
            </div>
            <div className="pain-card flex flex-col gap-3 items-start">
              <div className="w-10 h-10 rounded-full bg-[rgba(156,31,26,0.12)] flex items-center justify-center border border-[rgba(156,31,26,0.25)] flex-shrink-0">
                <Shield className="w-5 h-5 text-[var(--thread-bright)]" />
              </div>
              <span className="sans leading-relaxed">
                Vrei să înțelegi cum se folosește corect firul roșu, dincolo de simpla purtare a acestuia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <section>
        <div className="wrap">
          <h2 className="section-title">
            Nu planta face minunea. <span className="thread-bright">Ci descântecul rostit cu intenție curată.</span>
          </h2>
          <p className="section-sub">
            Oricine poate pune busuioc într-un vas cu apă. Diferența reală o face să știi <b>ce descântec</b>, <b>în care zi</b> și <b>cu ce scop</b> pentru a repeta ritualul cu mintea pe deplin limpede. Exact asta îți dă acest ghid: nu doar rețetele, ci înțelegerea modului în care fiecare element acționează asupra ta.
          </p>

          <div className="steps">
            <div className="step">
              <div className="num sans">01</div>
              <div>
                <h3>Recunoști ce ți se întâmplă</h3>
                <p className="sans">Deochi, energie luată sau blocaj: ghidul te ajută să identifici exact ce se petrece și ce ritual este potrivit pentru momentul tău.</p>
              </div>
            </div>
            <div className="step">
              <div className="num sans">02</div>
              <div>
                <h3>Pregătești cu intenție reală</h3>
                <p className="sans">Fiecare ritual vine explicat simplu: ce zi, ce plante, ce cuvinte și ce fir, pas cu pas, cald și simplu ca de la bunica, departe de limbajul unei cărți complicate.</p>
              </div>
            </div>
            <div className="step">
              <div className="num sans">03</div>
              <div>
                <h3>Simți diferența în corp și-n casă</h3>
                <p className="sans">Prin practică consecventă, oboseala fără motiv se stinge, casa se simte mult mai curată, iar tu regăsești starea de protecție și liniște.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREAD DIVIDER 2 */}
      <svg className="thread" viewBox="0 0 760 34" preserveAspectRatio="none">
        <path d="M0,17 C100,32 160,2 300,17 C440,32 500,2 640,17 C690,24 720,10 760,17" />
      </svg>

      {/* WHAT'S INSIDE */}
      <section className="inside">
        <div className="wrap">
          <h2 className="section-title">Ce găsești în <span className="thread-bright">ghid</span></h2>
          <p className="section-sub">Tot ce ai nevoie pentru a-ți proteja casa, familia și energia: tradiții românești autentice, explicate clar.</p>
          <div className="inside-grid">
            <div className="inside-card flex flex-col gap-3 items-start">
              <div className="w-10 h-10 rounded-lg bg-[rgba(198,154,78,0.08)] flex items-center justify-center border border-[rgba(198,154,78,0.2)] flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-[var(--gold)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--gold)]">Ritualuri de Protecție</h3>
              <p className="sans text-sm text-[var(--ink-dim)] leading-relaxed">Fir roșu, usturoi sau sare la ușă. Învață cum se folosesc corect pentru a te feri de deochi și de energiile grele din jurul tău.</p>
            </div>
            <div className="inside-card flex flex-col gap-3 items-start">
              <div className="w-10 h-10 rounded-lg bg-[rgba(198,154,78,0.08)] flex items-center justify-center border border-[rgba(198,154,78,0.2)] flex-shrink-0">
                <Flame className="w-5 h-5 text-[var(--gold)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--gold)]">Purificarea Casei</h3>
              <p className="sans text-sm text-[var(--ink-dim)] leading-relaxed">Busuioc, tămâie și cimbru. Află cum să afumi casa pas cu pas pentru un reset complet, mai ales după neînțelegeri sau vizite nepoftite.</p>
            </div>
            <div className="inside-card flex flex-col gap-3 items-start">
              <div className="w-10 h-10 rounded-lg bg-[rgba(198,154,78,0.08)] flex items-center justify-center border border-[rgba(198,154,78,0.2)] flex-shrink-0">
                <Scroll className="w-5 h-5 text-[var(--gold)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--gold)]">Descântece de Liniște</h3>
              <p className="sans text-sm text-[var(--ink-dim)] leading-relaxed">Formule tradiționale, explicate simplu, pentru zilele în care simți că totul este prea greu de purtat.</p>
            </div>
            <div className="inside-card flex flex-col gap-3 items-start">
              <div className="w-10 h-10 rounded-lg bg-[rgba(198,154,78,0.08)] flex items-center justify-center border border-[rgba(198,154,78,0.2)] flex-shrink-0">
                <Briefcase className="w-5 h-5 text-[var(--gold)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--gold)]">Protecție la Job și în Relații</h3>
              <p className="sans text-sm text-[var(--ink-dim)] leading-relaxed">Cum te poți feri de invidie și de energiile negative din jur, fie că vin de la colegi, cunoscuți sau vecini, păstrându-ți armonia fără niciun conflict.</p>
            </div>
            <div className="inside-card flex flex-col gap-3 items-start">
              <div className="w-10 h-10 rounded-lg bg-[rgba(198,154,78,0.08)] flex items-center justify-center border border-[rgba(198,154,78,0.2)] flex-shrink-0">
                <Moon className="w-5 h-5 text-[var(--gold)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--gold)]">Calendarul Lunar al Ritualurilor</h3>
              <p className="sans text-sm text-[var(--ink-dim)] leading-relaxed">Alegerea zilei potrivite (marți, joi, sâmbătă) și a fazei lunii. Descoperă când anume funcționează optim fiecare ritual și când este complet contraindicat.</p>
            </div>
            <div className="inside-card flex flex-col gap-3 items-start">
              <div className="w-10 h-10 rounded-lg bg-[rgba(198,154,78,0.08)] flex items-center justify-center border border-[rgba(198,154,78,0.2)] flex-shrink-0">
                <Home className="w-5 h-5 text-[var(--gold)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--gold)]">Ritualuri de Schimbare</h3>
              <p className="sans text-sm text-[var(--ink-dim)] leading-relaxed">La mutarea într-o casă nouă, la naștere, nuntă sau început de an: protecția potrivită pentru toate momentele de tranziție din viață.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section>
        <div className="wrap">
          <div className="author">
            <div className="author-photo">
              <img 
                src="https://res.cloudinary.com/dgncwrnvw/image/upload/v1784909356/ChatGPT_Image_24_lug_2026_13_08_55_chzeld.png" 
                alt="Ileana Comșa" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3>Ileana Comșa</h3>
              <div className="role sans">Cunoscătoare de tradiții populare · 15+ ani</div>
              <p className="bio">
                Ileana a crescut într-un sat din Bucovina, învățând descântece și ritualuri de la bunica ei, așa cum se transmit în familie de generații. A adunat și sistematizat aceste tradiții orale pentru ca oricine, indiferent de locul în care se află, să le poată folosi corect acasă, oferind o alternativă de încredere în locul practicilor obscure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREAD DIVIDER 3 */}
      <svg className="thread" viewBox="0 0 760 34" preserveAspectRatio="none">
        <path d="M0,17 C120,2 180,32 320,17 C460,2 520,32 660,17 C700,10 730,20 760,17" />
      </svg>

      {/* OFFER */}
      <section className="offer" id="oferta">
        <div className="wrap">
          <div className="scarcity sans inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(156,31,26,0.18)] border border-[rgba(156,31,26,0.45)] mb-6 text-sm">
            <AlertCircle className="w-4 h-4 text-[#f2d9c9] flex-shrink-0" />
            <span>Au mai rămas doar 21 de accesuri la acest preț</span>
          </div>
          <h2 className="section-title">
            Tot ce ai nevoie, la un preț <span className="thread-bright">mai mic decât o cafea pe săptămână</span>
          </h2>
          <div className="price-old sans">Preț normal: 97 RON</div>
          <div className="price-new display">47<span>RON</span></div>
          <ul className="includes">
            <li>Ghidul complet de Ritualuri de Protecție și Purificare</li>
            <li>Ritualuri împotriva Deochiului și a energiilor grele</li>
            <li>Purificarea casei cu plante și fum, pas cu pas</li>
            <li>Descântece tradiționale de liniște și armonie</li>
            <li>Calendarul Lunar al Ritualurilor pe tot anul</li>
            <li><b>Bonus:</b> Ghidul Plantelor de Protecție (valoare 39 RON)</li>
            <li><b>Bonus:</b> Calendarul Ritualurilor pe tot Anul (valoare 25 RON)</li>
          </ul>
          <a 
            id="12ae56e4-5dae-b6ae-701d-094312389c24"
            href="https://pay.hotmart.com/S106869641Q" 
            className="cta-btn"
            onClick={(e) => handleNavigation(e, "https://pay.hotmart.com/S106869641Q")}
          >
            ✦ Vreau Ghidul Acum, 47 RON ✦
          </a>
          <div className="trust-row flex items-center justify-center gap-6 mt-6 flex-wrap text-sm text-[var(--ink-dim)]">
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-[var(--gold)]" /> Plată 100% sigură</span>
            <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-[var(--gold)]" /> Acces imediat</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-[var(--gold)]" /> Garanție 7 zile</span>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="wrap">
          <h2 className="section-title">Oameni reali, <span className="thread-bright">rezultate reale</span></h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="sans">"Trăiam epuizată, credeam că e doar de la muncă. După ce am învățat să mă protejez cu ritualul firului roșu de la Ileana, simt că oamenii negativi nu mai «trag» din energia mea. E o eliberare."</p>
              <div className="who sans"><b>Mihaela D.</b>, Cluj-Napoca</div>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="sans">"Ghidul e direct la subiect, fără povești inutile. Am făcut afumatul cu busuioc din carte și în câteva zile o situație blocată de luni s-a rezolvat. Energia contează când știi să o folosești."</p>
              <div className="who sans"><b>Andreea T.</b>, Iași</div>
            </div>
            <div className="testimonial">
              <div className="stars">★★★★★</div>
              <p className="sans">"Am crescut cu bunica mea făcând descântece, dar nu le mai știam. Ghidul m-a ajutat să reconectez cu tradiția și să o fac și pentru copiii mei. Merită fiecare leu."</p>
              <div className="who sans"><b>Raluca P.</b>, Timișoara</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (Interactive with Framer Motion Accordion) */}
      <section>
        <div className="wrap">
          <h2 className="section-title">Întrebări <span className="thread-bright">frecvente</span></h2>
          <div style={{ marginTop: "36px" }}>
            {faqData.map((item, index) => (
              <div key={index} className="faq-item">
                <button
                  className="w-full text-left flex justify-between items-center bg-transparent border-none p-0 cursor-pointer focus:outline-none"
                  onClick={(e) => toggleFaq(e, index)}
                  aria-expanded={openFaq === index}
                >
                  <h4 style={{ margin: 0 }}>{item.q}</h4>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className="w-5 h-5" style={{ color: 'var(--gold)' }} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="sans" style={{ marginTop: '10px' }}>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final">
        <div className="wrap">
          <h2 className="display">Meriți să te simți ușoară, protejată și liniștită.</h2>
          <p className="sub sans">Mii de femei au ales deja să-și protejeze energia și casa. Acum este rândul tău, iar investiția este mai mică decât costul unei cine în oraș.</p>
          <a 
            href="#oferta" 
            className="cta-btn"
            onClick={(e) => handleNavigation(e, "#oferta")}
          >
            ✦ Începe Protecția Acum, 47 RON ✦
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Ritualuri de Protecție și Purificare — Toate drepturile rezervate.</p>
        <p>
          Rezultatele pot varia de la persoană la persoană. Acest produs nu înlocuiește tratamentele medicale, psihologice sau psihiatrice și este oferit exclusiv în scop cultural și informativ, bazat pe tradiții populare românești.
        </p>
      </footer>

      {/* PURCHASE NOTIFICATION POPUP */}
      <AnimatePresence>
        {currentNotification !== null && (
          <motion.div
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -50, y: 20 }}
            className="fixed bottom-6 left-6 z-[9999] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] rounded-2xl p-5 border border-[#C9993A]/20 flex items-center gap-4 max-w-[340px] pointer-events-none"
          >
            <div className="w-12 h-12 bg-[#2D4A35] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
              <ShoppingCart className="w-6 h-6 text-[#E8C47A]" />
            </div>
            <div>
              <p className="text-[13px] font-bold text-[#1A2E20] leading-tight">
                {notificationsData[currentNotification].name} din {notificationsData[currentNotification].city}
              </p>
              <p className="text-[11px] text-[#4A5E50] opacity-80 mt-1 leading-snug">
                A achiziționat Ghidul de Ritualuri de Protecție {notificationsData[currentNotification].time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
