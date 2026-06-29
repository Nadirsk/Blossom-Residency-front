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
      { src: "/images/logo.png", sizes: "192x192", type: "image/png" },
      { src: "/images/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
