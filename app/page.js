
import Xidmet from "../components/Xidmet";
import Reklam from "../components/Reklam";
import Carding from "../components/Carding";
import WhatsAppButton from "../components/Whatsapp";
import AnimatedLayout from "../components/AnimatedLayout";



export default function Home() {
  return (
    <AnimatedLayout>
      <main className="overflow-hidden">
        <Carding />
      <Xidmet />
      <Reklam />
      <WhatsAppButton />
      </main>
    </AnimatedLayout>
  );
}
