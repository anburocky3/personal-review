import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Reviews | Anbuselvan Annamalai",
  description: "User can give reviews about anbuselvan annamalai!",
};

export default function AppLayout({ children }) {
  return (
    <div>
      <div>
        <Navbar appTitle={"ANBU SELVAN"} />
      </div>
      <div>{children}</div>
    </div>
  );
}
