import { Button } from "@/components/ui/button";
import Link from "next/link";

function LandingPage() {
  return (
    <div>
      Landing Page
      <div>
        <Link href="/sign-in">
          <Button variant={"default"}>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button variant={"default"}>Register</Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
