import NavBar from "./NavBar";
import NotesPage from "./page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="h-[100dvh] w-[100dvw]">
      <NavBar />
      <NotesPage/>
    </div>
    </>
  );
}
