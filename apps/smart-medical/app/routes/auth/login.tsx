import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { type V2_MetaFunction } from "@remix-run/node";

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import { authenticator } from "~/services/auth.server";
import { EMAIL_PASSWORD_STRATEGY } from "~/services/authenticator.server";
import AuthLogin from "src/pages/authentication/auth-forms/AuthLogin";
import AuthWrapper from "src/pages/authentication/AuthWrapper";
import { META_NAME_APP } from "src/utils/constants";

export const meta: V2_MetaFunction = () => {
  return [{ title:`${META_NAME_APP} - Login` }];
};

export default function Screen() {
    return (
      <AuthWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              sx={{ mb: { xs: -0.5, sm: 0.5 } }}
            >
              <Typography variant="h3">Entrar</Typography>              
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <AuthLogin />
          </Grid>
        </Grid>
      </AuthWrapper>
    );
  }

  export async function action({ request }: ActionArgs) {
    // we call the method with the name of the strategy we want to use and the
    // request object, optionally we pass an object with the URLs we want the user
    // to be redirected to after a success or a failure
    return await authenticator.authenticate(EMAIL_PASSWORD_STRATEGY, request, {
      successRedirect: '/home/dashboard',
      failureRedirect: '/auth/login',
    });
  };

  export async function loader({ request }: LoaderArgs) {
    // If the user is already authenticated redirect to /dashboard directly
    return await authenticator.isAuthenticated(request, {
      successRedirect: "/home/dashboard",
    });
  };