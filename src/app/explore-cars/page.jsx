import ExploreCars from "@/components/ExploreCars/ExploreCars";
import { fetchCars } from "@/lib/fetchData";

async function exploreCarsPage({searchParams}) {
  const cars = await fetchCars();

  return (
    <div className="min-h-screen">
      <ExploreCars cars={cars} searchParams={searchParams} />
    </div>
  );
}

export default exploreCarsPage;
