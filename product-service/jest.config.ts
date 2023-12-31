import { pathsToModuleNameMapper, JestConfigWithTsJest } from 'ts-jest';
// @ts-ignore
import { compilerOptions } from './tsconfig.paths.json';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
}

export default jestConfig;
