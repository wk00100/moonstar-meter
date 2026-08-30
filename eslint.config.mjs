import pluginVue from 'eslint-plugin-vue';
import { includeIgnoreFile } from "eslint/config";
import { fileURLToPath } from "node:url";
import { vueTsConfigs, withVueTs } from '@vue/eslint-config-typescript';


const gitignore = fileURLToPath(new URL('.gitignore', import.meta.url));

export default withVueTs(pluginVue.configs['flat/essential'], vueTsConfigs.recommended, includeIgnoreFile(gitignore));