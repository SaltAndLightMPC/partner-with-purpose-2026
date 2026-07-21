import type { Metadata } from "next";
import MagazineExperience from "./MagazineExperience";
import { publication as p } from "./publication-config";

export const metadata: Metadata = {
  title: "Back To School on Main 2026 | Partner With Purpose Sponsorship Guide",
  description: "Explore the 2026 Partner With Purpose Sponsorship Guide for Back To School on Main, a Richmond community back-to-school experience offering clothing, inclusive hair services, school resources, music, and community support.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Event", name: p.eventName, startDate: p.startDate, endDate: p.endDate, description: p.eventDescription, eventStatus: "https://schema.org/EventScheduled", eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode", location: p.addresses.map((address) => ({ "@type": "Place", name: address, address })), organizer: p.hosts.map((host) => ({ "@type": "Organization", name: host.name })) },
    ...p.hosts.map((host) => ({ "@context": "https://schema.org", "@type": "Organization", name: host.name })),
    { "@context": "https://schema.org", "@type": "CreativeWork", name: `${p.publicationTitle} — ${p.editionLabel}`, alternateName: p.mastheadDescriptor, about: p.eventName, description: p.eventDescription, datePublished: "2026", inLanguage: "en-US" },
  ];
  return <><MagazineExperience /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></>;
}
