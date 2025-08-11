// pages/contact.tsx
import dynamic from "next/dynamic";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactHeader from "./ContactHeader";



export default function ContactPage() {
  return (
   
    

      <section className="py-12 px-4">
        <ContactHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left side - Info */}
          <ContactInfo />

          {/* Right side - Form */}
          <ContactForm />
        </div>
      </section>
    
  );
}
