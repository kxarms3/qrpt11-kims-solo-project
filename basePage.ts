import {Builder, By, Capabilities, until, WebDriver, WebElement, Actions} from "selenium-webdriver";

const chromedriver = require("chromedriver")

interface Options {
    driver?: WebDriver;
    /* if no driver is supplied, we make one or use the constructor to make one */
    url?: string; 
    /* if no url is supplied, we make one or use the constructor to make one*/
}

export class BasePage {
    driver: WebDriver;
    url: string;

    constructor(options?: Options) {
        if (options && options.driver) this.driver = options.driver;
        else
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()
        if(options && options.url) this.url = options.url
    }
    async navigate(url?: string): Promise<void> {
        if (url) return await this.driver.get(url);
        else if (this.url) return await this.driver.get(this.url)
        else
        return Promise.reject(
            "BasePage.navigate() needs a url defined on the page objects, or one passed in."
        )
    }

    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element))
        return element;
    }
    async click(elementBy: By): Promise<void> {
        return(await this.getElement(elementBy)).click();
    }
    async setInput(elementBy:By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys)
    }
    async getText(elementBy: By): Promise<string> {
        return (await this.getElement(elementBy)).getText()
    }
    async getAttribute(elementBy: By, attribute: string): Promise<string> {
        return (await this.getElement(elementBy)).getAttribute(attribute)
    }

    // new code below;  don't delete ending curly brace when modifying 
   

      async mouseOver(elementBy: By) {
        const element = await this.getElement(elementBy);
        //Creating object of an Actions class
        const actions = this.driver.actions({bridge: true}); 
        await actions.move({duration:5000,origin:element,x:0,y:0}).perform();
        
      }

      async scrollDown() {
        //await this.driver.executeScript("window.scrollto(0,250)");
        //await this.driver.executeScript("window.scrollTo(300, 300)");
        await this.driver.executeScript("window.scrollTo(300, 320)");
      }


      async scrollToBottom() {
        await this.driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");
      }


      async clickWithJavaScript(elementBy: By): Promise<void> {
        const element = await this.getElement(elementBy);
        await this.driver.executeScript('arguments[0].click();', element);
    };

    async scrollToElement(elementBy: By) {
        const element = await this.getElement(elementBy);
        await this.driver.executeScript('arguments[0].scrollIntoView(true);', element);
      }
      async scrollIntoView(elementBy: By): Promise<void> {
        const element = await this.getElement(elementBy);
        await this.driver.executeScript('arguments[0].scrollIntoView(true);', element);
    };

    /*
    async isVideoPlaying(elementBy: By): Promise<Boolean> {
         const video = await this.getElement(elementBy);
         if (video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)
      return true;
     }
*/
    // end of new code
}