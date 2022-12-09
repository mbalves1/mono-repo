const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@monorepo/design-system',
  '@monorepo/utils'
]);

/**
 *  @type {import('next').NextConfig}
 */

module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
