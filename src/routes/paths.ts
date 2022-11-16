function path(root: string, sublink: string) {
  return sublink === '*' ? sublink : `${root}/${sublink}`;
}

const ROOT = '/';

const PATH = {
  ROOT,
  SIGNIN: path(ROOT, 'signin'),
  SIGNUP: path(ROOT, 'signup'),
  NOT_FOUND: path(ROOT, '404'),
  CREATE_PLAN: path(ROOT, 'create-plan'),
  ALL: path(ROOT, '*')
};

export { PATH };
