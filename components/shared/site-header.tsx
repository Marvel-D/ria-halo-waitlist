"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container px-4 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold"
          >
            Halo.
          </motion.span>
        </Link>
        <p className="text-base">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-bold"
          >
            By the R.I.A.
          </motion.span>
        </p>
      </div>
    </motion.header>
  );
}
