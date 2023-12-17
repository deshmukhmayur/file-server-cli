import server from './src/server';

console.log("Hello via Bun!");
server.listen({
  port: 3000,
});