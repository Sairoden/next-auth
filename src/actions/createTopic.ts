"use server";

// NEXT
import { revalidatePath } from "next/cache";

// UTILS
import paths from "@/utils/paths";

export const createTopic = async () => {
  revalidatePath(paths.home());
};
