"use client";

import dynamic from "next/dynamic";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import { publication as p } from "./publication-config";

const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

type FlipApi = { pageFlip: () => { flipNext: () => void; flipPrev: () => void; turnToPage: (page: number) => void; getCurrentPageIndex: () => number } };

const CoverPage = forwardRef<HTMLDivElement>(function CoverPage(_, ref) {
  return (
    <article ref={ref} className="cover-page cartography-cover" aria-label="Magazine cover, page 1">
      <div className="cart-black-rail" aria-hidden="true" />
      <div className="cart-purple-field" aria-hidden="true" />
      <div className="cart-gold-datum" aria-hidden="true" />
      <p className="cart-vertical-label">OFFICIAL SPONSORSHIP PUBLICATION</p>
      <p className="cart-vertical-edition">{p.editionLabel}</p>
      <p className="cart-folio">VOL. 01<br />RVA / 2026<br />IMPACT ANNUAL</p>
      <header className="cart-masthead">
        <p>OFFICIAL SPONSORSHIP PUBLICATION · 2026 EDITION</p>
        <h1><span className="partner-word">PARTNER</span><span className="identity-line"><span className="with-word">WITH</span><span className="purpose-word">PURPOSE</span></span></h1>
        <div>{p.mastheadDescriptor}</div>
      </header>
      <p className="cart-side-year">{p.editionLabel}</p>
      <section className="cart-map" aria-label="Abstract editorial geometry inspired by Main Street, Richmond's urban grid, and the James River">
        <div className="cart-grid" aria-hidden="true">
          <i className="street street-main" /><i className="street street-broad" /><i className="street street-grace" /><i className="street street-franklin" /><i className="street street-cary" />
          <i className="cross cross-1" /><i className="cross cross-2" /><i className="cross cross-3" /><i className="cross cross-4" /><i className="cross cross-5" /><i className="cross cross-6" />
          <b className="river" /><b className="main-node" /><b className="capitol-axis" />
        </div>
        <span className="main-label">E. MAIN ST / 1705–1716</span>
        <span className="river-label">JAMES RIVER / FALL LINE</span>
        <span className="coordinate">37.5407° N / 77.4360° W</span>
        <span className="street-label broad-label">BROAD ST</span>
        <span className="street-label grace-label">GRACE ST</span>
        <span className="street-label franklin-label">FRANKLIN ST</span>
        <span className="street-label canal-label">CANAL WALK</span>
        <span className="district-label">SHOCKOE / CAPITOL / MONROE WARD</span>
        <div className="civic-mark" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      </section>
      <section className="cart-event">
        <h2><span>BACK TO SCHOOL</span><em>on Main</em></h2>
        <p>{p.subtitle}</p>
        <blockquote>{p.missionStatement}</blockquote>
      </section>
      <section className="cart-metadata" aria-label="Event details">
        <div><small>01 / DATE</small><strong>SUNDAY<br />AUGUST 23, 2026</strong></div>
        <div><small>02 / TIME</small><strong>1:00 PM–<br />6:00 PM</strong></div>
        <div><small>03 / PLACE</small><strong>RICHMOND<br />VIRGINIA</strong></div>
      </section>
      <p className="cart-tagline"><span>FRESH FITS.</span><em>FRESH STYLES.</em><span>BRIGHT FUTURES.</span></p>
      <section className="cart-presented publisher-imprint" aria-label="Publication partners">
        <div className="imprint-grid" aria-hidden="true"><i /></div>
        <p className="imprint-intro">A collaborative initiative by</p>
        <p className="imprint-names">{p.coverPublisherCredits.join(" · ")}</p>
        <div className="imprint-meta"><span>PUBLICATION IMPRINT</span><span>RICHMOND, VIRGINIA</span><span>VOL. 01 / 2026</span></div>
      </section>
    </article>
  );
});

const LetterPage = forwardRef<HTMLDivElement>(function LetterPage(_, ref) {
  return (
    <article ref={ref} className="letter-page" aria-label="Page 2: Letter From the Hosts">
      <div className="letter-issue-rail" aria-hidden="true"><span>02</span><small>LETTER FROM THE HOSTS</small></div>
      <header className="letter-header">
        <p>PARTNER WITH PURPOSE <i>/</i> VOL. 01</p>
        <span>E. MAIN STREET · 37.5407° N / 77.4360° W</span>
      </header>
      <main className="letter-editorial">
        <section className="letter-opening">
          <div><p>OPENING LETTER · 2026 EDITION</p><h2>A Letter <span>From the Hosts</span></h2></div>
          <blockquote>“{p.hostLetter.pullQuote}”</blockquote>
          <div className="letter-map-fragment" aria-hidden="true"><i /><b /></div>
        </section>
        <section className="approved-letter" aria-label="Letter">
          <p className="letter-salutation">{p.hostLetter.salutation}</p>
          {p.hostLetter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
        <section className="letter-signature" aria-label="Signed by the hosts">
          <p>{p.hostLetter.closing}</p>
          <div>{p.hostLetter.signatories.map((name) => <div className="signature-entry" key={name}><i aria-hidden="true" /><span>{name}</span></div>)}</div>
        </section>
      </main>
      <footer className="letter-footer"><p>PARTNER WITH PURPOSE <i>/</i> THE OFFICIAL SPONSORSHIP GUIDE</p><strong>02</strong></footer>
    </article>
  );
});

const AboutPage = forwardRef<HTMLDivElement>(function AboutPage(_, ref) {
  const icons = [
    <><path d="M7 6l2-2h6l2 2 3 2-2 4-2-1v9H8v-9l-2 1-2-4 3-2Z" /></>,
    <><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="m10.5 10.5 3 3M13.5 10.5l-3 3M12 13v7"/></>,
    <><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z"/><path d="M8 4v13a3 3 0 0 0 3 3M9 8h6M9 12h6"/></>,
    <><path d="M6 18V7l12-3v11"/><circle cx="5" cy="18" r="3"/><circle cx="17" cy="15" r="3"/></>,
    <><circle cx="8" cy="8" r="3"/><circle cx="16" cy="9" r="3"/><path d="M3 20c0-4 2-7 5-7s5 3 5 7M12 20c0-3 1.6-5.5 4-5.5S20 17 20 20"/></>,
    <><rect x="3" y="6" width="14" height="11" rx="1"/><path d="m17 9 4-2v9l-4-2M7 10h6M7 13h4"/></>,
    <><path d="M4 9h16l-1 11H5L4 9Z"/><path d="M7 9V6a5 5 0 0 1 10 0v3M9 13h6"/></>,
  ];
  return (
    <article ref={ref} className="editorial-page about-page" aria-label="Page 3: About the Experience">
      <div className="editorial-rail" aria-hidden="true"><span>03</span><small>ABOUT THE EXPERIENCE</small></div>
      <header className="editorial-header"><p>PARTNER WITH PURPOSE <i>/</i> VOL. 01</p><span>E. MAIN STREET · RICHMOND, VIRGINIA</span></header>
      <main className="about-editorial">
        <section className="about-opener"><p>{p.aboutExperience.eyebrow}</p><h2>About <span>the Experience</span></h2><blockquote>{p.aboutExperience.statement}</blockquote></section>
        <section className="about-narrative"><p className="about-dropcap">{p.aboutExperience.description}</p><aside className="about-goal"><small>{p.aboutExperience.goalLabel}</small><div><strong>50</strong><p>FAMILIES</p></div><span>ONE SHARED<br />COMMUNITY</span></aside></section>
        <section className="about-components" aria-label="Event components"><header><small>THE EXPERIENCE <i>/</i> SEVEN POINTS OF CARE</small><p>{p.tagline}</p></header><ol>{p.aboutExperience.components.map((component, index) => <li key={component}><svg viewBox="0 0 24 24" aria-hidden="true">{icons[index]}</svg><p>{component}</p></li>)}</ol></section>
        <figure className="about-documentary"><img src="/assets/editorial/community-preparation-wide.png" alt="Volunteers and families preparing clothing, backpacks, and school supplies together" /><figcaption>PREPARATION · CONNECTION · COMMUNITY</figcaption></figure>
        <section className="about-details"><div><small>DATE</small><strong>{p.date}</strong></div><div><small>TIME</small><strong>{p.time}</strong></div><div><small>LOCATIONS</small><strong>1705 + 1716 E MAIN STREET</strong></div></section>
        <div className="about-cartography" aria-hidden="true"><i /><b /><span>JAMES RIVER / FALL LINE</span></div>
      </main>
      <footer className="editorial-footer"><p>PARTNER WITH PURPOSE <i>/</i> THE OFFICIAL SPONSORSHIP GUIDE</p><strong>03</strong></footer>
    </article>
  );
});

const EmotionalFeaturePage = forwardRef<HTMLDivElement>(function EmotionalFeaturePage(_, ref) {
  return (
    <article ref={ref} className="editorial-page feature-page" aria-label="Page 4: More Than a Backpack">
      <div className="editorial-rail" aria-hidden="true"><span>04</span><small>COMMUNITY IMPACT</small></div>
      <header className="editorial-header feature-header"><p>PARTNER WITH PURPOSE <i>/</i> VOL. 01</p><span>BACK TO SCHOOL ON MAIN · RICHMOND</span></header>
      <main className="feature-editorial">
        <figure className="feature-hero"><img src="/assets/editorial/more-than-a-backpack-hero.png" alt="A child receiving a backpack while volunteers support families and provide hair services" /><div className="feature-image-wash" aria-hidden="true" /><figcaption>RICHMOND · COMMUNITY IN ACTION</figcaption></figure>
        <section className="feature-title"><p>THE HUMAN STORY <i>/</i> 2026</p><h2>More Than<br />a Backpack.</h2><blockquote>{p.emotionalFeature.statement}</blockquote></section>
        <section className="feature-story"><p>{p.emotionalFeature.story}</p></section>
        <section className="feature-statistics" aria-label="Community impact statistics">{p.emotionalFeature.statistics.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</section>
      </main>
      <footer className="editorial-footer feature-footer"><p>PARTNER WITH PURPOSE <i>/</i> THE OFFICIAL SPONSORSHIP GUIDE</p><strong>04</strong></footer>
    </article>
  );
});

const PartnershipPage = forwardRef<HTMLDivElement>(function PartnershipPage(_, ref) {
  return (
    <article ref={ref} className="editorial-page partnership-page" aria-label="Page 5: Why We Partner">
      <div className="editorial-rail" aria-hidden="true"><span>05</span><small>WHY WE PARTNER</small></div>
      <header className="editorial-header"><p>PARTNER WITH PURPOSE <i>/</i> VOL. 01</p><span>FOUNDING PARTNERS · RICHMOND, VIRGINIA</span></header>
      <main className="partnership-editorial">
        <div className="partnership-numeral" aria-hidden="true">04</div>
        <section className="partnership-title"><p>PARTNERSHIP <i>/</i> SHARED PURPOSE</p><h2>Why We<br />Partner.</h2><blockquote>{p.partnershipFeature.subhead}</blockquote></section>
        <section className="partnership-intro"><p>{p.partnershipFeature.introduction}</p></section>
        <blockquote className="partnership-quote">“{p.partnershipFeature.pullQuote}”</blockquote>
        <section className="founding-partners" aria-label="Founding partner profiles">
          {p.hosts.map((host, index) => <article className={`partner-profile partner-profile-${index + 1}`} key={host.name}>
            <div className="partner-index"><small>FOUNDING PARTNER</small><b>0{index + 1}</b></div>
            <figure><img src={host.logo} alt={`${host.name} logo`} /></figure>
            <div className="partner-copy"><h3>{host.name}</h3><p>{host.mission}</p><span>{host.role}</span></div>
          </article>)}
        </section>
        <aside className="partnership-transition"><span>NEXT / PARTNERSHIP OPPORTUNITIES</span><p>{p.partnershipFeature.transition}</p></aside>
        <div className="partnership-map" aria-hidden="true"><i /><b /><span>E. MAIN ST · JAMES RIVER</span></div>
      </main>
      <footer className="editorial-footer"><p>PARTNER WITH PURPOSE <i>/</i> THE OFFICIAL ANNUAL PUBLICATION</p><strong>05</strong></footer>
    </article>
  );
});

const OpportunityPage = forwardRef<HTMLDivElement>(function OpportunityPage(_, ref) {
  return (
    <article ref={ref} className="editorial-page opportunity-page" aria-label="Page 6: Become Part of the Story">
      <div className="editorial-rail" aria-hidden="true"><span>06</span><small>PARTNERSHIP OPPORTUNITIES</small></div>
      <header className="editorial-header opportunity-header"><p>PARTNER WITH PURPOSE <i>/</i> VOL. 01</p><span>AN INVITATION TO PARTICIPATE · 2026</span></header>
      <main className="opportunity-editorial">
        <figure className="opportunity-image">
          <img src="/assets/editorial/become-part-of-story.png" alt="A family selecting a backpack and school supplies with support from community volunteers" />
          <div className="opportunity-image-wash" aria-hidden="true" />
          <figcaption>COMMUNITY INVESTMENT · RICHMOND</figcaption>
        </figure>
        <div className="opportunity-left-column">
          <section className="opportunity-title"><p>PARTNERSHIP <i>/</i> PARTICIPATION</p><h2>Become Part<br />of the Story.</h2></section>
          <section className="opportunity-left-content" aria-label="Partnership invitation">
            <blockquote className="opportunity-statement">{p.opportunityFeature.subhead}</blockquote>
            <div className="opportunity-intro"><p>{p.opportunityFeature.blocks[0].copy}</p></div>
            <div className="opportunity-blocks" aria-label="The meaning of partnership">
              {p.opportunityFeature.blocks.slice(1).map((block, index) => <article key={block.label}><small>0{index + 1}</small><div><h3>{block.label}</h3><p>{block.copy}</p></div></article>)}
            </div>
            <aside className="opportunity-transition"><span>NEXT / PARTNERSHIP LEVELS</span><p>{p.opportunityFeature.transition}</p></aside>
          </section>
        </div>
        <blockquote className="opportunity-quote">“{p.opportunityFeature.pullQuote}”</blockquote>
        <aside className="opportunity-impact" aria-label="Partner impact areas"><p>PART OF</p><ul>{p.opportunityFeature.impactAreas.map((area) => <li key={area}>{area}</li>)}</ul></aside>
        <div className="opportunity-map" aria-hidden="true"><i /><b /><span>MAIN STREET · JAMES RIVER</span></div>
      </main>
      <footer className="editorial-footer"><p>PARTNER WITH PURPOSE <i>/</i> THE OFFICIAL ANNUAL PUBLICATION</p><strong>06</strong></footer>
    </article>
  );
});

const SponsorshipPage = forwardRef<HTMLDivElement>(function SponsorshipPage(_, ref) {
  return (
    <article ref={ref} className="editorial-page sponsorship-page" aria-label="Page 7: Sponsorship Opportunities">
      <div className="editorial-rail" aria-hidden="true"><span>07</span><small>SPONSORSHIP OPPORTUNITIES</small></div>
      <header className="editorial-header"><p>PARTNER WITH PURPOSE <i>/</i> VOL. 01</p><span>PART II · AN INVITATION TO ACTION</span></header>
      <main className="sponsorship-editorial">
        <div className="sponsorship-chapter" aria-hidden="true"><span>CHAPTER</span><strong>07</strong></div>
        <section className="sponsorship-title"><p>THE OPPORTUNITY <i>/</i> 2026</p><h2>Sponsorship<br />Opportunities.</h2><blockquote>{p.sponsorshipIntroduction.statement}</blockquote></section>
        <section className="sponsorship-intro"><small>INVESTMENT WITH PURPOSE</small><p>{p.sponsorshipIntroduction.introduction}</p></section>
        <blockquote className="sponsorship-quote">“{p.sponsorshipIntroduction.pullQuote}”</blockquote>
        <section className="tier-previews" aria-label="Sponsorship tier previews">
          {p.sponsorshipIntroduction.tiers.map((tier, index) => <article key={tier.name}>
            <div className="tier-number"><span>0{index + 1}</span><i /></div>
            <div><h3>{tier.name}</h3><p>{tier.description}</p><small>DETAILS ON FOLLOWING PAGES <b>↗</b></small></div>
          </article>)}
        </section>
        <aside className="sponsorship-transition"><span>CONTINUE / PARTNERSHIP LEVELS</span><p>{p.sponsorshipIntroduction.transition}</p></aside>
        <div className="sponsorship-grid-mark" aria-hidden="true"><i /><i /><i /><i /></div>
      </main>
      <footer className="editorial-footer"><p>PARTNER WITH PURPOSE <i>/</i> THE OFFICIAL ANNUAL PUBLICATION</p><strong>07</strong></footer>
    </article>
  );
});

function Investment({ amount }: { amount: string }) {
  return <div className="level-investment"><span>INVESTMENT</span><strong>{amount}</strong></div>;
}

function CustomPartnershipInvitation() {
  return <aside className="level-custom"><p>Need a custom partnership? <em>Let&apos;s build one together.</em></p><a href={`mailto:${p.contactEmail}`}>CONTACT · {p.contactEmail}</a></aside>;
}

const CommunityPartnerPage = forwardRef<HTMLDivElement>(function CommunityPartnerPage(_, ref) {
  return (
    <article ref={ref} className="editorial-page community-partner-page" aria-label="Page 8: Community Partner">
      <div className="editorial-rail" aria-hidden="true"><span>08</span><small>COMMUNITY PARTNER</small></div>
      <header className="editorial-header community-partner-header"><p>PARTNER WITH PURPOSE <i>/</i> VOL. 01</p><span>PARTNERSHIP LEVEL · 01 OF 04</span></header>
      <main className="community-partner-editorial">
        <div className="community-partner-ghost" aria-hidden="true">08</div>
        <section className="community-partner-left">
          <section className="community-partner-title"><p>PARTNERSHIP LEVEL <i>/</i> 01</p><h2>Community<br />Partner.</h2><h3>{p.communityPartnerFeature.title}</h3><Investment amount={p.communityPartnerFeature.investment} /></section>
          <section className="community-partner-intro"><p>{p.communityPartnerFeature.introduction}</p></section>
          <section className="community-partner-context"><article><small>WHO IT IS FOR</small><p>{p.communityPartnerFeature.audience}</p></article><article><small>WHY IT MATTERS</small><p>{p.communityPartnerFeature.value}</p></article></section>
          <section className="community-partner-benefits" aria-label="Community Partner benefits">
            <header><span>THE VALUE CREATED</span><small>COMMUNITY PARTNER · SIX POINTS OF IMPACT</small></header>
            <div>{p.communityPartnerFeature.benefits.map((benefit, index) => <article key={benefit.title}><small>0{index + 1}</small><div><h4>{benefit.title}</h4><p>{benefit.copy}</p></div></article>)}</div>
          </section>
          <CustomPartnershipInvitation />
        </section>
        <section className="community-partner-right">
          <figure className="community-partner-photo"><img src="/assets/editorial/community-partner-impact.png" alt="A community volunteer presenting a purple backpack to a smiling child accompanied by a parent" /><div aria-hidden="true" /><figcaption>DIRECT SUPPORT · LASTING CONFIDENCE</figcaption></figure>
          <blockquote className="community-partner-quote">“{p.communityPartnerFeature.pullQuote}”</blockquote>
        </section>
      </main>
      <footer className="editorial-footer community-partner-footer"><p>PARTNER WITH PURPOSE <i>/</i> THE OFFICIAL ANNUAL PUBLICATION</p><strong>08</strong></footer>
    </article>
  );
});

const SupportingSponsorPage = forwardRef<HTMLDivElement>(function SupportingSponsorPage(_, ref) {
  return (
    <article ref={ref} className="editorial-page community-partner-page supporting-sponsor-page" aria-label="Page 9: Supporting Sponsor">
      <div className="editorial-rail" aria-hidden="true"><span>09</span><small>SUPPORTING SPONSOR</small></div>
      <header className="editorial-header community-partner-header"><p>PARTNER WITH PURPOSE <i>/</i> VOL. 01</p><span>PARTNERSHIP LEVEL · 02 OF 04</span></header>
      <main className="community-partner-editorial supporting-sponsor-editorial">
        <div className="community-partner-ghost supporting-sponsor-ghost" aria-hidden="true">09</div>
        <section className="community-partner-left">
          <section className="community-partner-title supporting-sponsor-title"><p>PARTNERSHIP LEVEL <i>/</i> 02</p><h2>Supporting<br />Sponsor.</h2><h3>{p.supportingSponsorFeature.title}</h3><Investment amount={p.supportingSponsorFeature.investment} /></section>
          <section className="community-partner-intro"><p>{p.supportingSponsorFeature.introduction}</p></section>
          <section className="community-partner-context"><article><small>WHO IT IS FOR</small><p>{p.supportingSponsorFeature.audience}</p></article><article><small>WHY IT MATTERS</small><p>{p.supportingSponsorFeature.value}</p></article></section>
          <section className="community-partner-benefits" aria-label="Supporting Sponsor benefits">
            <header><span>THE VALUE CREATED</span><small>SUPPORTING SPONSOR · SIX POINTS OF IMPACT</small></header>
            <div>{p.supportingSponsorFeature.benefits.map((benefit, index) => <article key={benefit.title}><small>0{index + 1}</small><div><h4>{benefit.title}</h4><p>{benefit.copy}</p></div></article>)}</div>
          </section>
          <CustomPartnershipInvitation />
        </section>
        <section className="community-partner-right">
          <figure className="community-partner-photo supporting-sponsor-photo"><img src="/assets/editorial/supporting-sponsor-impact.png" alt="Volunteers working together along a distribution table as students and families receive backpacks" /><div aria-hidden="true" /><figcaption>MOMENTUM · TEAMWORK · SHARED IMPACT</figcaption></figure>
          <blockquote className="community-partner-quote supporting-sponsor-quote">“{p.supportingSponsorFeature.pullQuote}”</blockquote>
        </section>
      </main>
      <footer className="editorial-footer community-partner-footer"><p>PARTNER WITH PURPOSE <i>/</i> THE OFFICIAL ANNUAL PUBLICATION</p><strong>09</strong></footer>
    </article>
  );
});

const PresentingSponsorPage = forwardRef<HTMLDivElement>(function PresentingSponsorPage(_, ref) {
  return (
    <article ref={ref} className="editorial-page community-partner-page presenting-sponsor-page" aria-label="Page 10: Presenting Sponsor">
      <div className="editorial-rail presenting-sponsor-rail" aria-hidden="true"><span>10</span><small>PRESENTING SPONSOR</small></div>
      <header className="editorial-header community-partner-header"><p>PARTNER WITH PURPOSE <i>/</i> VOL. 01</p><span>PARTNERSHIP LEVEL · 03 OF 04</span></header>
      <main className="community-partner-editorial presenting-sponsor-editorial">
        <div className="community-partner-ghost presenting-sponsor-ghost" aria-hidden="true">10</div>
        <section className="community-partner-left">
          <section className="community-partner-title presenting-sponsor-title"><p>PARTNERSHIP LEVEL <i>/</i> 03</p><h2>Presenting<br />Sponsor.</h2><h3>{p.presentingSponsorFeature.title}</h3><Investment amount={p.presentingSponsorFeature.investment} /></section>
          <section className="community-partner-intro"><p>{p.presentingSponsorFeature.introduction}</p></section>
          <section className="community-partner-context"><article><small>WHO IT IS FOR</small><p>{p.presentingSponsorFeature.audience}</p></article><article><small>WHY IT MATTERS</small><p>{p.presentingSponsorFeature.value}</p></article></section>
          <section className="community-partner-benefits" aria-label="Presenting Sponsor benefits">
            <header><span>LEADERSHIP VALUE</span><small>PRESENTING SPONSOR · SIX POINTS OF INFLUENCE</small></header>
            <div>{p.presentingSponsorFeature.benefits.map((benefit, index) => <article key={benefit.title}><small>0{index + 1}</small><div><h4>{benefit.title}</h4><p>{benefit.copy}</p></div></article>)}</div>
          </section>
          <CustomPartnershipInvitation />
        </section>
        <section className="community-partner-right">
          <figure className="community-partner-photo presenting-sponsor-photo"><img src="/assets/editorial/presenting-sponsor-impact.png" alt="A community leader coordinating with an organizer while volunteers and students prepare backpacks nearby" /><div aria-hidden="true" /><figcaption>LEADERSHIP · PRESENCE · INFLUENCE</figcaption></figure>
          <blockquote className="community-partner-quote presenting-sponsor-quote">“{p.presentingSponsorFeature.pullQuote}”</blockquote>
        </section>
      </main>
      <footer className="editorial-footer community-partner-footer"><p>PARTNER WITH PURPOSE <i>/</i> THE OFFICIAL ANNUAL PUBLICATION</p><strong>10</strong></footer>
    </article>
  );
});

const TitlePartnerPage = forwardRef<HTMLDivElement>(function TitlePartnerPage(_, ref) {
  return (
    <article ref={ref} className="editorial-page community-partner-page title-partner-page" aria-label="Page 11: Title Partner">
      <div className="editorial-rail title-partner-rail" aria-hidden="true"><span>11</span><small>TITLE PARTNER</small></div>
      <header className="editorial-header community-partner-header"><p>PARTNER WITH PURPOSE <i>/</i> VOL. 01</p><span>PARTNERSHIP LEVEL · 04 OF 04</span></header>
      <main className="community-partner-editorial title-partner-editorial">
        <div className="community-partner-ghost title-partner-ghost" aria-hidden="true">11</div>
        <section className="community-partner-left">
          <section className="community-partner-title title-partner-title"><p>SIGNATURE PARTNERSHIP <i>/</i> 04</p><h2>Title<br />Partner.</h2><h3>{p.titlePartnerFeature.title}</h3><Investment amount={p.titlePartnerFeature.investment} /></section>
          <section className="community-partner-intro"><p>{p.titlePartnerFeature.introduction}</p></section>
          <section className="community-partner-context"><article><small>WHO IT IS FOR</small><p>{p.titlePartnerFeature.audience}</p></article><article><small>WHY IT MATTERS</small><p>{p.titlePartnerFeature.value}</p></article></section>
          <section className="community-partner-benefits" aria-label="Title Partner benefits">
            <header><span>SIGNATURE PARTNERSHIP</span><small>TITLE PARTNER · SIX POINTS OF LEGACY</small></header>
            <div>{p.titlePartnerFeature.benefits.map((benefit, index) => <article key={benefit.title}><small>0{index + 1}</small><div><h4>{benefit.title}</h4><p>{benefit.copy}</p></div></article>)}</div>
          </section>
          <CustomPartnershipInvitation />
        </section>
        <section className="community-partner-right">
          <figure className="community-partner-photo title-partner-photo"><img src="/assets/editorial/title-partner-impact.png" alt="A community leader and volunteers celebrating with a student receiving a purple backpack on Richmond's Main Street" /><div aria-hidden="true" /><figcaption>LEGACY · LEADERSHIP · TRANSFORMATION</figcaption></figure>
          <blockquote className="community-partner-quote title-partner-quote">“{p.titlePartnerFeature.pullQuote}”</blockquote>
        </section>
      </main>
      <footer className="editorial-footer community-partner-footer"><p>PARTNER WITH PURPOSE <i>/</i> THE OFFICIAL ANNUAL PUBLICATION</p><strong>11</strong></footer>
    </article>
  );
});

const ClosingPage = forwardRef<HTMLDivElement>(function ClosingPage(_, ref) {
  return (
    <article ref={ref} className="editorial-page closing-page" aria-label="Page 12: Your Partnership Starts Here">
      <div className="editorial-rail closing-rail" aria-hidden="true"><span>12</span><small>BEGIN THE PARTNERSHIP</small></div>
      <header className="editorial-header closing-header"><p>BACK TO SCHOOL ON MAIN <i>/</i> RICHMOND</p><span>THE CLOSING NOTE</span></header>
      <main className="closing-editorial">
        <figure className="closing-photo">
          <img src="/assets/editorial/closing-community-impact.png" alt="Students carrying backpacks walk with caregivers and volunteers along a sunlit Richmond street as a child turns back and waves" />
          <div aria-hidden="true" />
          <figcaption>CONFIDENCE · COMMUNITY · WHAT COMES NEXT</figcaption>
        </figure>
        <section className="closing-content">
          <div className="closing-ghost" aria-hidden="true">12</div>
          <p className="closing-eyebrow">A FINAL INVITATION <i>/</i> 2026</p>
          <h2>Your Partnership<br />Starts Here.</h2>
          <h3>Back To School <em>on Main</em></h3>
          <section className="closing-message" aria-label="Closing message">
            {p.closingFeature.messages.map((message) => <p key={message}>{message}</p>)}
          </section>
          <section className="closing-contact" aria-label="Partnership contact">
            <div><small>BEGIN THE CONVERSATION</small><span>EMAIL</span></div>
            <a href={`mailto:${p.closingFeature.email}`}>{p.closingFeature.email}</a>
          </section>
          <blockquote className="closing-quote">“{p.closingFeature.quote}”</blockquote>
          <section className="closing-publishers" aria-label="Hosted in partnership with the founding partners">
            <p>HOSTED IN PARTNERSHIP WITH</p>
            <div>
              {p.hosts.map((host) => <figure key={host.name}><img src={host.logo} alt={`${host.name} logo`} /><figcaption>{host.name}</figcaption></figure>)}
            </div>
          </section>
        </section>
      </main>
      <footer className="editorial-footer closing-footer"><p>PARTNER WITH PURPOSE <i>/</i> THE OFFICIAL ANNUAL PUBLICATION</p><strong>12</strong></footer>
    </article>
  );
});

type LevelFeature = {
  readonly level: string;
  readonly investment: string;
  readonly title: string;
  readonly introduction: string;
  readonly pullQuote: string;
  readonly audience: string;
  readonly value: string;
  readonly benefits: readonly { readonly title: string; readonly copy: string }[];
};

function MobileLevelPage({ feature, image, number }: { feature: LevelFeature; image: string; number: string }) {
  return <article className="mobile-page mobile-level-page">
    <p className="mobile-kicker">PARTNERSHIP LEVEL · {number} OF 04</p>
    <h2>{feature.level}</h2>
    <p className="mobile-serif-title">{feature.title}</p>
    <div className="mobile-investment"><span>Investment</span><strong>{feature.investment}</strong></div>
    <figure className="mobile-hero"><img src={image} alt={`${feature.level} community impact`} /></figure>
    <blockquote>“{feature.pullQuote}”</blockquote>
    <p>{feature.introduction}</p>
    <div className="mobile-context"><section><h3>Who It Is For</h3><p>{feature.audience}</p></section><section><h3>Why It Matters</h3><p>{feature.value}</p></section></div>
    <section className="mobile-benefits"><h3>Value Created</h3>{feature.benefits.map((benefit, index) => <article key={benefit.title}><span>0{index + 1}</span><div><h4>{benefit.title}</h4><p>{benefit.copy}</p></div></article>)}</section>
    <aside className="mobile-custom"><strong>Need a custom partnership?</strong><span>Let&apos;s build one together.</span><a href={`mailto:${p.contactEmail}`}>{p.contactEmail}</a></aside>
  </article>;
}

function MobilePublicationPage({ page }: { page: number }) {
  if (page === 1) return <article className="mobile-page mobile-cover">
    <p className="mobile-kicker">OFFICIAL SPONSORSHIP PUBLICATION · 2026 EDITION</p><h1>Partner<br />With Purpose</h1><p className="mobile-serif-title">{p.mastheadDescriptor}</p>
    <div className="mobile-map-mark" aria-hidden="true" /><h2>{p.eventName}</h2><p>{p.subtitle}</p><blockquote>“{p.missionStatement}”</blockquote>
    <dl><div><dt>Date</dt><dd>{p.date}</dd></div><div><dt>Time</dt><dd>{p.time}</dd></div><div><dt>Place</dt><dd>{p.city}</dd></div></dl><p className="mobile-tagline">{p.tagline}</p>
  </article>;
  if (page === 2) return <article className="mobile-page"><p className="mobile-kicker">LETTER FROM THE HOSTS</p><h2>A Letter <em>From the Hosts</em></h2><blockquote>“{p.hostLetter.pullQuote}”</blockquote><h3>{p.hostLetter.salutation}</h3>{p.hostLetter.paragraphs.map(text => <p key={text}>{text}</p>)}<p className="mobile-closing">{p.hostLetter.closing}</p><ul className="mobile-signatories">{p.hostLetter.signatories.map(name => <li key={name}>{name}</li>)}</ul></article>;
  if (page === 3) return <article className="mobile-page"><p className="mobile-kicker">THE EXPERIENCE</p><h2>About <em>the Experience</em></h2><blockquote>“{p.aboutExperience.statement}”</blockquote><p>{p.aboutExperience.description}</p><div className="mobile-stat"><strong>50</strong><span>Families · One Shared Community</span></div><h3>Seven Points of Care</h3><ul className="mobile-list">{p.aboutExperience.components.map(item => <li key={item}>{item}</li>)}</ul><figure className="mobile-hero"><img src="/assets/editorial/community-preparation-wide.png" alt="Volunteers and families preparing clothing, backpacks, and school supplies" /></figure></article>;
  if (page === 4) return <article className="mobile-page"><p className="mobile-kicker">COMMUNITY IMPACT</p><h2>{p.emotionalFeature.title}</h2><figure className="mobile-hero"><img src="/assets/editorial/more-than-a-backpack-hero.png" alt="A child receiving a backpack with support from community volunteers" /></figure><blockquote>“{p.emotionalFeature.statement}”</blockquote><p>{p.emotionalFeature.story}</p><div className="mobile-stats">{p.emotionalFeature.statistics.map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div></article>;
  if (page === 5) return <article className="mobile-page"><p className="mobile-kicker">FOUNDING PARTNERS</p><h2>{p.partnershipFeature.title}</h2><blockquote>“{p.partnershipFeature.pullQuote}”</blockquote><p>{p.partnershipFeature.introduction}</p><section className="mobile-hosts">{p.hosts.map((host,index) => <article key={host.name}><span>0{index+1}</span><img src={host.logo} alt={`${host.name} logo`} /><h3>{host.name}</h3><p>{host.mission}</p><small>{host.role}</small></article>)}</section></article>;
  if (page === 6) return <article className="mobile-page"><p className="mobile-kicker">PARTNERSHIP OPPORTUNITIES</p><h2>{p.opportunityFeature.title}</h2><figure className="mobile-hero"><img src="/assets/editorial/become-part-of-story.png" alt="A family selecting school supplies with community volunteers" /></figure><blockquote>“{p.opportunityFeature.pullQuote}”</blockquote>{p.opportunityFeature.blocks.map(block => <section className="mobile-section" key={block.label}><h3>{block.label}</h3><p>{block.copy}</p></section>)}<h3>Part of Something Meaningful</h3><ul className="mobile-list">{p.opportunityFeature.impactAreas.map(item => <li key={item}>{item}</li>)}</ul></article>;
  if (page === 7) return <article className="mobile-page"><p className="mobile-kicker">PART II · AN INVITATION TO ACTION</p><h2>{p.sponsorshipIntroduction.title}</h2><p className="mobile-serif-title">{p.sponsorshipIntroduction.statement}</p><blockquote>“{p.sponsorshipIntroduction.pullQuote}”</blockquote><p>{p.sponsorshipIntroduction.introduction}</p><section className="mobile-tiers">{p.sponsorshipIntroduction.tiers.map((tier,index) => <article key={tier.name}><span>0{index+1}</span><h3>{tier.name}</h3><p>{tier.description}</p></article>)}</section></article>;
  if (page === 8) return <MobileLevelPage feature={p.communityPartnerFeature} image="/assets/editorial/community-partner-impact.png" number="01" />;
  if (page === 9) return <MobileLevelPage feature={p.supportingSponsorFeature} image="/assets/editorial/supporting-sponsor-impact.png" number="02" />;
  if (page === 10) return <MobileLevelPage feature={p.presentingSponsorFeature} image="/assets/editorial/presenting-sponsor-impact.png" number="03" />;
  if (page === 11) return <MobileLevelPage feature={p.titlePartnerFeature} image="/assets/editorial/title-partner-impact.png" number="04" />;
  return <article className="mobile-page mobile-closing-page"><p className="mobile-kicker">BEGIN THE CONVERSATION</p><h2>{p.closingFeature.title}</h2><figure className="mobile-hero"><img src="/assets/editorial/closing-community-impact.png" alt="Richmond families and volunteers celebrating community impact" /></figure>{p.closingFeature.messages.map(text => <p key={text}>{text}</p>)}<a className="mobile-email" href={`mailto:${p.closingFeature.email}`}>{p.closingFeature.email}</a><blockquote>“{p.closingFeature.quote}”</blockquote><section className="mobile-host-logos"><h3>Hosted in Partnership With</h3>{p.hosts.map(host => <figure key={host.name}><img src={host.logo} alt={`${host.name} logo`} /><figcaption>{host.name}</figcaption></figure>)}</section></article>;
}

export default function MagazineExperience() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [sound, setSound] = useState(false);
  const [thumbs, setThumbs] = useState(false);
  const [notice, setNotice] = useState("");
  const bookRef = useRef<FlipApi | null>(null);

  const download = useCallback(() => window.print(), []);
  const goToPage = useCallback((index: number) => {
    bookRef.current?.pageFlip().turnToPage(index);
    setPage(index + 1);
    setThumbs(false);
  }, []);
  const goMobile = useCallback((next: number) => {
    const destination = Math.max(1, Math.min(p.pageTitles.length, next));
    setPage(destination);
    setThumbs(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const share = async () => {
    const data = { title: `${p.eventName} | ${p.publicationTitle}`, text: p.mastheadDescriptor, url: window.location.href };
    if (navigator.share) await navigator.share(data).catch(() => undefined);
    else { await navigator.clipboard.writeText(window.location.href); setNotice("Magazine link copied."); window.setTimeout(() => setNotice(""), 2200); }
  };
  const fullscreen = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!open && (event.key === "Enter" || event.key === "ArrowRight")) setOpen(true);
      else if (open && event.key === "Escape") setOpen(false);
      else if (open && event.key === "ArrowRight") bookRef.current?.pageFlip().flipNext();
      else if (open && event.key === "ArrowLeft") bookRef.current?.pageFlip().flipPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <main className={`experience ${open ? "is-open" : ""}`}>
      <section className="opening" aria-hidden={open}>
        <div className="opening-rail"><span>01</span><small>ANNUAL EDITION</small></div>
        <div className="opening-copy">
          <p className="opening-overline">RICHMOND · COMMUNITY · CULTURE · IMPACT</p>
          <h1><span className="partner-word">PARTNER</span><span className="identity-line"><span className="with-word">WITH</span><span className="purpose-word">PURPOSE</span></span></h1>
          <p className="opening-descriptor">{p.mastheadDescriptor}</p>
          <p className="opening-edition">{p.editionLabel}</p>
          <div className="opening-event">
            <h2>{p.eventName}</h2><p>{p.subtitle}</p><strong>{p.tagline}</strong>
          </div>
          <div className="opening-actions">
            <button className="primary" onClick={() => setOpen(true)}>OPEN MAGAZINE <span>↗</span></button>
            <button className="secondary" onClick={download}>DOWNLOAD PDF</button>
          </div>
        </div>
        <aside className="opening-index">
          <span className="index-label">THE MAIN ISSUE</span>
          <div className="opening-bulb" aria-hidden="true"><i/><b/></div>
          <p>{p.date}</p><p>{p.time}</p><p>{p.city}</p>
          <div className="index-rule" />
          <small>FRESH FITS.<br/>FRESH STYLES.<br/>BRIGHT FUTURES.</small>
        </aside>
        <div className="opening-skyline" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/></div>
      </section>

      <section className="reader desktop-reader" aria-label="Interactive sponsorship magazine" aria-hidden={!open}>
        <header className="reader-topline"><button onClick={() => setOpen(false)}>← RETURN TO COVER</button><p>{p.publicationTitle} <span>/</span> {p.editionLabel}</p><button onClick={() => setThumbs(!thumbs)}>THUMBNAILS</button></header>
        <div className="book-stage">
          <div className="book-viewport">
          <HTMLFlipBook ref={bookRef as never} width={650} height={820} size="stretch" minWidth={300} maxWidth={650} minHeight={420} maxHeight={820} showCover usePortrait mobileScrollSupport clickEventForward useMouseEvents swipeDistance={30} drawShadow flippingTime={700} maxShadowOpacity={0.22} autoSize startPage={0} startZIndex={0} showPageCorners disableFlipByClick={false} onFlip={(event: { data: number }) => setPage(event.data + 1)} className="flipbook" style={{}}>
            <CoverPage />
            <LetterPage />
            <AboutPage />
            <EmotionalFeaturePage />
            <PartnershipPage />
            <OpportunityPage />
            <SponsorshipPage />
            <CommunityPartnerPage />
            <SupportingSponsorPage />
            <PresentingSponsorPage />
            <TitlePartnerPage />
            <ClosingPage />
          </HTMLFlipBook>
          </div>
        </div>
        <footer className="reader-controls">
          <button aria-label="Previous page" onClick={() => bookRef.current?.pageFlip().flipPrev()}>←</button>
          <p><strong>{String(page).padStart(2,"0")}</strong><span>/</span>{p.pageTitles.length}</p>
          <button aria-label="Next page" onClick={() => bookRef.current?.pageFlip().flipNext()}>→</button>
          <i />
          <button onClick={() => setSound(!sound)} aria-pressed={sound}>SOUND {sound ? "ON" : "OFF"}</button>
          <button onClick={fullscreen}>FULLSCREEN</button><button onClick={share}>SHARE</button><button onClick={download}>PDF</button>
        </footer>
        {thumbs && <aside className="thumbnail-drawer" aria-label="Page navigation"><button className="thumbnail-close" onClick={() => setThumbs(false)}>CLOSE</button><p>ALL PAGES</p><nav>{p.pageTitles.map((title, index) => <button className={page === index + 1 ? "is-current" : ""} aria-current={page === index + 1 ? "page" : undefined} onClick={() => goToPage(index)} key={title}><strong>{String(index + 1).padStart(2, "0")}</strong><span>{title}</span></button>)}</nav><small>SELECT A PAGE TO OPEN IT IN THE MAGAZINE.</small></aside>}
      </section>
      <section className="mobile-reader" aria-label="Mobile sponsorship publication" aria-hidden={!open}>
        <header className="mobile-reader-header"><button onClick={() => setOpen(false)} aria-label="Return to opening cover">← Cover</button><p><strong>{String(page).padStart(2,"0")}</strong> / {p.pageTitles.length}</p><button onClick={() => setThumbs(!thumbs)} aria-expanded={thumbs}>Pages</button></header>
        <div className="mobile-page-wrap"><MobilePublicationPage page={page} /></div>
        <nav className="mobile-reader-nav" aria-label="Publication navigation"><button disabled={page === 1} onClick={() => goMobile(page - 1)}>← Previous</button><span>{p.pageTitles[page - 1]}</span><button disabled={page === p.pageTitles.length} onClick={() => goMobile(page + 1)}>Next →</button></nav>
        {thumbs && <aside className="mobile-page-menu" aria-label="Choose a page"><button className="mobile-menu-close" onClick={() => setThumbs(false)}>Close</button><h2>All Pages</h2>{p.pageTitles.map((title,index) => <button aria-current={page === index + 1 ? "page" : undefined} onClick={() => goMobile(index + 1)} key={title}><strong>{String(index + 1).padStart(2,"0")}</strong><span>{title}</span></button>)}</aside>}
      </section>
      <div className={`notice ${notice ? "show" : ""}`} role="status">{notice}</div>
    </main>
  );
}
