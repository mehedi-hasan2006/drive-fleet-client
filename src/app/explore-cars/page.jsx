import ExploreCars from "@/components/ExploreCars/ExploreCars";
import { fetchCars } from "@/lib/fetchData";

async function exploreCarsPage() {
  const cars = await fetchCars();

  return (
    <div className="min-h-screen">
      <ExploreCars cars={cars} />
    </div>
  );
}

export default exploreCarsPage;
