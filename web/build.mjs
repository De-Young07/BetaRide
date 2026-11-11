import { mkdirSync, cpSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = dirname(fileURLToPath(import.meta.url));
const dist = resolve(dir, 'dist');
mkdirSync(dist, { recursive: true });

for (const f of ['index.html', 'styles.css', 'assets', 'js', 'booking']) {
  const src = resolve(dir, f);
  if (existsSync(src)) {
    cpSync(src, resolve(dist, f), { recursive: true, force: true });
  }
}
console.log('web dist built successfully');
