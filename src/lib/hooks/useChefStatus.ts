"use client";

import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Hook que determina se o utilizador atual deve ser tratado como Chef
 * (dashboard de chef, rotas de chef, ou metadados do Clerk).
 * Reutilizável na NavBar, redirects e condicionais de UI.
 */
export function useChefStatus(): boolean {
  const { user } = useUser();
  const pathname = usePathname();
  const [isChef, setIsChef] = useState(false);

  useEffect(() => {
    if (!user) {
      setIsChef(false);
      return;
    }

    const roleFromMetadata = user.publicMetadata?.role === "CHEF";
    const isOnChefRoute = pathname.includes("/chef/");
    const isChefLogin =
      typeof window !== "undefined" &&
      localStorage.getItem("isChefLogin") === "true";

    setIsChef(roleFromMetadata || isOnChefRoute || isChefLogin);
  }, [user, pathname]);

  return isChef;
}
