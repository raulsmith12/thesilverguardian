import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const routes = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/overview/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/fundraising/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/golf-tournament/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ballroom-dance-tournament/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/seeds-of-hope-festival/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/32-wishes/", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/kid-friendly-research-hospital/",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/movement-therapy-center/",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/contact/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/more-info/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/privacy/", priority: 0.3, changeFrequency: "yearly" },
  { path: "/service-areas/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service-areas/united-states/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/service-areas/canada/", priority: 0.8, changeFrequency: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(({ path, priority, changeFrequency }) => {
    const frenchPath = `/fr-ca${path}`;
    const alternates = {
      languages: {
        "en-US": new URL(path, SITE_URL).toString(),
        "fr-CA": new URL(frenchPath, SITE_URL).toString(),
      },
    };

    return [
      {
        url: new URL(path, SITE_URL).toString(),
        changeFrequency,
        priority,
        alternates,
      },
      {
        url: new URL(frenchPath, SITE_URL).toString(),
        changeFrequency,
        priority,
        alternates,
      },
    ];
  });
}
