// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';
const repo = 'minidonas-riohacha';

export default {
  output: 'export',              // genera /out al hacer build
  images: { unoptimized: true }, // sin optimización en servidor (Pages no tiene server)
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,
};
