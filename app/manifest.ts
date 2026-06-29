import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "template-next",
    short_name: "template-next",
    description: "template-next",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/icons/icon.svg",
        sizes: "128x128",
        type: "image/svg",
      },
      {
        src: "/icons/icon512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
