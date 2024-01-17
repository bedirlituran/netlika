
import Xidmet from "../components/Xidmet";
import Reklam from "../components/Reklam";
import WhatsAppButton from "../components/Whatsapp";
import Yenicarding from "../components/Yenicarding";
import Carding from "@/components/Carding";



export default function Home() {
  return (
    
      <main>
      <Yenicarding />
      <Carding />
      <Xidmet />
      <Reklam />
      <WhatsAppButton />
      </main>
    
  );
}
