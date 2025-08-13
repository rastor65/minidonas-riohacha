const isProd = process.env.NODE_ENV === 'production';
const repo = 'minidonas-riohacha';

export default {
  output: 'export',              // genera /out al compilar
  images: { unoptimized: true }, // GitHub Pages no optimiza imágenes
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,
};
