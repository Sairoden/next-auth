"use server";

import * as auth from "@/auth";

export const signIn = async () => auth.signIn("github");

export const signOut = async () => auth.signOut();
