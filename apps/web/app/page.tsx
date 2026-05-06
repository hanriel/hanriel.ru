export default function Home() {
  return (
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-normal py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        </div>
        <iframe
          width={"100%"}
          height={"740px"} src="https://cloud.pmkspo.ru/index.php/apps/calendar/embed/dRYDfQYB9rgMAQHj-mW5WCwtbJySNtLeg/timeGridWeek/now"></iframe>
      </main>
  );
}