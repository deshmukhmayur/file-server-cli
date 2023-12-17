import { Bao } from 'baojs';
import { Glob } from 'bun';

const server = new Bao();

server.get('/', (ctx) => {
  return ctx.sendJson({
    message: 'ok'
  });
});

server.get('/files', async (ctx) => {
  console.log(import.meta);
  const file = Bun.file(import.meta.path);
  const contents = await file.text();
  return ctx.sendText(contents);
});

const glob = new Glob('*/*');

for await (const file of glob.scan(".")) {
  console.log(file);
}

export default server;
