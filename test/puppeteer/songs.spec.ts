describe('Originals', () => {
  it('should be titled "Songs | Web Jam LLC"', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:7878/music/songs', {
      waitUntil: 'domcontentloaded',
    });
    expect(page).toBeDefined();
    await expect(page.title()).resolves.toMatch('Songs | Web Jam LLC');
  });
});
