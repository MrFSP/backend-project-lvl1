export const presets = [
  ['@babel/preset-env',
    {
      targets: {
        node: 'current',
      },
    },
  ],
];
export const plugins = [
  [
    '@babel/plugin-proposal-pipeline-operator',
    {
      proposal: 'minimal',
    },
  ],
];