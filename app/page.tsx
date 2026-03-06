export default function Home() {
  return (
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Упс...сайт пока в режиме глобального обслуживания...
          </h1>
          <ul>
              <li><a href="https://pmk.hanriel.ru/">UGS PORTAL</a></li>
              <li><a href="https://vkr.hanriel.ru">VKR Gibadullin</a></li>
          </ul>
        </div>
        <iframe
          width={"100%"}
          height={"740px"} src="https://cloud.pmkspo.ru/index.php/apps/calendar/embed/dRYDfQYB9rgMAQHj-mW5WCwtbJySNtLeg/timeGridWeek"></iframe>
      </main>
  );
}