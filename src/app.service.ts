import { Injectable } from '@nestjs/common';

const key = 'AAfvpbUpKOw2wk2U29oHbHyRBjcAWOYMd5dZp3d0qrnopBQ2lrD9skO1vnJjL07S';
const ID = 'b0498906-9e0f-4676-9c23-aa5e07007841';
const isAuth =
  'def50200cd6da1ce8e66fc3d7b87ec87044d932ef70ac3e4249497cb6d60da6c315ca934aff42dddc7715fe04418f2c724a345abbf89896e7204674433a272abe0d3348d9f404240be9fe1f429111aebae228fc7d60560affe65d80932781e2a44d03962c41b07156f7fdaee145fbf19767cc1db01229c18b09b009df9a1b56b5763e8fa59279e886cff1db26a0ec38041b911798cc7bdf313c84bf262f77d994b4bb8a5fe42e6798a3b21f30b21245e0059669b3eac027526d338dc59017e7bd722b4d11a90234f9e06e10812d766eb8c8a3f5fcaec11fd5b4b30614155ab9a9a4e3f64f1ab3e16b9d9aff7257b0a1fff4df4109c367fb114ba0a07cad607a1c3284aefe8b08d1826e2a33a1294bc2584f91cb2e67d187524a4d6430773cd2f9c1293ffb60b4fa3987282fab4f30f0d15b32f4062021bcfc1c97c6b360054f0fb3e95f82f77c31dcfacc1da379b00a4c954a210440aeef8c1da957616bfebede812db4fd0596272d7105b307d84aab67a07916ce8a6e930042de3a1e1272422d41ecb513aa2c7bb96c3e6cb340991413771b613f62ecfdca8cb709d7ad788716fe16212861fb819d178fcfdadb80ca29d752b96b8589655359abfd9af54980827ee00fbff4727306c0e393b3d2920c92d7a9da3e3facdef68a991b71293339e26c7e7ca663033036e14c85eacf8e338fd7729e522ae64f50748761d73';

const url = 'https://cantona7ru.amocrm.ru/oauth2/access_token/';
const redirectUri = 'https://e1ac-109-74-174-215.ngrok-free.app/';

@Injectable()
export class AppService {
  async getHello() {
    let user = null;
    await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: ID,
        client_secret: key,
        grant_type: 'authorization_code',
        code: isAuth,
        redirect_uri: redirectUri,
      }),
    }).then((data) => (data.json().then((data) => user = data)));
    console.log(user);
    return user;
  }
}
