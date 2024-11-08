const { test, expect } = require('@playwright/test');

test.describe('API Status Code Test', () => {
  test('should return 200 status code for GET request', async ({ request }) => {
    // Define the URL
    const url = 'https://reqres.in/api/users/2';

    // Make the GET request
    const response = await request.get(url);

    // Verify the status code
    expect(response.status()).toBe(200);
  });
});
