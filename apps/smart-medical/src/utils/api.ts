import { API_URL } from './constants';

const getUrlApi = () => {
    return API_URL;
}

export const getFetchRequest= async (urlAction: string, params: object) => {   
    return await fetch(`${getUrlApi()}${urlAction}`, {
        method: "POST",
        body: JSON.stringify(params),
        headers: { "Content-Type": "application/json" },
      }).then(
        async (res) => {          
          console.log("🚀 ~ getFetchRequest ~ res:", res)
          const retorno = await res.json();          
          console.log("🚀 ~ retorno:", retorno)

          return retorno;
        }
      ).catch(err => {
        console.log("🚀 ~ getFetchRequest ~ err:", err)  
        return err;
      });
}
      
