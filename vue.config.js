module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  /* github pages deployment path */
  publicPath: process.env.NODE_ENV === 'production'
  ? '/pace-converter/'
  : '/'
}