"use-client";

import { auth, signIn, signOut } from "@/auth";

import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="py-3 px-5 shadow-sm bg-white font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/about">Create</Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Logout</button>
              </form>
              <Link href={`/user/${session?.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  "use server";

                  await signIn("github");
                }}
              >
                <button type="submit">login</button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
