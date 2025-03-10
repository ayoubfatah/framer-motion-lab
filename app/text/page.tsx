import Image from "next/image";
import React from "react";

export default async function TestPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  if (!res.ok) {
    throw new Error("something happened while fetching the data");
  }
  const data = await res.json();
  console.log(data);
  const img =
    "https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className=" relative h-screen w-full grid place-items-center bg-black">
      <Image
        src={img}
        alt="A responsive image "
        quality={85}
        width={900}
        height={800}
        sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
}
