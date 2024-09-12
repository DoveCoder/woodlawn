import PageHero from "@/app/components/Hero/PageHero";
import Table from "@/app/components/Hero/Table";
import ScheduleCard from "@/app/components/Schedule/scheduleCard";

export default function Page() {
  return (
    <>
      <section>
        <PageHero />
      </section>
      <section className="hidden">
        <Table />
      </section>
      <section>
        <ScheduleCard />
      </section>
    </>
  )
}
