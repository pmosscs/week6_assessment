
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})


test('Title shows up when page loads', async () => {
    await driver.sleep(1000)
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('Draw button displays choices div', async () => {
    await driver.sleep(1000) 
    const draw = await driver.findElement(By.id('draw'))
    await draw.click()
    await driver.sleep(1000) 
    const choices = await driver.findElement(By.id('choices'))
    const displayedDiv = await choices.isDisplayed()
    expect(displayedDiv).toBe(true)
})

test('see all robots shows robots', async () => {
    await driver.sleep(1000) 
    const allBotsBtn = await driver.findElement(By.id('see-all'))
    await allBotsBtn.click()
    const allBots = await driver.findElement(By.id('all-bots'))
    const divDisplayed = await allBots.isDisplayed()
    expect(divDisplayed).toBe(true)
})




// test('Add to duo displays player-duo div', async () => {
//     await driver.sleep(1000) 
//     //div[contains(@class, "bot-btn")[1]]
//     const addDuo = await driver.findElement(By.id('doesitwork'))
//     await addDuo.click()
//     await driver.sleep(1000) 
//     const playerDuo = await driver.findElement(By.id('player-duo'))
//     const playerDisplayed = await playerDuo.isDisplayed()
//     expect(playerDisplayed).toBe(true)
//     await driver.sleep(1000)
// })