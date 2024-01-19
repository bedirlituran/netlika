
import Xidmet from "../components/Xidmet";
import Reklam from "../components/Reklam";
import WhatsAppButton from "../components/Whatsapp";
import Yenicarding from "../components/Yenicarding";
import AnimatedLayout from "../components/AnimatedLayout";
import Slide from "../components/Slide";
import Googleplay from "../components/Googleplay";
import Reyting from "../components/Reyting";
import Emekdas from "../components/Emekdas";
import Niyebiz from "../components/Niyebiz";






export default function Home() {
  return (
    
      <AnimatedLayout>
        <main>
          <Slide/>
        <Yenicarding />
      <Xidmet />
      <Niyebiz />
      <Googleplay/>
      <Reklam />
      <Emekdas/>
        <Reyting/>
      <WhatsAppButton />
        </main>
      
      </AnimatedLayout>
    
  );
}
