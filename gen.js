const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle0' });

  await page.pdf({ 
    path: 'out/curriculo.pdf', 
    format: 'A4',
    printBackground: true,
    margin: {
      top: '5mm',
      bottom: '5mm',
      left: '5mm',
      right: '5mm'
    }
  });

  await browser.close();
})();
