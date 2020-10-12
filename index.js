const puppeteer = require('puppeteer');

// get dtitle, durl and dimgurl
const dtitle = e.children[1].children[0].children[0].title
const durl = e.children[1].children[1].children[0].children[1].href
const dImgUrl = e.children[0].src

console.log(`[${i}] Title: ${dtitle} URL: ${durl} Image URL: ${dImgUrl}`);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://www.ciinigeria.com/resources/downloads?page=1');
  await page.JSON.parse(JSON.stringify({dtitle, durl, dImgUrl})); 
  
  await browser.close();
  
})();


