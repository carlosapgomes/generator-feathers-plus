
import { join } from 'path';
import { authenticationServices } from '@feathers-plus/test-utils';
import config from '../config/default.json';

// Determine if environment allows test to mutate existing DB data.
const env = (config.tests || {}).environmentsAllowingSeedData || [];
const dbChangesAllowed = env.indexOf(process.env.NODE_ENV) !== -1;
if (!dbChangesAllowed) {
  // tslint:disable-next-line:no-console
  console.log('SKIPPED - Test authentication.services.ts');
  // @ts-ignore
  return;
}

const appRoot = join(__dirname, '..');
authenticationServices(appRoot, {
  delayAfterServerOnce: 500,
  delayAfterServerClose: 500,
  timeoutForStartingServerAndClient: 30000,
  timeoutForClosingingServerAndClient: 30000
});
