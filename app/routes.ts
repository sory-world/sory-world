import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("info", "routes/info.tsx"),
  route("notes/:note", "routes/notes.$note.tsx"),
  route("people/:person", "routes/people.$person.tsx"),
  route("projects/:project", "routes/projects.$project.tsx"),
] satisfies RouteConfig;

