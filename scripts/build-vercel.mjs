import { cp, mkdir, rm, readdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const source of ['index.html', 'styles.css', 'js', 'assets']) {
  await cp(resolve(root, source), resolve(output, source), { recursive: true });
}

// Also make root assets accessible directly at / for universal fallback
const assetFiles = await readdir(resolve(root, 'assets'));
for (const file of assetFiles) {
  await cp(resolve(root, 'assets', file), resolve(output, file), { force: true });
}

const build = spawnSync(process.execPath, [resolve(root, 'node_modules/vite/bin/vite.js'), 'build'], {
  cwd: resolve(root, 'apps/booking'),
  stdio: 'inherit',
  env: { ...process.env, VERCEL: '1' }
});
if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status ?? 1);
await cp(resolve(root, 'apps/booking/dist'), resolve(output, 'booking'), { recursive: true });
