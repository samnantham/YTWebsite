import type { Metadata } from "next";
import PageContent from "./content";

export const metadata: Metadata = {
  title: "Careers | Turbine Axis",
  description:
    "Turbine Axis careers offer opportunities to work in a global aviation services organization focused on quality, safety, and continuous innovation.",
};

export default function CareerPage() {
  return <PageContent />;
}
