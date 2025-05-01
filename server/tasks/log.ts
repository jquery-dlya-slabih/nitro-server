export default defineTask({
  meta: {
    name: 'log',
    description: 'Print log'
  },
  run({ payload, context }) {
    console.log('Hello world!');
    return { result: 'Success' };
  }
});
