import { spawn } from 'child_process';

export default class Loader {
  constructor() {

  }

  /**
   * Get all installed node modules
   * @returns {Promise}
   */
  static getNodeModules() {
    return new Promise((resolve, reject) => {
      let ls = spawn('npm', ['list', '--json', '-g', '--depth=0']);
      let modules = '';

      ls.stdout.on('data', data => modules += data);
      ls.stdout.on('end', () => resolve(modules));
    });
  }

  /**
   * Get available themes
   * @returns {Array}
   */
  static async getThemes() {
    let modules = await Loader.getNodeModules();
    return modules;
  }
}
