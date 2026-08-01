import { defineConfig } from "blume";

export default defineConfig({
  title: "Claude Library",
  description:
    "Личен справочник за работа с Claude Code — команди, скилове, клавишни комбинации и добри практики.",

  content: {
    root: "content",
  },

  deployment: {
    site: "https://claude-library-sable.vercel.app",
  },

  theme: {
    accent: "purple",
    radius: "md",
    mode: "dark",
  },

  search: {
    provider: "orama",
  },

  markdown: {
    code: {
      icons: true,
    },
  },
});
