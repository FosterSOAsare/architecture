"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { Navbar } from "@/features/layout/ui/Navbar";
import { Footer } from "@/features/home/ui/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactSchema } from "../schemas/contact";

import { toast } from "react-toastify";

export function ContactPageContent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: "New Project Inquiry",
    },
  });

  const subject = watch("subject");

  const options = [
    "New Project Inquiry",
    "Press Inquiry",
    "Career Opportunity",
    "Other",
  ];

  const onSubmit = async (data: ContactSchema) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact form submission:", data);
    toast.success("Message sent successfully!");
    reset();
    setValue("subject", "New Project Inquiry");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <h1 className="text-6xl md:text-8xl font-serif font-light mb-8">
              Get in <span className="italic text-gray-500">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600 max-w-2xl leading-relaxed">
              We are always interested in discussing new projects,
              collaborations, or simply exchanging ideas about the future of
              architecture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-16"
            >
              {/* Offices */}
              <div className="space-y-8">
                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 border-b border-gray-200 pb-4">
                  Our Studios
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-medium mb-4">London</h4>
                    <address className="not-italic text-gray-600 space-y-2 font-light">
                      <p>12 Clerkenwell Green</p>
                      <p>London EC1R 0QJ</p>
                      <p>United Kingdom</p>
                    </address>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-4">Tokyo</h4>
                    <address className="not-italic text-gray-600 space-y-2 font-light">
                      <p>3-14-1 Minami-Aoyama</p>
                      <p>Minato-ku, Tokyo</p>
                      <p>107-0062 Japan</p>
                    </address>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="space-y-8">
                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 border-b border-gray-200 pb-4">
                  Contact Info
                </h3>
                <div className="space-y-6">
                  <a
                    href="mailto:fostersoasare@gmail.com"
                    className="flex items-center gap-4 text-xl hover:text-gray-600 transition-colors group"
                  >
                    <Mail
                      className="text-gray-500 group-hover:text-black transition-colors"
                      size={20}
                    />
                    fostersoasare@gmail.com
                  </a>
                  <a
                    href="tel:+33780885945"
                    className="flex items-center gap-4 text-xl hover:text-gray-600 transition-colors group"
                  >
                    <Phone
                      className="text-gray-500 group-hover:text-black transition-colors"
                      size={20}
                    />
                    +33 7 80 88 59 45
                  </a>
                </div>
              </div>

              {/* Socials */}
              <div className="space-y-8">
                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500 border-b border-gray-200 pb-4">
                  Follow Us
                </h3>
                <div className="flex gap-8">
                  {["Facebook", "LinkedIn", "Twitter"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-lg hover:text-gray-600 transition-colors relative group"
                    >
                      {social}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-50 p-8 md:p-12"
            >
              <h3 className="text-2xl font-serif mb-8">Send us a message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono uppercase tracking-widest text-gray-500"
                  >
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors text-lg ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-300 focus:border-black"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono uppercase tracking-widest text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors text-lg ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 focus:border-black"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1 relative">
                  <label
                    htmlFor="subject"
                    className="text-xs font-mono uppercase tracking-widest text-gray-500"
                  >
                    Subject
                  </label>

                  {/* Custom Select Trigger */}
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-transparent border-b border-gray-300 py-3 flex items-center justify-between group focus:outline-none focus:border-black transition-colors text-lg text-left"
                  >
                    <span className="text-black">{subject}</span>
                    <ChevronDown
                      size={16}
                      className={`text-gray-500 transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Custom Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-white shadow-xl z-10 mt-2 py-2 rounded-sm border border-gray-100"
                      >
                        {options.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setValue("subject", option);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-6 py-3 text-sm hover:bg-gray-50 transition-colors ${
                              subject === option
                                ? "text-black font-medium bg-gray-50"
                                : "text-gray-600"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <input type="hidden" {...register("subject")} />
                  {errors.subject && (
                    <p className="text-red-500 text-xs">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="text-xs font-mono uppercase tracking-widest text-gray-500"
                  >
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    className={`w-full bg-transparent border-b py-3 focus:outline-none transition-colors text-lg resize-none ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-300 focus:border-black"
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-4 px-8 flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="uppercase tracking-widest text-sm">
                    {isSubmitting
                      ? "Sending..."
                      : isSubmitSuccessful
                      ? "Message Sent"
                      : "Send Message"}
                  </span>
                  {!isSubmitting && !isSubmitSuccessful && (
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
