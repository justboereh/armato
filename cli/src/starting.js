module.exports = {
  workingTree: [
    { Name: 'Lighting' },
    { Name: 'ReplicatedFirst' },
    { Name: 'ReplicatedStorage' },
    {
      Name: 'ServerScriptService',
    },
    { Name: 'ServerStorage' },
    { Name: 'StarterGui' },
    { Name: 'StarterPack' },
    {
      Name: 'StarterPlayer',
    },
    { Name: 'Workspace' },
    { Name: 'SoundService' },
    {
      Path: 'ServerScriptService',
      Name: 'Hello',
      ClassName: 'Script',
      Source: 'print("Hello World")',
    },
    {
      Path: 'StarterPlayer',
      Name: 'StarterCharacterScripts',
    },
    {
      Path: 'StarterPlayer',
      Name: 'StarterPlayerScripts',
    },
  ],

  startingDirectory: [
    '/Lighting',
    '/ReplicatedFirst',
    '/ReplicatedStorage',
    '/ServerScriptService',
    '/ServerStorage',
    '/StarterGui',
    '/StarterPack',
    '/StarterPlayer',
    '/StarterPlayer/StarterCharacterScripts',
    '/StarterPlayer/StarterPlayerScripts',
    '/Workspace',
    '/SoundService',
  ],

  startingFiles: [
    {
      path: '/ServerScriptService/Script.Script',
      content: 'print("Hello World")',
    },
    {
      path: '/armato.config.json',
      content: '{}',
    },
  ],

  startingConfig: {
    backup: true,
    backupInterval: 15 * 60 * 60,
  },
}
