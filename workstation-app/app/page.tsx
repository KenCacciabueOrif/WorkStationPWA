import Head from "next/head";
import SWRegister from "@/components/SWRegister";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Head>
        <link rel="icon" href="/apple-touch-icon.png"/>
      </Head>
      <SWRegister/>
    </div>
  );
}
