// @/app/routes/_index.tsx
import { V2_MetaFunction, type LoaderFunction } from "@remix-run/node";
import { META_NAME_APP } from "src/utils/constants";
import { authenticator } from "~/services/auth.server";

export const meta: V2_MetaFunction = () => {
  return [{ title: META_NAME_APP }];
};

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/home/dashboard",
    failureRedirect: "/auth/login",
  });
};