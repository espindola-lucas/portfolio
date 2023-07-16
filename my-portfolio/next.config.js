/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = {
//     webpack: (config) => {
//       config.module.rules.push({
//         test: /\.pdf$/,
//         use: {
//           loader: 'file-loader',
//           options: {
//             publicPath: '/_next',
//             name: 'static/media/[name].[hash].[ext]',
//           },
//         },
//       });
  
//       return config;
//     },
//   };

module.exports = {
  async headers() {
    return [
      {
        source: '/curriculum_espanol.pdf',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
        ],
      },
    ];
  },
};
