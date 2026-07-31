import React from "react";
import { MessageSquare, Circle, Moon, Shield, AlertTriangle, Check } from "lucide-react";

interface DownsellPageProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function DownsellPage({ onAccept, onDecline }: DownsellPageProps) {
  React.useEffect(() => {
    const existingScript = document.querySelector('script[src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"]');
    
    const initWidget = () => {
      if ((window as any).checkoutElements) {
        try {
          (window as any).checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        } catch (err) {
          console.error("Hotmart initialization error:", err);
        }
      }
    };

    if (existingScript) {
      initWidget();
    } else {
      const script = document.createElement("script");
      script.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
      script.async = true;
      script.onload = () => {
        initWidget();
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="downsell-container">
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg: #14120f;
          --bg-panel: #1c1813;
          --ink: #ede3d0;
          --ink-dim: #b9ac93;
          --thread: #9c1f1a;
          --thread-bright: #c9302a;
          --gold: #c69a4e;
          --sage: #5f7050;
          --line: #332c22;
        }

        .downsell-container {
          background: var(--bg);
          color: var(--ink);
          font-family: 'Georgia', 'Iowan Old Style', serif;
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }

        .sans {
          font-family: 'Helvetica Neue', Arial, sans-serif;
        }

        .wrap {
          max-width: 760px;
          margin: 0 auto;
          padding: 0 24px;
        }

        img, svg {
          display: block;
          max-width: 100%;
        }

        .thread {
          width: 100%;
          height: 34px;
          display: block;
        }

        .thread path {
          fill: none;
          stroke: var(--thread);
          stroke-width: 2.5;
          stroke-linecap: round;
        }

        /* TOP CONFIRMATION BAR */
        .confirm-bar {
          background: var(--sage);
          color: #0f140c;
          text-align: center;
          padding: 12px 20px;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        /* HERO */
        .hero {
          padding: 56px 0 30px;
          text-align: center;
          background: radial-gradient(ellipse at 50% -10%, rgba(198,154,78,0.14), transparent 60%), var(--bg);
        }

        .eyebrow {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 12.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
        }

        .hero h1 {
          font-size: 36px;
          line-height: 1.2;
          color: var(--ink);
          margin-bottom: 16px;
        }

        .hero h1 em {
          font-style: italic;
          color: var(--thread-bright);
        }

        .hero p.sub {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 16.5px;
          color: var(--ink-dim);
          max-width: 520px;
          margin: 0 auto;
        }

        /* MOCKUP */
        .mockup-frame {
          margin: 34px auto 0;
          max-width: 340px;
          background: var(--bg-panel);
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 26px 22px;
          text-align: center;
          position: relative;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }

        .mockup-badge {
          position: absolute;
          top: -14px;
          right: -10px;
          background: var(--thread);
          color: #f6ede0;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-weight: 800;
          font-size: 13px;
          padding: 8px 14px;
          border-radius: 20px;
          transform: rotate(6deg);
          box-shadow: 0 6px 14px rgba(0,0,0,0.4);
        }

        .mockup-eyebrow {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: var(--gold);
          font-weight: 700;
          margin-bottom: 10px;
        }

        .mockup-title {
          font-size: 22px;
          color: var(--ink);
          font-weight: 800;
          line-height: 1.25;
          margin-bottom: 8px;
        }

        .mockup-thread {
          width: 70px;
          margin: 10px auto;
        }

        .mockup-sub {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 11.5px;
          color: var(--ink-dim);
          font-style: italic;
        }

        /* WHY DIFFERENT */
        section {
          padding: 44px 0;
        }

        .section-title {
          font-size: 26px;
          color: var(--ink);
          text-align: center;
          margin-bottom: 14px;
        }

        .section-title .accent {
          color: var(--thread-bright);
          font-style: italic;
        }

        .section-sub {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          color: var(--ink-dim);
          text-align: center;
          max-width: 520px;
          margin: 0 auto 30px;
          font-size: 15px;
        }

        .compare {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 10px;
        }

        .compare-col {
          border-radius: 6px;
          padding: 20px 18px;
          border: 1px solid var(--line);
        }

        .compare-col.standard {
          background: rgba(0,0,0,0.18);
        }

        .compare-col.extins {
          background: rgba(156,31,26,0.10);
          border-color: var(--thread);
        }

        .compare-label {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.05em;
          margin-bottom: 10px;
        }

        .compare-col.standard .compare-label {
          color: var(--ink-dim);
        }

        .compare-col.extins .compare-label {
          color: var(--thread-bright);
        }

        .compare-col ul {
          list-style: none;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 13.5px;
          color: var(--ink);
        }

        .compare-col li {
          padding: 6px 0;
        }

        .compare-col.standard li {
          color: var(--ink-dim);
        }

        /* WHAT'S INSIDE */
        .inside-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 30px;
        }

        .inside-card {
          background: var(--bg-panel);
          border: 1px solid var(--line);
          border-radius: 5px;
          padding: 20px 18px;
        }

        .inside-card .glyph {
          font-size: 22px;
          margin-bottom: 8px;
          display: block;
        }

        .inside-card h3 {
          font-size: 16px;
          color: var(--gold);
          margin-bottom: 6px;
        }

        .inside-card p {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 13px;
          color: var(--ink-dim);
        }

        /* OFFER */
        .offer {
          text-align: center;
          background: radial-gradient(ellipse at 50% 0%, rgba(198,154,78,0.10), transparent 60%), var(--bg);
        }

        .scarcity {
          display: inline-block;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 12.5px;
          color: #f2d9c9;
          background: rgba(156,31,26,0.22);
          border: 1px solid rgba(156,31,26,0.55);
          border-radius: 20px;
          padding: 7px 16px;
          margin-bottom: 20px;
        }

        .price-old {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          color: var(--ink-dim);
          text-decoration: line-through;
          font-size: 17px;
        }

        .price-new {
          font-size: 58px;
          color: var(--thread-bright);
          margin: 4px 0 20px;
        }

        .price-new span {
          font-size: 22px;
          vertical-align: super;
        }

        .cta-btn {
          display: inline-block;
          background: var(--thread);
          color: #f6ede0;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-weight: 700;
          font-size: 17px;
          padding: 18px 36px;
          border-radius: 3px;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 8px 24px rgba(156,31,26,0.35);
          transition: transform .15s ease, box-shadow .15s ease;
          cursor: pointer;
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(156,31,26,0.45);
        }

        .trust-row {
          display: flex;
          justify-content: center;
          gap: 18px;
          margin-top: 16px;
          flex-wrap: wrap;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 12px;
          color: var(--ink-dim);
        }

        .decline-link {
          display: block;
          margin-top: 26px;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 13.5px;
          color: var(--ink-dim);
          text-decoration: underline;
          text-underline-offset: 3px;
          cursor: pointer;
        }

        .decline-link:hover {
          color: var(--ink);
        }

        /* TESTIMONIAL */
        .testimonial {
          background: var(--bg-panel);
          border: 1px solid var(--line);
          border-left: 3px solid var(--thread);
          border-radius: 4px;
          padding: 22px 24px;
          max-width: 560px;
          margin: 0 auto;
        }

        .stars {
          color: var(--gold);
          font-size: 14px;
          margin-bottom: 10px;
          letter-spacing: 2px;
        }

        .testimonial p {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 14.5px;
          color: var(--ink);
          font-style: italic;
          margin-bottom: 12px;
        }

        .who {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 12.5px;
          color: var(--ink-dim);
        }

        .who b {
          color: var(--gold);
        }

        footer {
          text-align: center;
          padding: 28px 24px 46px;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 11px;
          color: #6b6252;
        }

        @media (max-width:640px) {
          .hero h1 {
            font-size: 28px;
          }
          .inside-grid, .compare {
            grid-template-columns: 1fr;
          }
          .price-new {
            font-size: 46px;
          }
          .section-title {
            font-size: 22px;
          }
        }
      ` }} />

      {/* ============ BARRA DI CONFERMA ORDINE ============ */}
      <div className="confirm-bar flex items-center justify-center gap-1.5">
        <Check className="w-4 h-4 text-[#0f140c]" />
        <span>Comanda ta a fost confirmată — verifică emailul pentru acces</span>
      </div>

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">AȘTEAPTĂ! O REZOLVARE MAI RAPIDĂ...</div>
          <h1 className="display">Vrei Doar <em>Descântecele Esențiale</em>?</h1>
          <p className="sub sans">Dacă nu ai nevoie de tot pachetul extins, îți punem la dispoziție exclusiv formulele și descântecele secrete ale bunicii, fără materialele teoretice, la un preț simbolic.</p>

          <div className="mt-8 flex justify-center">
            <picture className="block max-w-[320px] w-full rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-[var(--line)]">
              <source srcSet="https://res.cloudinary.com/dgncwrnvw/image/upload/v1785530366/ChatGPT_Image_31_lug_2026_17_23_48_czmtoe.avif" type="image/avif" />
              <img 
                src="https://res.cloudinary.com/dgncwrnvw/image/upload/v1785530366/ChatGPT_Image_31_lug_2026_17_23_48_pjnvus.webp" 
                alt="Ghidul Zodiacal de Protecție și Prosperitate" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </picture>
          </div>
        </div>
      </section>

      <svg className="thread" viewBox="0 0 760 34" preserveAspectRatio="none">
        <path d="M0,17 C120,2 180,32 320,17 C460,2 520,32 660,17 C700,10 730,20 760,17" />
      </svg>

      {/* ============ DETALII VERSIUNE CONCENTRATĂ ============ */}
      <section>
        <div className="wrap">
          <h2 className="section-title">Nu e doar «mai mult». E <span className="accent">un sistem complet</span></h2>
          <p className="section-sub sans">Diferența dintre ce ai deja și ediția concentrată de descântece.</p>
          
          <div className="compare">
            <div className="compare-col standard">
              <div className="compare-label sans">CE EXCLUDEM</div>
              <ul>
                <li>· Explicațiile teoretice lungi</li>
                <li>· Calendarul complet al sărbătorilor</li>
                <li>· Ghidul extins de plante</li>
              </ul>
            </div>
            <div className="compare-col extins">
              <div className="compare-label sans">CE PĂSTREZI</div>
              <ul>
                <li>· Formulele de Descântec Tradițional exact cum se rostesc în șoaptă</li>
                <li>· Ritualul corect de legare și activare a Firului Roșu</li>
                <li>· Descântecul de Liniște de Seară pentru somn lin și alungarea grijilor</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CE GĂSEȘTI ============ */}
      <section className="offer" style={{ background: "var(--bg-panel)" }}>
        <div className="wrap" style={{ textAlign: "left" }}>
          <h2 className="section-title">Cele 3 secrete practice <span className="accent">pe care le primești</span></h2>
          <div className="inside-grid">
            <div className="inside-card">
              <MessageSquare className="w-6 h-6 text-[var(--gold)] mb-2" />
              <h3>Cuvintele Spuse în Șoaptă</h3>
              <p className="sans">Cuvintele transmise din moși-strămoși în satele Bucovinei pentru eliminarea imediată a deochiului.</p>
            </div>
            <div className="inside-card">
              <Circle className="w-6 h-6 text-[#c9302a] fill-[#c9302a] mb-2" />
              <h3>Binecuvântarea Firului Roșu</h3>
              <p className="sans">Modul tradițional de activare și legare a firului roșu pentru tine și cei dragi.</p>
            </div>
            <div className="inside-card">
              <Moon className="w-6 h-6 text-[var(--gold)] mb-2" />
              <h3>Liniștea de Seară</h3>
              <p className="sans">Scurt ritual rostit înainte de culcare pentru protejarea casei de neliniște sufletească.</p>
            </div>
            <div className="inside-card">
              <Shield className="w-6 h-6 text-[var(--gold)] mb-2" />
              <h3>Acces pe Viață</h3>
              <p className="sans">Ghidul digital rămâne al tău definitiv, descărcabil oricând pe telefon sau calculator.</p>
            </div>
          </div>
        </div>
      </section>

      <svg className="thread" viewBox="0 0 760 34" preserveAspectRatio="none">
        <path d="M0,17 C100,32 160,2 300,17 C440,32 500,2 640,17 C690,24 720,10 760,17" />
      </svg>

      {/* ============ TESTIMONIAL ============ */}
      <section>
        <div className="wrap">
          <div className="testimonial">
            <div className="stars">★★★★★</div>
            <p className="sans">"Mă durea capul îngrozitor și simțeam o greutate ciudată. Am citit formula de descântec și în 5 minute m-am liniștit complet. E uimitor cât de repede funcționează."</p>
            <div className="who sans"><b>Maria D.</b> — Suceava</div>
          </div>
        </div>
      </section>

      {/* ============ OFERTĂ ============ */}
      <section className="offer" id="oferta">
        <div className="wrap">
          <div className="scarcity sans flex items-center justify-center gap-1.5 mx-auto w-fit">
            <AlertTriangle className="w-4 h-4 text-[#f2d9c9] flex-shrink-0" />
            <span>Ultima oportunitate înainte de confirmarea finală</span>
          </div>
          <h2 className="section-title">Ghidul Esențial, la preț de <span className="accent">urgență</span></h2>
          
          {/* HOTMART - Sales Funnel Widget */}
          <div id="hotmart-sales-funnel" className="my-6 min-h-[300px]"></div>
        </div>
      </section>

      <footer>
        <p>© 2026 Tradiții Străbune — Toate drepturile rezervate.</p>
      </footer>

    </div>
  );
}
