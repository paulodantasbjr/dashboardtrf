module.exports = {
  env: {
    BASE_URL: 'https://dashboardtrf.vercel.app',
    MONGODB_URL:
      'mongodb+srv://userTRFDB:userTRFDB@cluster0.wl4ld.mongodb.net/dashboardtrf?retryWrites=true&w=majority',
    ACCESS_TOKEN_SECRET: 'MEU_TOKEN_SECRETO',
    REFRESH_TOKEN_SECRET: 'MEU_REFRESH_TOKEN_SECRETO',
  },
  async headers() {
    return [
      {
        source: 'https://dashboardtrf.vercel.app',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
}
