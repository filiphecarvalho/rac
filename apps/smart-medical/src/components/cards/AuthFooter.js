// material-ui
import { useMediaQuery, Container, Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl">
      <Stack
        direction={matchDownSM ? 'column' : 'row'}
        justifyContent={matchDownSM ? 'center' : 'space-between'}
        spacing={2}
        textAlign={matchDownSM ? 'center' : 'inherit'}
      >
        <Typography variant="subtitle2" color="secondary" component="span">
          &copy; Smart Medical Software by&nbsp;
          <Typography component={Link} variant="subtitle2" href="https://racsolucoes.com.br" target="_blank" underline="hover">
            RAC Soluções
          </Typography>
        </Typography>

        <Stack direction={matchDownSM ? 'column' : 'row'} spacing={matchDownSM ? 1 : 3} textAlign={matchDownSM ? 'center' : 'inherit'}>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://racsolucoes.com.br/smartmedical/politica-de-privacidade"
            target="_blank"
            underline="hover"
          >
            Política de Privacidade
          </Typography>
          <Typography
            variant="subtitle2"
            color="secondary"
            component={Link}
            href="https://racsolucoes.com.br.support-hub.io/"
            target="_blank"
            underline="hover"
          >
            Suporte
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AuthFooter;
