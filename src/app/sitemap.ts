import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { montrealTopicSlugs } from "@/lib/montrealContent";
import { lavalTopicSlugs } from "@/lib/lavalContent";
import { longueuilTopicSlugs } from "@/lib/longueuilContent";
import { brossardTopicSlugs } from "@/lib/brossardContent";
import { terrebonneTopicSlugs } from "@/lib/terrebonneContent";
import { pointeClaireTopicSlugs } from "@/lib/pointeClaireContent";

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
  { path: "/montreal/", priority: 0.8, changeFrequency: "monthly" },
  ...montrealTopicSlugs.map((topic) => ({
    path: `/montreal/${topic}/` as const,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
  { path: "/laval/", priority: 0.8, changeFrequency: "monthly" },
  ...lavalTopicSlugs.map((topic) => ({
    path: `/laval/${topic}/` as const,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
  { path: "/longueuil/", priority: 0.8, changeFrequency: "monthly" },
  ...longueuilTopicSlugs.map((topic) => ({
    path: `/longueuil/${topic}/` as const,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
  { path: "/brossard/", priority: 0.8, changeFrequency: "monthly" },
  ...brossardTopicSlugs.map((topic) => ({
    path: `/brossard/${topic}/` as const,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
  { path: "/terrebonne/", priority: 0.8, changeFrequency: "monthly" },
  ...terrebonneTopicSlugs.map((topic) => ({
    path: `/terrebonne/${topic}/` as const,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
  { path: "/pointe-claire/", priority: 0.8, changeFrequency: "monthly" },
  ...pointeClaireTopicSlugs.map((topic) => ({
    path: `/pointe-claire/${topic}/` as const,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
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
