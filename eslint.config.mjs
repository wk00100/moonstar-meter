import pluginVue from 'eslint-plugin-vue'
import { includeIgnoreFile } from 'eslint/config'
import { fileURLToPath } from 'node:url'
import { vueTsConfigs, withVueTs } from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

const gitignore = fileURLToPath(new URL('.gitignore', import.meta.url))

export default withVueTs(
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  includeIgnoreFile(gitignore),
  // Formatting is Prettier's job (`pnpm format`); turn off ESLint rules that would fight it.
  skipFormatting
)
