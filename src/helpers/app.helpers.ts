import * as fs from 'fs'
import * as path from 'path'
import { AppConfig } from '../types';
import autobind from 'autobind-decorator';


@autobind
export class AppHelpers {

    private filename: string = 'config.json'
    private filePath: string = path.join(__dirname, '..', this.filename)

    getAppConfig(): AppConfig {
        const cfg: AppConfig = JSON.parse(fs.readFileSync(this.filePath, 'utf8'))

        return cfg
    }

    updateAppConfig(data: AppConfig) {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(data));

        } catch (error) {
            throw error
        }
        // const cfg: AppConfig = JSON.parse(fs.readFileSync(this.filePath, 'utf8'))

    }


}