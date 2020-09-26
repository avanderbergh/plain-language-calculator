const fetch = require('node-fetch');

describe('Test the API', () => {
  let server;
  beforeAll(() => {
    // eslint-disable-next-line global-require
    server = require('./app');
  });

  afterAll(() => {
    server.close();
  });

  it('returns a status of 200 when on post request to /calculate', async () => {
    const payload = {
      input: 'one plus one',
    };
    const result = await fetch('http://localhost:3000/calculate', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });
    expect(result.status).toBe(200);
  });

  it('returns {result: 2} when a post request with body {input: "one plus one"} is made', async () => {
    const payload = {
      input: 'one plus one',
    };
    const response = await fetch('http://localhost:3000/calculate', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.text();

    expect(result).toBe('2');
  });
});
