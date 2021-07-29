module.exports = {
  env: {
    BASE_URL: 'https://dashboardtrf.vercel.app',
    MONGODB_URL:
      'mongodb+srv://userTRFDB:userTRFDB@cluster0.wl4ld.mongodb.net/dashboardtrf?retryWrites=true&w=majority',
    ACCESS_TOKEN_SECRET: 'MEU_TOKEN_SECRETO',
    REFRESH_TOKEN_SECRET: 'MEU_REFRESH_TOKEN_SECRETO',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://dashboardtrf.vercel.app/:path*',
      },
    ]
  },
}
