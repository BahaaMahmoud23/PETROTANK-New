"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, CheckCircle2, Send, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const contactInfo = [
  {
    icon: MapPin,
    label: "Head Office & Terminal",
    value: "King Fahd Industrial Port, Yanbu, Saudi Arabia",
    sub: "Berths 6 & 8, Industrial Zone",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@petrotank.com.sa",
    href: "mailto:info@petrotank.com.sa",
    sub: "We respond within 1–2 business days",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+966 14 XXX XXXX",
    href: "tel:+96614XXXXXXX",
    sub: "Available during business hours",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Sunday – Thursday",
    sub: "8:00 AM – 5:00 PM (AST)",
  },
];

const subjects = [
  "Storage Solutions Inquiry",
  "Marine Operations",
  "Blending & Processing",
  "Truck Logistics",
  "Automation & Control",
  "General Inquiry",
  "Partnership & Business Development",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <PageHero
        label="Contact Us"
        title="Get in Touch"
        description="Reach out to the PETROTANK team for storage inquiries, marine operations, partnership opportunities, or any business requirement."
        imageUrl="/images/industry/CurrentFacility_ceda4b07.webp"
      />

      <section className="py-20 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-sm">
                {!submitted ? (
                  <>
                    <h2 className="text-2xl font-bold text-ink mb-2">Send Us a Message</h2>
                    <p className="text-muted text-sm mb-8">
                      Complete the form below and a member of our team will respond promptly.
                    </p>

                    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        {/* Full Name */}
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-ink mb-1.5">
                            Full Name <span className="text-teal">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors placeholder:text-muted/50"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-ink mb-1.5">
                            Email Address <span className="text-teal">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="your@company.com"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors placeholder:text-muted/50"
                          />
                        </div>

                        {/* Company */}
                        <div>
                          <label htmlFor="company" className="block text-sm font-semibold text-ink mb-1.5">
                            Company / Organization
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                            className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors placeholder:text-muted/50"
                          />
                        </div>

                        {/* Subject */}
                        <div>
                          <label htmlFor="subject" className="block text-sm font-semibold text-ink mb-1.5">
                            Subject <span className="text-teal">*</span>
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors cursor-pointer"
                          >
                            <option value="">Select a subject</option>
                            {subjects.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="mb-7">
                        <label htmlFor="message" className="block text-sm font-semibold text-ink mb-1.5">
                          Message <span className="text-teal">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Describe your inquiry — the more detail you provide, the better we can assist."
                          className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors placeholder:text-muted/50 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer w-full sm:w-auto"
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                              <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-teal/15 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={32} className="text-teal" />
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-2">Message Sent Successfully</h3>
                    <p className="text-muted text-sm max-w-md mx-auto mb-6">
                      Thank you for contacting PETROTANK. A member of our team will review your inquiry and
                      respond within 1–2 business days.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", company: "", subject: "", message: "" });
                      }}
                      className="inline-flex items-center gap-2 text-primary hover:text-teal font-semibold text-sm transition-colors cursor-pointer"
                    >
                      Send Another Message <ArrowRight size={14} />
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <div>
                <h2 className="text-xl font-bold text-ink mb-1">Contact Information</h2>
                <p className="text-sm text-muted">Reach our team directly.</p>
              </div>

              {contactInfo.map(({ icon: Icon, label, value, href, sub }) => (
                <div
                  key={label}
                  className="bg-white border border-border rounded-xl p-5 hover:border-teal/30 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-blue flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-semibold text-ink hover:text-teal transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-ink">{value}</p>
                      )}
                      <p className="text-xs text-muted mt-0.5">{sub}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick links */}
              <div className="bg-primary rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-light mb-3">Quick Links</p>
                <div className="space-y-2.5">
                  {["Storage Solutions", "Marine Operations", "Certifications"].map((link) => (
                    <a
                      key={link}
                      href={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors cursor-pointer group"
                    >
                      <ArrowRight size={13} className="text-teal group-hover:translate-x-0.5 transition-transform" />
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-20 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h2 className="text-xl font-bold text-ink">Our Location</h2>
              <p className="text-sm text-muted mt-1">
                King Fahd Industrial Port (KFIP), Yanbu, Saudi Arabia
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d39462.89050812361!2d38.19405171224359!3d24.103969096185317!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1776898568649!5m2!1sen!2sus"
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PETROTANK Location — King Fahd Industrial Port, Yanbu, Saudi Arabia"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted text-base mb-2">
              Need immediate operational support?
            </p>
            <p className="text-ink font-semibold text-lg mb-1">
              Our terminal team is available Sunday – Thursday, 8:00 AM – 5:00 PM.
            </p>
            <p className="text-sm text-muted">
              For urgent operational matters, please contact us directly by phone or email.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
