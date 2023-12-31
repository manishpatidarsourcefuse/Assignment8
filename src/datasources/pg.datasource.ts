import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'PG',
  connector: 'postgresql',
  url: '',
  host: 'localhost',
  port: 5433,
  user: 'postgres',
  password: 'Manish@123456789',
  database: 'postgres'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PgDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'PG';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.PG', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
