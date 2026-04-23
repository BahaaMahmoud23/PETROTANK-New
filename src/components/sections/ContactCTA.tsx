"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: MapPin,
    label: "Head Office",
    value: "King Fahd Industrial Port, Yanbu, Saudi Arabia",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@petrotank.com.sa",
    href: "mailto:info@petrotank.com.sa",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Sunday – Thursday, 8:00 AM – 5:00 PM",
  },
];

export default function ContactCTA() {
  return (
    <section className="py-24 bg-white" aria-labelledby="contact-cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-10 md:p-14">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-light block mb-4"
              >
                Get In Touch
              </motion.span>
              <motion.h2
                id="contact-cta-heading"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Ready to Work with Us?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="text-white/70 text-base leading-relaxed mb-8 max-w-md"
              >
                Whether you need bulk liquid storage, marine operations, or integrated energy logistics,
                our team at King Fahd Industrial Port is ready to support your operations.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-teal hover:text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer group"
                >
                  Contact Us
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer"
                >
                  Our Services
                </Link>
              </motion.div>
            </div>

            <div className="bg-white/10 border-l border-white/10 p-10 md:p-14 flex flex-col justify-center">
              <ul className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-teal-light" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-white text-sm hover:text-teal-light transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
