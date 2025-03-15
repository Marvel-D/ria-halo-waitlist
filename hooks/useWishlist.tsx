"use client";
import { addToWaitlistDatabase } from "@/services/generalService";
import { useState } from "react";
import { useToast } from "./use-toast";

export function useWishList() {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToWishList = ({
    username,
    email,
  }: {
    username: string;
    email: string;
  }) => {
    setIsLoading(true);
    setError(null);

    addToWaitlistDatabase({ username, email })
      .then(() => {
        toast({
          title: "Congratulations",
          description: "You've been added to the waitlist",
        });
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  return {
    addToWishList,
    isLoading,
    error,
  };
}
