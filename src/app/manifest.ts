import type { MetadataRoute } from "next";
import { PROJECT } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${PROJECT.name} by ${PROJECT.developer}`,
    short_name: PROJECT.name,
    description: `${PROJECT.config} in Dombivli East. ${PROJECT.tower}. MahaRERA ${PROJECT.rera}.`,
    start_url: "/",
    display: "standalone",
    background_color: "#0f0e0c",
    theme_color: "#0f0e0c",
    lang: "en-IN",
    categories: ["business", "real estate"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
