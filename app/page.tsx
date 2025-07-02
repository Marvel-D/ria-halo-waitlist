"use client";

import { SiteHeader } from "../components/shared/site-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useWishList } from "@/hooks/useWishlist";
import { useState } from "react";

export default function Home() {
  const { addToWishList, isLoading, error } = useWishList();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const clearForm = () => {
    setEmail("");
    setUsername("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addToWishList({ username, email });
    if (!error) {
      clearForm();
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-emerald-950 text-amber-500">
      <SiteHeader />
      <main className="flex-1 px-4">
        <section className="flex min-h-screen flex-col items-center justify-center space-y-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container flex flex-col items-center justify-center gap-6 text-center"
          >
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              href="#"
              className="inline-flex items-center gap-1 rounded-full bg-[#1a1a1a] px-4 py-1.5 text-sm font-medium text-amber-600 shadow-md hover:shadow-cyan-500/50"
            >
              🎉{" "}
              <Separator
                className="h-4 border-amber-400"
                orientation="vertical"
              />{" "}
              Introducing <span className="text-amber-600">AIME</span>
            </motion.a>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-bold leading-tight tracking-tighter text-amber-500 md:text-6xl lg:text-7xl lg:leading-[1.1]"
            >
              Join the waitlist for
              <br />
              <span className="text-amber-500 drop-shadow-lg">AIME</span>
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-[750px] text-center text-lg text-white sm:text-xl"
            >
              Imagine a world where everyone get a fair shot to show and reach
              their full potential. AIME's models are the future of expert-led
              operations.
              {/* AIME's models are the future of expert-led operations intelligent systems that
              enable expert-led education, fair hiring, */}
              {/* <br /> and efficient onboarding in high-impact, niche industries
              across Africa. */}
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4 max-w-[500px] w-full"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                  className="h-12 px-4 bg-[#1a1a1a] text-white border border-amber-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400"
                  placeholder="Full Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <Input
                  className="h-12 px-4 bg-[#1a1a1a] text-white border border-amber-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-8 bg-amber-500 text-[#020c12] font-bold shadow-md hover:shadow-cyan-500/50 transition-all duration-200"
                  disabled={isLoading}
                >
                  {isLoading ? "loading..." : "Join the WaitList"}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
