import * as process from 'node:process';

export default () => ({
  port: parseInt(process.env.PORT ?? '') || 3000,
  externalApis: {
    nagger: process.env.NAGGER_URL,
    countriesnow: process.env.COUNTRIESNOW_URL,
  },
});
