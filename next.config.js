module.exports = {
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/register",
        destination: "/auth/register",
      },
      {
        source: "/forget",
        destination: "/auth/forget",
      },
    ];
  },
};
