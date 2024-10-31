import type { MetaFunction } from "react-router";
import { cn } from "~/lib/utils";

export const meta: MetaFunction = () => {
  return [{ title: "Chill" }, { name: "description", content: "Chill" }];
};

export default function Index() {
  return (
    <div className={cn('grid gap-4')}>
      <header className="flex flex-col items-center gap-9">
        <h1 className="leading text-2xl font-bold">
          Chill
        </h1>
      </header>
      <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6">
        <ul>
          <li>
            <a href="/number-flow">Number Flow</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
