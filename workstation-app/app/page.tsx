import Head from "next/head";
import SWRegister from "@/components/clientComposants/SWRegister";
import TheBox from "@/components/clientComposants/theBox";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <Head>
        <link rel="icon" href="/apple-touch-icon.png" />
      </Head>
      <SWRegister />
      <TheBox />

    </div>
  );
}
