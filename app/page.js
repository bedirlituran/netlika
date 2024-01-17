
import Xidmet from "../components/Xidmet";
import Reklam from "../components/Reklam";
import WhatsAppButton from "../components/Whatsapp";
import Yenicarding from "../components/Yenicarding";
import AnimatedLayout from "../components/AnimatedLayout";





export default function Home() {
  return (
    
      <AnimatedLayout>
        <main>
        <Yenicarding />
      <Xidmet />
      <Reklam />
      <WhatsAppButton />
        </main>
      
      </AnimatedLayout>
    
  );
}
