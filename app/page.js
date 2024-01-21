
import Xidmet from "../components/Xidmet";
import Reklam from "../components/Reklam";
import WhatsAppButton from "../components/Whatsapp";
import Yenicarding from "../components/Yenicarding";
import Googleplay from "../components/Googleplay";
import Reyting from "../components/Reyting";
import Emekdas from "../components/Emekdas";
import Niyebiz from "../components/Niyebiz";
import Divide from "../components/Divide";
import Slide from "../components/Slide";




export default function Home() {
  return (
    <main>
      <Slide/>
      <Divide />
      <Yenicarding />
      <Divide />
      <Xidmet />
      <Divide />
      <Niyebiz />
      <Divide />
      <Googleplay />
      <Divide />
      <Reklam />
      <Divide />
      <Emekdas />
      <Divide />
      <Reyting />
      <Divide />
      <WhatsAppButton />
    </main>
  );
}
