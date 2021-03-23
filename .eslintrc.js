module.exports = {
  extends: 'kentcdodds',
  rules: {
    camelcase: [
      'error',
      {
        allow: [
          'consumer_key',
          'consumer_secret',
          'access_token',
          'access_token_secret'
        ]
      }
    ]
  }
};
