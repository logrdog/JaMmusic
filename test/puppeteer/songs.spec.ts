describe('Originals', () => {
  it('should be titled "Originals | Web Jam LLC"', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:7878/music/songs', {
      waitUntil: 'load',
    });
    await page.reload();
    await expect(page.title()).resolves.toMatch('Songs | Web Jam LLC');
  });
});