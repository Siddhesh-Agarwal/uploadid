import NotAllowedPage from "@/components/NotAllowedPage";
import { SignedIn, SignedOut } from "@/components/supabase/auth";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <NotAllowedPage />
      </SignedOut>
    </>
  );
}
