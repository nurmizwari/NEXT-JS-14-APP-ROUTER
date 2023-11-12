import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const data = [
    {
      nama: "Sepatu",
      harga: 3000,
      id: 1,
    },
    {
      nama: "Baju",
      harga: 5000,
      id: 2,
    },
    {
      nama: "Baju",
      harga: 5000,
      id: 2,
    },
  ];

  return NextResponse.json({
    status: 200,
    Message: "Success",
    data,
  });
}
