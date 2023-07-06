//https://jestjs.io/docs/webpack#mocking-css-modules
//https://runebook.dev/ru/docs/jest/configuration#moduledirectories-arraystring
import type { Config } from "./node_modules/@jest/types/build/index";
/** @type {import('ts-jest').JestConfigWithTsJest} */

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleDirectories: ["node_modules", "src"],
  verbose: true,
  automock: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
  ],
}
export default config