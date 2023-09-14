import { fastify } from 'fastify';

import { getAllPrompts } from './routes/get-all-prompts';

const app = fastify();

app.register(getAllPrompts);

app.get('/', () => {
    console.log('Hello world!');
})

app.listen({
    port: 3333
}).then(() => console.log('Hello world!'));