module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2bbc1b13e7cf6de15caa16dc0706c1f0'),
  },
});
