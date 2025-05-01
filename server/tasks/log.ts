export default defineTask({
  meta: {
    name: 'log',
    description: 'Print console log'
  },
  run({ payload, context }) {
    console.log('Hello kitty!', payload, context);
    return { result: 'Success' };
  }
});
