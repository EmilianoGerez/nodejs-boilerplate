// import { ContainerBuilder, YamlFileLoader } from 'node-dependency-injection';
import { ContainerBuilder } from 'node-dependency-injection';
import StatusController from '../controllers/status.controller';
const container = new ContainerBuilder();
// const loader = new YamlFileLoader(container);
// const env = process.env.NODE_ENV || 'dev';

// loader.load(`${__dirname}/application_${env}.yaml`);

container.register('StatusController', StatusController)

export default container;
