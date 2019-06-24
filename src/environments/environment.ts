// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiEndpoint: 'http://localhost:3000/',
  apiPhotoEndpoint: 'http://localhost:3000/',
  googleMapKey: 'AIzaSyAx82m7KSQg0obJQYw7L5tGcEXcoM1u9sE',

  firebaseConfig: {
    apiKey: 'AIzaSyBhVyW6ETZTFKUdSZ7cye81mRduCuSu5Wg',
    authDomain: 'petheroes-f1676.firebaseapp.com',
    databaseURL: 'https://petheroes-f1676.firebaseio.com',
    projectId: 'petheroes-f1676',
    storageBucket: 'petheroes-f1676.appspot.com',
    messagingSenderId: '943482078939',
    appId: '1:943482078939:web:876974ad9dae4e04'
  }

};
