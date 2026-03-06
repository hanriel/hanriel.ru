import Card from "@/components/card"

export default function Portfolio() {
  return (
    <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

      <h1 className="croll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">Портфолио</h1>
      
      <div className="w-full flex gap-8">
        <Card
          date="26.02.2026"
          text="КП UGS PORTAL"
          descr="Интернет портал для учета и автомаизации работы с успеваемостью студентов"
        ></Card>
        <Card
          date="25.02.2026"
          text="ВКР Gibadullin"
          descr="Генератор расписания ПМК"
        ></Card>
        <Card
          date="24.02.2026"
          text="КП UGS PORTAL"
          descr="Интернет портал для учета и автомаизации работы с успеваемостью студентов"
        ></Card>

      </div>
    </main>
  );
}
