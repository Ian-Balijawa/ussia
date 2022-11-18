function path ( root, sublink ) {
  return sublink === '*' ? sublink : `${root}/${sublink}`;
}

const ROOT = '/';

const ROUTES = {
  ROOT,
  SIGNIN: path( ROOT, 'signin' ),
  SIGNUP: path( ROOT, 'signup' ),
  NOT_FOUND: path( ROOT, '404' ),
  CREATE_PLAN: path( ROOT, 'create-plan' ),
  TO_WORK: path( ROOT, 'to-work' ),
  ALL: path( ROOT, '*' )
};

export { ROUTES };
