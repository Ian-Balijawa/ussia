function path ( root, sublink ) {
  return sublink === '*' ? sublink : `${root}/${sublink}`;
}

const ROOT = '/';

const ROUTES = {
  ROOT,
  SIGNIN: path( ROOT, 'signin' ),
  SIGNUP: path( ROOT, 'signup' ),
  NOT_FOUND: path( ROOT, '404' ),
  CREATE: path( ROOT, 'create' ),
  PLAN: path( ROOT, 'plan' ),
  TO_WORK: path( ROOT, 'to-work' ),
  EDIT_PLAN: path( ROOT, 'edit-plan' ),
  VIDEOS: path( ROOT, 'videos' ),
  PODCASTS: path( ROOT, 'podcasts' ),
  COURSES: path( ROOT, 'courses' ),
  TOOLKIT: path( ROOT, 'toolkit' ),
  ALL: path( ROOT, '*' )
};

export { ROUTES };
