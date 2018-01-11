import configCommon from './config.common';
import configDevelopment from './config.development';
import configProduction from './config.production';


const isProduction = ( process.env.NODE_ENV === 'production' );

export default {
  ...configCommon,
  ...( isProduction ? configProduction : configDevelopment ),
};

export { default as routes } from './routes';
