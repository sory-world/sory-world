import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("info", "routes/info.tsx"),
  route(":slug", "routes/$slug.tsx"),
] satisfies RouteConfig;

