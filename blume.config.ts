import { defineConfig } from "blume";

export default defineConfig({
  title: "Claude Library",
  description:
    "Personal Claude Code reference — commands, skills, keyboard shortcuts, and best practices.",

  content: {
    root: "content",
  },

  i18n: {
    defaultLocale: "en",
    locales: [
      { code: "en", label: "English" },
      { code: "bg", label: "Български" },
    ],
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
