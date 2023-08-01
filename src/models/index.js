// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Film, Screenshot, BehindSceneShot } = initSchema(schema);

export {
  Film,
  Screenshot,
  BehindSceneShot
};