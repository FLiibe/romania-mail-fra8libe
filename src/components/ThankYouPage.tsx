import React from "react";
import { Check } from "lucide-react";

interface ThankYouPageProps {
  purchasedUpsell: boolean;
  purchasedDownsell: boolean;
}

export default function ThankYouPage({ purchasedUpsell, purchasedDownsell }: ThankYouPageProps) {
  return (
    <div className="thankyou-container">
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

        .thankyou-container {
          background: var(--bg);
          color: var(--ink);
          font-family: 'Georgia', 'Iowan Old Style', serif;
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .sans {
          font-family: 'Helvetica Neue', Arial, sans-serif;
        }

        .wrap {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* HERO */
        .hero {
          padding: 100px 0;
          text-align: center;
          background: radial-gradient(ellipse at 50% -10%, rgba(95,112,80,0.16), transparent 60%), var(--bg);
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .check-badge {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: rgba(95,112,80,0.15);
          border: 2px solid var(--sage);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: var(--sage);
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
          font-size: 38px;
          line-height: 1.2;
          color: var(--ink);
          margin-bottom: 16px;
        }

        .hero h1 em {
          font-style: italic;
          color: var(--sage);
        }

        .hero p.sub {
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 16.5px;
          color: var(--ink-dim);
          max-width: 480px;
          margin: 0 auto;
        }

        footer {
          text-align: center;
          padding: 28px 24px 46px;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          font-size: 11px;
          color: #6b6252;
          border-top: 1px solid var(--line);
        }

        @media (max-width: 600px) {
          .hero h1 {
            font-size: 29px;
          }
        }
      ` }} />

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="wrap">
          <div className="check-badge">
            <Check className="w-10 h-10 text-[var(--sage)]" />
          </div>
          <div className="eyebrow">COMANDĂ FINALIZATĂ CU SUCCES</div>
          <h1 className="display">Bine ai Venit în<br /><em>Tradiții Străbune</em></h1>
          <p className="sub sans">Comanda ta este confirmată. Accesul la ghidurile tale ajunge direct pe email, în câteva minute — nu trebuie să faci nimic altceva acum.</p>
        </div>
      </section>

      <footer>
        <p>© 2026 Tradiții Străbune — Toate drepturile rezervate.</p>
      </footer>

    </div>
  );
}
