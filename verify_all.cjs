const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/home/jules/verification/splash.png' });

  // Login to Dashboard
  await page.click('button:has-text("ENTER THE LEAGUE")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/dashboard.png' });

  // Navigate to Leaderboard
  await page.click('button:has-text("Leaderboard")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/leaderboard.png' });

  // Navigate to Teams
  await page.click('button:has-text("Teams")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/teams.png' });

  // Navigate to Players
  await page.click('button:has-text("Players")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/players.png' });

  // Navigate to Market
  await page.click('button:has-text("Market")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/market.png' });

  // Navigate back to Dashboard and then to Locker Room
  await page.click('button:has-text("Dashboard")');
  await page.click('button:has-text("VIEW MY SQUAD")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/locker_room.png' });

  // Navigate to Live Auction
  await page.click('button:has-text("Back to Dashboard")');
  await page.click('button:has-text("LIVE FEED")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/live_auction.png' });

  await browser.close();
})();
