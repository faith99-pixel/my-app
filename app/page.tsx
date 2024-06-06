'use client'
import Image from "next/image";
import user from "../Data/user.json"
import { useState } from "react";
import NotificationPage from "./components/notification/NotificationPage";


export default function Home() {

  // console.log(user)
  // const [data, setData] = useState(user)


  return (
    <main className="flex flex-col items-center justify-between">
      {/* {
        data && user.map((i, index) => {
          return (
            <div key={index}>{i.link}
            <p>{i.name}<span className="text-black p-4">has joined a club</span></p>
            </div>
          )
        })
      } */}
      < NotificationPage />

    </main>
  );
}
