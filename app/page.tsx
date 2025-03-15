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
    <div className="relative flex min-h-screen flex-col bg-[#020c12] text-[#3cc1ff]">
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
              className="inline-flex items-center gap-1 rounded-full bg-[#1a1a1a] px-4 py-1.5 text-sm font-medium text-[#3cc1ff] shadow-md hover:shadow-cyan-500/50"
            >
              🎉{" "}
              <Separator
                className="h-4 border-cyan-400"
                orientation="vertical"
              />{" "}
              Introducing <span className="text-[#00ffff]">Halo</span>
            </motion.a>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-bold leading-tight tracking-tighter text-[#3cc1ff] md:text-6xl lg:text-7xl lg:leading-[1.1]"
            >
              Join the waitlist for
              <br />
              <span className="text-[#00ffff] drop-shadow-lg">Halo</span>
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-[750px] text-center text-lg text-gray-400 sm:text-xl"
            >
              Halo is designed to provide future engineers with opportunities to
              <br /> expand their industrial experience.
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4 max-w-[500px] w-full"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                  className="h-12 px-4 bg-[#1a1a1a] text-white border border-[#3cc1ff] focus:border-[#00ffff] focus:ring-2 focus:ring-[#00ffff]"
                  placeholder="Full Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <Input
                  className="h-12 px-4 bg-[#1a1a1a] text-white border border-[#3cc1ff] focus:border-[#00ffff] focus:ring-2 focus:ring-[#00ffff]"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-8 bg-[#3cc1ff] text-[#020c12] font-bold border border-[#00ffff] shadow-md hover:shadow-cyan-500/50 transition-all duration-200"
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
