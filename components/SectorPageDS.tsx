import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';
import styles from './SectorPageDS.module.css';

interface Feature {
  icon: ReactNode;
  title: string;
  body: string;
}

interface SectorLink {
  label: string;
  href: string;
}

interface SectorPageDSProps {
  /** Lower-case sector name for the eyebrow, e.g. "workwear" */
  sectorLabel: string;
  h1: string;
  /** Exactly the two hero-body paragraphs from the mockup, verbatim */
  introParagraphs: [string, string];
  heroSecondaryCta: SectorLink;
  heroImage: { src: string; width: number; height: number; alt: string };
  shotCaption: string;
  /** Optional plate diagram to render between hero and features */
  plate?: ReactNode;
  featuresHeading: string;
  features: [Feature, Feature, Feature];
  otherSectors: SectorLink[];
  ctaLead: string;
}

/**
 * Shared template for the four DS-ported sector pages (workwear,
 * teamwear-clubwear, schoolwear, promotional-merchandise). Ported from
 * decoded-marketing's sectors-*.html mockups (hero-split / features
 * triplet / other-sectors nav / cta-strip), rebuilt against
 * ds-marketing.css's real class inventory instead of the mockups' own
 * site.css (.container->.wrap, .btn-primary/.btn-secondary->.btn--primary/
 * .btn--outline, .lead->.lede, .grid-3->.grid.grid--3). Layout that
 * ds-marketing.css doesn't already provide (hero-split grid, the photo
 * frame, the feature-mark icon) lives in SectorPageDS.module.css.
 *
 * The site-wide header/footer (components/Header.tsx, components/Footer.tsx)
 * are rendered globally in app/layout.tsx — this component is `<main>`
 * content only, matching every other page in the app.
 */
export function SectorPageDS({
  sectorLabel,
  h1,
  introParagraphs,
  heroSecondaryCta,
  heroImage,
  shotCaption,
  plate,
  featuresHeading,
  features,
  otherSectors,
  ctaLead,
}: SectorPageDSProps) {
  return (
    <>
      {/* HERO SPLIT */}
      <section className={`g-off ${styles.heroSection}`}>
        <div className={`wrap ${styles.heroSplit}`}>
          <div>
            <span className="eyebrow">Sector · {sectorLabel}</span>
            <h1>{h1}</h1>
            <div className={styles.heroBody}>
              <p>{introParagraphs[0]}</p>
              <p>{introParagraphs[1]}</p>
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
              <Link className="btn btn--outline" href={heroSecondaryCta.href}>
                {heroSecondaryCta.label} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div>
            <div className={styles.photo}>
              <Image
                src={heroImage.src}
                width={heroImage.width}
                height={heroImage.height}
                alt={heroImage.alt}
              />
            </div>
            <p className={styles.shotCaption}>{shotCaption}</p>
          </div>
        </div>
      </section>

      {/* PLATE DIAGRAM */}
      {plate && (
        <section className="g-navy">
          <div className="wrap">
            <div className="plate-scroll">
              <div className="plate-frame">
                {plate}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FEATURES TRIPLET */}
      <section className="g-white">
        <div className="wrap">
          <div className={styles.featuresIntro}>
            <span className="eyebrow">Where it usually breaks</span>
            <h2>{featuresHeading}</h2>
          </div>

          <div className="grid grid--3">
            {features.map((f) => (
              <div key={f.title} className={styles.feature}>
                <div className={styles.featureMark} aria-hidden="true">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SECTORS */}
      <section className={`g-navy ${styles.tight}`}>
        <div className="wrap">
          <span className="eyebrow">Other sectors</span>
          <h2 style={{ fontSize: '1.5rem', maxWidth: 'none' }}>Not quite your business?</h2>
          <div className="btn-row" style={{ marginTop: '22px' }}>
            {otherSectors.map((s) => (
              <Link key={s.href} className="btn btn--outline" href={s.href}>
                {s.label} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="g-off">
        <div className={`wrap ${styles.centred}`}>
          <h2>Book a free discovery call.</h2>
          <div className="hair" />
          <p className="lede">{ctaLead}</p>
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">Book a free discovery call</Link>
            <Link className="btn btn--outline" href="/clarity">
              See how a Clarity Audit works <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
