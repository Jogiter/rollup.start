import { version } from '../package.json';
import pkg from '../package.json'
console.log(version, pkg)

export default () => console.log(`current version is${version}`)
