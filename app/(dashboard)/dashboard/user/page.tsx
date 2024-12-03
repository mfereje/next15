"use client";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>
        User Dashboard
        <ul>
          <li>
            <Link href={"/dashboard/user/1"}>user1</Link>
          </li>
          <li>
            <Link href={"/dashboard/user/2"}>user2</Link>
          </li>
          <li>
            <Link href={"/dashboard/user/3"}>user3</Link>
          </li>
          <li>
            <Link href={"/dashboard/user/4"}>user4</Link>
          </li>
        </ul>
      </h1>
    </div>
  );
};

export default page;
