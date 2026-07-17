import type { UserRole } from "@/generated/prisma/enums";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/server/auth/options";

export async function requireUser() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/entrar");
  }

  return session;
}

export async function requireRole(allowedRoles: UserRole[]) {
  const session = await requireUser();

  if (!allowedRoles.includes(session.user.role)) {
    redirect("/");
  }

  return session;
}
