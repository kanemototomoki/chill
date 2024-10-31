import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export const routes: RouteConfig = [
  layout("layouts/base.tsx", [
    route("/", "routes/home.tsx"),
		route("number-flow", "routes/number-flow.tsx"),
		route("static-column-table", "routes/static-column-table.tsx"),
  ]),
];
