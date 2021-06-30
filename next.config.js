module.exports = {
  // To use next/image for static HTML export
  // https://rhnmht30.dev/blog/next-image-with-netlify
  target: 'serverless',
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/masakudamatsu/image/upload/v1625033269',
  },
};
