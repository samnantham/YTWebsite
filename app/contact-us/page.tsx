import type { Metadata } from "next";
import PageContent from "./content";

export const metadata: Metadata = {
  title: "Contact Us | Turbine Axis",
  description:
    "Get in touch with Turbine Axis. We’re here to answer your questions and provide expert support across our global aviation services network.",
};

export default function ContactPage() {
  return <PageContent />;
}
