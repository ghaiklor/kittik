import { spawn } from 'child_process';

export class Loader {
  constructor() {

  }

  static async getNodeModules() {
    return new Promise((resolve, reject) => spawn('npm ls --json', (error, stdout, stderr) => error ? reject(error) : resolve(JSON.parse(stdout))));
  }

  static async getThemes() {
    let modules = await Loader.getNodeModules();
    return modules;
  }

  static async getPresentations() {
    return [];
  }
}
