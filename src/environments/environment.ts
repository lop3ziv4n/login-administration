// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  
  rest_webservice_user_api_url: 'http://localhost:8086/user',
  rest_webservice_authentication_api_url: 'http://localhost:8086/authentication',
  rest_webservice_role_api_url: 'http://localhost:8086/role',
    
  role_user: 'ROLE_USER',
  role_admin: 'ROLE_ADMIN'
};
