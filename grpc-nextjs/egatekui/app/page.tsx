'use client'
import CreateWorker from "@/app/components/CreateWorker";
import Image from "next/image";
import GrpcTest from "@/app/components/GrpcTest";
import React from "react";
import Countdown from "./components/CountDown";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="p-5 border rounded-full">Welcome</div>
      {/*<CreateWorker />*/}
      {/*<GrpcTest />*/}
      {/* <Countdown targetDate={new Date('2024-12-31T00:00:00')} /> */}

    </main>
  );
}
