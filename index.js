const puppeteer = require('puppeteer');



(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const dtitle = e.children[1].children[0].children[0].title
const durl = e.children[1].children[1].children[0].children[1].href
const dImgUrl = e.children[0].src

console.log(`[${i}] Title: ${dtitle} URL: ${durl} Image URL: ${dImgUrl}`);

  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});
  

  await browser.close();
  
})();

// get title

