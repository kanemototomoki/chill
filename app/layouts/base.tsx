import { Outlet } from "react-router";
import { cn } from "~/lib/utils";

export default function BaseLayout() {
  return (
    <main
      className={cn(
        "flex h-screen items-center justify-center prose dark:prose-invert mx-auto",
      )}
    >
      <Outlet />
    </main>
  );
}
