import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="h-[100dvh] w-[100dvw]">
      <NavBar />
      <main className="m-auto max-w-7xl p-4">{children}</main>
    </div>
    </>
  );
}
