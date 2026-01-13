import type { Metadata } from "next";
import PageContent from "./content";

export const metadata: Metadata = {
  title: "About Us | Turbine Axis",
  description:
    "Learn more about Turbine Axis, our mission, vision, and expertise in aviation services.",
};

export default function AboutPage() {
  return <PageContent />;
}
