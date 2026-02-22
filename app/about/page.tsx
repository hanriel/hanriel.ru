import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Ege() {
  return (
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
         <Image
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
            src="/me.jpg"
            alt="Next.js logo"
            width={200}
            height={20}
            priority
        />
        <h1 className="croll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">Обо мне</h1>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Приветствую вас в моем блоге! Меня зовут Данил, и я увлечен областью информационных технологий.
          Я – преподаватель, программист и репетитор ЕГЭ по информатике.
          Моя цель – помочь вам разобраться в сложных концепциях программирования, подготовиться к экзамену и раскрыть свой потенциал в сфере IT.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Я обладаю 5 летним опытом преподавания и работы в IT, что позволяет мне предлагать практические знания и навыки.
          Я верю, что программирование – это не просто профессия, а увлекательное хобби, которое открывает новые возможности.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          В этом блоге я буду делиться своими знаниями, опытом и практическими советами по следующим темам:
          </p>
          <ul>
            <li>Программирование (разные языки, алгоритмы, структуры данных)</li>
            <li>Подготовка к ЕГЭ по информатике</li>
            <li>Профессиональные навыки в IT</li>
          </ul>
        <i>Написано ИИ-агентом :)</i>
        {/* Добавьте сюда другие элементы страницы, например, ссылку на вас в соцсетях */}
      </main>
  );
}
