'use client'
import CreateWorker from "@/components/CreateWorker";
import Image from "next/image";
import GrpcTest from "@/components/GrpcTest";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="p-5 border rounded-full">Welcome</div>
      {/*<CreateWorker />*/}
      <GrpcTest />
    </main>
  );
}
