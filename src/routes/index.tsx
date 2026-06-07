import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "מכבשי קרטון פתרונות — השכרה, מכירה, תיקון וקנייה" },
      {
        name: "description",
        content:
          "פתרונות מקצועיים למכבשי קרטון: השכרה, מכירה, תיקון וקניית מכבשים משומשים לעסקים, מחסנים ומפעלים בכל הארץ.",
      },
      { property: "og:title", content: "מכבשי קרטון פתרונות" },
      {
        property: "og:description",
        content: "השכרה, מכירה, תיקון וקניית מכבשי קרטון משומשים — שירות מהיר ואמין בכל הארץ.",
      },
    ],
  }),
  component: LandingPage,
});
