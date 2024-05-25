// STYLES
import { Button } from "@nextui-org/react";

// ACTIONS
import { signIn, signOut } from "@/actions";

// AUTH
import { auth } from "@/auth";

// COMPONENTS
import { Profile } from "@/components";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={signIn}>
        <Button type="submit">Sign In</Button>
      </form>

      <form action={signOut}>
        <Button type="submit">Sign Out</Button>
      </form>

      {session?.user ? (
        <h1>{JSON.stringify(session.user)}</h1>
      ) : (
        <h1>Not signed in</h1>
      )}

      <Profile />
    </div>
  );
}
