import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp(functions.config().firebase);

export { discord } from './discord';
export { whazzup } from './whazzup';
export { whazzupStatus } from './whazzup-status';
