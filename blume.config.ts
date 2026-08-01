import { defineConfig } from "blume";

export default defineConfig({
  title: "Claude Library",
  description:
    "Личен справочник за работа с Claude Code — команди, скилове, клавишни комбинации и добри практики.",

  content: {
    root: "content",
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
