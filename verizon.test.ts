
import { until } from 'selenium-webdriver';
import {kimsPageObject} from './verizonPageObject';
const kim = new kimsPageObject();
const fs = require('fs');
const isVideoPlaying = video => !! (video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);


describe("Testing the Verizon Website", () => {  
  
  
    test ("Test 1: KA11SC-3 - test video playback of iPhone 14 Pro Max ad", async () => {
        await kim.driver.manage().window().maximize();
        await kim.navigate();
        await kim.click(kim.phoneAd);
        await kim.driver.sleep(2000);
        let test1Results = await kim.getText(kim.iPhone14ProMaxText);
        expect (test1Results).toContain("Play videos");
        await kim.scrollToElement(kim.playVideoLink);
        await kim.clickWithJavaScript(kim.playVideoLink);
        await kim.click(kim.clickPlay);
        await kim.driver.sleep(14500);
    })
    
    
    test("Test 6: KA11SC-10 - Test Why Verizon / Coverage Map Link", async () => {
      await kim.driver.manage().window().maximize();
      await kim.navigate();
      await kim.click(kim.whyVerizonButton);
      await kim.driver.sleep(2000);
      await kim.click(kim.chooseNetwork);
      await kim.driver.sleep(2000);
      await kim.click(kim.coverageMap);
      await kim.scrollDown();
      await kim.driver.sleep(4000);
      let test6Results = await kim.getText(kim.coverageMapText);
      expect (test6Results).toContain("Explore Verizon 5G and 4G LTE");
    });
 
   
    /*
    test("Test 3: KA11SC-5 - Change language to Spanish", async () => {
        //await kim.navigate();
        await kim.driver.manage().window().maximize();
        await kim.navigate();
        //await kim.driver.sleep(1000);
        await kim.scrollToElement(kim.spanishButton);
        //await kim.driver.sleep(1000);
        await kim.click(kim.spanishButton);
        await kim.click(kim.mapaDelSitio);
        await kim.getElement(kim.mapaDelSitioText);
        await kim.driver.sleep(1000);
    
        let test3Results = await kim.getText(kim.mapaDelSitioText);
        expect (test3Results).toContain("Mapa del sitio.");
    
        //await kim.driver.quit();
      });
 
    */
    /*
    test("Test 4: KA11SC-7 - Test Support button", async () => {
      //await kim.navigate();
      await kim.driver.manage().window().maximize();
      await kim.navigate();
      await kim.driver.sleep(1000);
      await kim.click(kim.supportButton);
      await kim.click(kim.supportOverview);
      await kim.click(kim.deviceSupport);
      await kim.click(kim.searchForDeviceInput);
      await kim.setInput(kim.searchForDeviceInput, "iphone 13 pro max\n");
      await kim.click(kim.selectIphone13ProMax);
      //await kim.scrollToElement(kim.troubleshoot);
      //await kim.scrollDown();
      //await kim.click(kim.troubleshoot);
      //await kim.clickWithJavaScript(kim.troubleshoot);
      await kim.driver.sleep(2000);
  
      let test4Results = await kim.getText(kim.letsTroubleshootYourDeviceMsg);
        expect (test4Results).toContain("Let's troubleshoot your device.");
  
      //await kim.driver.quit();
    }); 
    */

    /*
    test("Test 5: KA11SC-9 - Test plans ad for 2 lines", async () => {
      //await kim.navigate();
      await kim.driver.manage().window().maximize();
      await kim.navigate();
      await kim.driver.sleep(1000);
      //await kim.click(kim.verizonHomePageButton);
      await kim.click(kim.plansAd);
      //await kim.driver.sleep(1000);
      await kim.click(kim.getStartedPlansButton);
      //await kim.driver.sleep(1000);
      await kim.click(kim.newCustomerButton);
      //await kim.driver.sleep(1000);
      await kim.click(kim.addLine);
      //await kim.driver.sleep(1000);
      await kim.setInput(kim.inputZipForPlans, 84003);
      await kim.click(kim.inputZipForPlans);
      await kim.click(kim.continueAfterZipCodeEntry);
      await kim.click(kim.buildYourOwnPlan);
      await kim.click(kim.compareButton);
      await kim.click(kim.closeButtonForComparePlans);
      await kim.click(kim.continueButton);
      await kim.click(kim.chooseDisneyBundle);
      await kim.click(kim.perkContinueButton);
      await kim.scrollIntoView(kim.pickAPlanForLine2);
      await kim.clickWithJavaScript(kim.pickAPlanForLine2);
      await kim.click(kim.buildYourOwnPlan);
      await kim.click(kim.continueButton);
      await kim.click(kim.perkContinueButton);
      await kim.click(kim.buildOrderShopPhones);
      //await kim.click(kim.googlePixelFold);
      await kim.click(kim.pickIphone14Pro);
      //await kim.scrollDown();
      await kim.driver.sleep(1000);
      await kim.scrollIntoView(kim.continue);
      await kim.driver.sleep(1000);
      //await kim.getElement(kim.continue);
      //await kim.driver.sleep(1000);
      //await kim.click(kim.continue);
      //await kim.clickWithJavaScript(kim.continue);
      await kim.click(kim.continue);
      await kim.driver.sleep(10000);
      /*
      await kim.click(kim.skipOffer);
      await kim.scrollIntoView(kim.continueBtnNextPhone);
      await kim.click(kim.continueBtnNextPhone);
      await kim.scrollIntoView(kim.shopSecondPhone);
      await kim.click(kim.shopSecondPhone);
      await kim.scrollIntoView(kim.pickSecondPlan);
      await kim.click(kim.pickSecondPlan);
      await kim.click(kim.selectAppleiPhoneProMax);
      await kim.click(kim.continueWith2ndPhone);
      await kim.click(kim.skipOffer);
      await kim.scrollIntoView(kim.continueWithOrderBtn);
      await kim.click(kim.continueWithOrderBtn);
      await kim.scrollIntoView(kim.continueWithOrderBtn2);
      await kim.click(kim.continueWithOrderBtn2);
      await kim.click(kim.pickIphone14Pro);
      
      await kim.driver.sleep(10000);

      //let test5Results = await kim.getText(kim.buildYourOrderText);
      //  expect (test5Results).toContain("Build your order.");
      
  
      await kim.driver.quit();
    });
   
    */
    
    test("Test 5: KA11SC-9 - Test plans ad for 1 line", async () => {
      await kim.driver.manage().window().maximize();
      await kim.navigate();
      await kim.driver.sleep(1000);
      await kim.click(kim.plansAd);
      await kim.click(kim.getStartedPlansButton);
      await kim.click(kim.newCustomerButton);
      await kim.setInput(kim.inputZipForPlans, 84003);
      await kim.click(kim.inputZipForPlans);
      await kim.click(kim.continueAfterZipCodeEntry);
      await kim.click(kim.buildYourOwnPlan);
      await kim.click(kim.compareButton);
      await kim.click(kim.closeButtonForComparePlans);
      await kim.click(kim.continueButton);
      await kim.click(kim.chooseDisneyBundle);
      await kim.driver.sleep(2000);
      await kim.click(kim.perkContinueButton);
      await kim.driver.sleep(3000);
      let test5Results = await kim.getText(kim.buildYourOrderText2);
      expect (test5Results).toContain("Build your order.");
    });
    
     
    /*
    test ("Test 2: KA11SC-4 - Test stores locator", async () => {
        //await kim.navigate();
        //await kim.driver.sleep(1000);
        await kim.driver.manage().window().maximize();
        await kim.navigate();
        await kim.scrollToElement(kim.storesButton);
        //await kim.driver.sleep(1500);
        await kim.getElement(kim.storesButton);
        //await kim.driver.sleep(1000);
        await kim.click(kim.storesButton);
        //await kim.driver.sleep(1000);
        await kim.click(kim.inputArea);
        await kim.setInput(kim.inputArea, "Lehi, UT");
        await kim.click(kim.inputArea);
        await kim.click(kim.lehiDropdown);
        await kim.getElement(kim.storeAddressResults);
        await kim.driver.sleep(4000);
       
        let resultsTestTwo = await kim.getText(kim.storeAddressResults);
        expect (resultsTestTwo).toContain("UT");
        
        await kim.driver.quit();
    
    })
   
    */
      
    /*
    
    test("Test 7: KA11SC-11 - Test Buy Now link", async () => {
      //await kim.navigate();
      await kim.driver.manage().window().maximize();
      await kim.navigate();
      await kim.driver.sleep(1000);
      
      await kim.click(kim.buyNowButton);
      await kim.driver.sleep(1000);
      await kim.getElement(kim.selectColorDropdown);
      await kim.click(kim.selectColorDropdown);
      await kim.driver.sleep(3000);
      await kim.click(kim.selectRed);
      //await kim.driver.sleep(1000);
      await kim.scrollDown();
      await kim.driver.sleep(3000);
      //await kim.scrollIntoView(kim.continueBtnForBuyNow);
      //await kim.clickWithJavaScript(kim.continueBtnForBuyNow);
      
      let test7Results = await kim.getText(kim.appleIphone14PlusText);
        expect (test7Results).toContain("Apple iPhone 14");  
  
      //await kim.driver.quit();
    });
    
    */

    /*
    test("Test 8: KA11SC-12 - Test Shop link", async () => {
      //await kim.navigate();
      await kim.driver.manage().window().maximize();
      await kim.navigate();
      await kim.driver.sleep(1000);
      
      await kim.click(kim.shopButton);
      await kim.click(kim.shopDevices);
      await kim.click(kim.shopWatches);
      //await kim.scrollDown();
      await kim.driver.sleep(2000);
      
      let test8Results = await kim.getText(kim.connectedSmartWatchesMessage);
      expect (test8Results).toContain("Connected Smart Watches");
  
      //await kim.driver.quit();
    });
    
     */
     
    
    test("Test 9: KA11SC-6 - Test Search button & MetaQuest video", async () => {
        //await kim.navigate();
        await kim.driver.manage().window().maximize();
        await kim.navigate();
        await kim.driver.sleep(1000);
        await kim.click(kim.searchButton);
        await kim.setInput(kim.whatAreYouLookingFor, "Meta Quest 2\n");
        await kim.scrollToElement(kim.metaQuest256);
        await kim.driver.sleep(1000);
        await kim.getElement(kim.metaQuest256);
        await kim.driver.sleep(1000);
        await kim.click(kim.metaQuest256);
        let test9Results = await kim.getText(kim.metaQuestText);
        expect (test9Results).toContain("Play videos");
        await kim.scrollIntoView(kim.playMetaQuest256Video);
        await kim.driver.sleep(1000);
        await kim.click(kim.playMetaQuest256Video);
        await kim.driver.sleep(1000);
        await kim.click(kim.clickMetaQuest256Video);
        await kim.driver.sleep(17000);
        await kim.driver.quit();
      });

});
