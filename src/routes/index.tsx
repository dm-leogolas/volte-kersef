import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Volte à Kersef - LP" },
      { name: "description", content: "Volte à Kersef - LP" },
      { property: "og:title", content: "Volte à Kersef - LP" },
      { property: "og:description", content: "Volte à Kersef - LP" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <div className="min-h-screen bg-background" />;
}
