import OrderTable from "./components/OrderTable";
export default function Home() {
  return (
    <div className="grid grid-rows-[2px_1fr_2px] items-center justify-items-center min-h-screen p-8 pb-2 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[10px] row-start-2 items-center sm:items-start">
       < OrderTable />
       </main>
       </div>
  );
}
