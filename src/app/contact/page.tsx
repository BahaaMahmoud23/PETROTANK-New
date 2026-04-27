"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, CheckCircle2, Send, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { fadeUp } from "@/lib/animations";

const infoIcons = [MapPin, Mail, Phone, Clock];
const infoHrefs = [null, "mailto:info@petrotank.com.sa", null, null];

type FormState = { name: string; email: string; company: string; subject: string; message: string };

export default function ContactPage() {
  const { t, isRTL } = useLanguage();
  const cp = t.contactPage;

  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <PageHero
        label={cp.hero.label}
        title={cp.hero.title}
        description={cp.hero.description}
        imageUrl="/images/industry/CurrentFacility_ceda4b07.webp"
      />

      {/* ── Form + Info — equal 2-column ─────────── */}
      <section className="py-20 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Contact Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-sm"
            >
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-bold text-ink mb-2">{cp.formTitle}</h2>
                  <p className="text-muted text-sm mb-8">{cp.formSubtitle}</p>

                  <form onSubmit={handleSubmit} noValidate aria-label={cp.formTitle}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-ink mb-1.5">
                          {cp.fields.name} <span className="text-teal">*</span>
                        </label>
                        <input
                          id="name" name="name" type="text" required
                          value={form.name} onChange={handleChange}
                          placeholder={cp.fields.placeholder.name}
                          dir={isRTL ? "rtl" : "ltr"}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors placeholder:text-muted/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-ink mb-1.5">
                          {cp.fields.email} <span className="text-teal">*</span>
                        </label>
                        <input
                          id="email" name="email" type="email" required
                          value={form.email} onChange={handleChange}
                          placeholder={cp.fields.placeholder.email}
                          dir="ltr"
                          className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors placeholder:text-muted/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-ink mb-1.5">
                          {cp.fields.company}
                        </label>
                        <input
                          id="company" name="company" type="text"
                          value={form.company} onChange={handleChange}
                          placeholder={cp.fields.placeholder.company}
                          dir={isRTL ? "rtl" : "ltr"}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors placeholder:text-muted/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-ink mb-1.5">
                          {cp.fields.subject} <span className="text-teal">*</span>
                        </label>
                        <select
                          id="subject" name="subject" required
                          value={form.subject} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-ink text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors cursor-pointer"
                        >
                          <option value="">{cp.selectSubject}</option>
                          {cp.subjects.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-7">
                      <label htmlFor="message" className="block text-sm font-semibold text-ink mb-1.5">
                        {cp.fields.message} <span className="text-teal">*</span>
                      </label>
                      <textarea
                        id="message" name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder={cp.fields.placeholder.message}
                        dir={isRTL ? "rtl" : "ltr"}
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
                          {cp.sending}
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          {cp.submitBtn}
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
                  <h3 className="text-xl font-bold text-ink mb-2">{cp.successTitle}</h3>
                  <p className="text-muted text-sm max-w-md mx-auto mb-6">{cp.successMsg}</p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", company: "", subject: "", message: "" });
                    }}
                    className="inline-flex items-center gap-2 text-primary hover:text-teal font-semibold text-sm transition-colors cursor-pointer"
                  >
                    {cp.sendAnother}
                    <ArrowRight size={14} className={isRTL ? "scale-x-[-1]" : ""} />
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-5"
            >
              <div className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-sm">
                <h2 className="text-xl font-bold text-ink mb-1">{cp.infoTitle}</h2>
                <p className="text-sm text-muted mb-7">{cp.infoSubtitle}</p>

                <div className="space-y-4">
                  {cp.info.map(({ label, value, sub }, i) => {
                    const Icon = infoIcons[i];
                    const href = infoHrefs[i];
                    return (
                      <div key={label} className="flex items-start gap-4 p-4 bg-canvas border border-border rounded-xl hover:border-teal/30 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-surface-blue flex items-center justify-center shrink-0">
                          <Icon size={18} className="text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-0.5">{label}</p>
                          {href ? (
                            <a href={href} className="text-sm font-semibold text-ink hover:text-teal transition-colors">{value}</a>
                          ) : (
                            <p className="text-sm font-semibold text-ink">{value}</p>
                          )}
                          <p className="text-xs text-muted mt-0.5">{sub}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-light mb-4">{cp.quickLinksTitle}</p>
                <div className="space-y-3">
                  {cp.quickLinks.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors cursor-pointer group"
                    >
                      <ArrowRight size={13} className={`text-teal group-hover:translate-x-0.5 transition-transform ${isRTL ? "scale-x-[-1]" : ""}`} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Map — full-width block ─────────────────── */}
      <section className="bg-canvas border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-4">
          <h2 className="text-xl font-bold text-ink">{cp.locationTitle}</h2>
          <p className="text-sm text-muted mt-1 mb-6">{cp.locationSub}</p>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-border"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d39462.89050812361!2d38.19405171224359!3d24.103969096185317!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1776898568649!5m2!1sen!2sus"
            width="100%"
            height="480"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PETROTANK Location — King Fahd Industrial Port, Yanbu, Saudi Arabia"
          />
        </motion.div>
      </section>

      {/* ── Final CTA ─────────────────────────────── */}
      <section className="py-14 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted text-base mb-1.5">{cp.urgentTitle}</p>
            <p className="text-ink font-semibold text-lg mb-1">{cp.urgentBody}</p>
            <p className="text-sm text-muted">{cp.urgentNote}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
