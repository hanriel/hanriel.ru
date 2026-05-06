import { CardWrapper } from "@/components/card";
import Card from "@/components/card"

export default function Portfolio() {
  return (
    <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-normal py-32 px-16 bg-white dark:bg-black sm:items-start">

      <h1 className="croll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">Портфолио</h1>
      
      <div className="w-full flex gap-8 pt-8">
        <CardWrapper href={'https://pmk.hanriel.ru/'}>
          <Card
            date="26.02.2026"
            text='Курсовой проект по задам данных "UGS PORTAL"'
            descr="Информационная система для учета и автомаизации работы с успеваемостью студентов"
          >
          </Card>
        </CardWrapper>
        <CardWrapper href={'https://vkr.hanriel.ru/'}>
        <Card
          date="25.02.2026"
          text="Выпускная квалификационная работа"
          descr="Генератор расписания ПМК"
        ></Card>
        </CardWrapper>
        <CardWrapper href={'https://ugs.p87.pmkspo.ru/'}>
          <Card
            date="24.02.2026"
            text='Курсовой проект Портал УГС 09.00.00'
            descr="Информационная система для учета и автомаизации работы с успеваемостью студентов"
          ></Card>
        </CardWrapper>
      </div>
    </main>
  );
}
