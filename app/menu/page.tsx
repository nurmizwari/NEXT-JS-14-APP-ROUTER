"use client";
import { Button } from "@/components/ui/button";
// client component

import { useRouter } from "next/navigation";
import React from "react";

export default function MenuPage() {
  const router = useRouter();
  const pindah = () => {
    router.push("/", { scroll: false });
  };
  return (
    <div>
      <Button variant={"secondary"} onClick={pindah}>
        Menu Page
      </Button>
    </div>
  );
}
