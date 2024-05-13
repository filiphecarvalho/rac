import { User } from '~/services/auth.server';
import { getFetchRequest } from '../../src/utils/api';
import { URL_API_AUTH } from 'src/utils/constants';

export const login = async (email: string, password: string) => {
  let user = { email: email, password: password};

  const response = await getFetchRequest(URL_API_AUTH, user);  

  if (response.message != null) {
    return response;
  } else {

    const object: User = {
      name: response.name.toString(),
      email: response.email.toString(),    
      secretToken: response.access_token.toString()
    }
    return object;
  }  
};
