import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: ["/", "/info"], // prerender static routes
} satisfies Config;

