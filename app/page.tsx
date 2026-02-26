import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
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
        <iframe src="https://calendar.google.com/calendar/embed?height=740&wkst=2&ctz=Asia%2FYekaterinburg&showPrint=0&showTz=0&showCalendars=0&mode=WEEK&showTitle=0&showTabs=0&src=aGFucmllbDU5QGdtYWlsLmNvbQ&src=YTRmZGRlYmU4NGZlMGMzY2I5M2VjOTYwZmVhODBkZDg1MTEzZWNhOTk0ODQwYzA5NDcyYzkzOWY3ZGQxMGNjMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Njg5MDA0NDY0ZjkwZjk1Njk5YjE2YTNiNDNmOTExMmY3MjU0NGNkZDdiNGY4MzU4YTFiZTdhM2MwZjZlMzVhMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=cnUucnVzc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%230088ff&color=%237cb342&color=%23ff8d28&color=%230b8043"
          width={"100%"}
          height={"740px"}></iframe>
      </main>
      
    </div>
  );
}
