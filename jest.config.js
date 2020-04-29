module.exports = {
  roots: ['<rootDir>'],

  preset: 'ts-jest',
  testRegex: '(/src/tests/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
};
