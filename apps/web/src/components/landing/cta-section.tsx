"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

export function CtaSection() {
  return (
    <section className="py-32 md:py-40 bg-bg">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <h2
            className="font-display text-ink leading-[1.05] -tracking-[0.02em]"
            style={{
              fontWeight: 300,
              fontSize: "clamp(36px, 5vw, 64px)",
            }}
          >
            Start learning
            <br />
            <span className="italic text-ink-2">with intention.</span>
          </h2>
          <div className="mt-10">
            <Link
              href="/register"
              className="group inline-flex items-center gap-2.5 px-7 h-12 rounded-md text-white font-medium text-sm bg-ember hover:opacity-90 transition-all duration-200"
            >
              Begin your workspace
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
