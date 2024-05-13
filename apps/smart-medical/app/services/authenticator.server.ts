import { FormStrategy } from "remix-auth-form";
import { authenticator } from "./auth.server";
import { login } from "~/domain/account.server";

export const EMAIL_PASSWORD_STRATEGY = 'email-password-strategy';

// Tell the Authenticator to use the form strategy
authenticator.use(
  new FormStrategy(async ({ form }) => {
    
    let user = form.get('email') ?? '';
    let password = form.get('password') ?? '';
    let result = await login(user.toString(), password.toString());
    console.log("🚀 ~ newFormStrategy ~ result:", result)

    // the type of this user must match the type you pass to the Authenticator
    // the strategy will automatically inherit the type if you instantiate
    // directly inside the `use` method
    const { email, name, secretToken } = result;

    return { email, name, secretToken };
  }),
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  EMAIL_PASSWORD_STRATEGY
);