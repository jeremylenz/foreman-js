module.exports = {
  stories: [`${process.cwd()}/webpack/**/*.stories.@(js|mdx)`],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: false },
    },
  ],
};
