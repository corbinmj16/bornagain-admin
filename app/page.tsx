import { Ministry } from "@/types/Ministry";
import Image from "next/image";

async function getData() {
  const res: Response = await fetch("https://bornagain.app/api/ministries");

  if (!res.ok) {
    throw new Error("Failed to fetch ministries");
  }

  return res.json();
}

export default async function Home() {
  const data: Ministry[] = await getData();

  return (
    <div className="">
      {data.map((ministry: Ministry) => {
        return (
          <div key={ministry.id}>
            <Image
              src={ministry.logo}
              alt={ministry.name}
              width={100}
              height={100}
            />
            <h1>{ministry.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
