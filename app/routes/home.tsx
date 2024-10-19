import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Chill" }, { name: "description", content: "Chill" }];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Chill
          </h1>
        </header>
        <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
          <ul>
            <li>
              <a href="/number-flow">Number Flow</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
