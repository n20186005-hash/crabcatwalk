import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Crab Catwalk | Passarela do Caranguejo",
  description:
    "Crab Catwalk (Passarela do Caranguejo) - Famous seaside promenade in Aracaju, Brazil. Guide to crab restaurants and sunset views.",
};

export default function RootPage() {
  redirect("/en");
}
