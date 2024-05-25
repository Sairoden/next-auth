"use client";

// NEXT
import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user)
    return <div>Client Side: {JSON.stringify(session.data?.user)}</div>;

  return <div>Client Side: User is not signed in</div>;
}
