// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: ["@snowpack/plugin-babel"],
  packageOptions: {
    knownEntrypoints: ["solid-js"]
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
