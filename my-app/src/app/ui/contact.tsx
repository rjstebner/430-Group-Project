import Head from "next/head";
import ContactForm from "../../../components/ContactForm";
import ContactInfo from "../../../components/ContactInfo";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Handcrafted Haven</title>
        <meta 
          name="description" 
          content="Get in touch with Handcrafted Haven. We'd love to hear from you!" 
        />
      </Head>

      <main className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg mt-10">
        <h1 className="text-4xl font-bold text-center text-gray-900">Contact Us</h1>
        <p className="text-lg text-center text-gray-700 mt-4 mb-8">
          Have a question? Fill out the form below or reach out to us directly.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <ContactForm />
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <ContactInfo />
          </div>
        </div>
      </main>
    </>
  );
}
