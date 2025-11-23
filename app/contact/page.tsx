import type { Metadata } from "next";
import { ContactPageContent } from "@/features/contact/ui/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | REAPER Architecture",
  description: "Get in touch with REAPER Architecture. Our studios in London and Tokyo are ready to discuss your next project.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
