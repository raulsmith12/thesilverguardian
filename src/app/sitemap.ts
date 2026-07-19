import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const routes = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/fundraising/", priority: 0.9, changeFrequency: "weekly" },
  { path: "/32-wishes/", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/movement-therapy-center/",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/contact/", priority: 0.7, changeFrequency: "yearly" },
  { path: "/privacy/", priority: 0.3, changeFrequency: "yearly" },
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
