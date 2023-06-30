import {By, until} from 'selenium-webdriver';
import {BasePage} from './basePage';
export class kimsPageObject extends BasePage {

    //mainMenu: By = By.css("#gnav20-nav-toggle");
    //verizonHomePageButton: By = By.xpath('//a[@class="gnav20-logoWhiteBg"]')[0];
    verizonHomePageButton: By = By.xpath('//div[@class="gnav20-logo"]')[0];
    mainMenu: By = By.css("#gnav20-eyebrow-link-Personal");
    //choosePersonal: By = By.css("#gnav20-eyebrow-link-Personal");
    whyVerizonButton: By = By.xpath('//button[@id="gnav20-Why-Verizon-L1"]');
    chooseNetwork: By = By.xpath('//a[@id="gnav20-Why-Verizon-L2-1"]');
    coverageMap: By = By.xpath('//a[@id="gnav20-Why-Verizon-L3-2"]');


    //searchAddress: By = By.xpath('//div[@id="root_search_container"]');
    //searchAddress: By = By.xpath('//div[@class="searchV2__search_container__xfudD"]');
    //searchAddress: By = By.xpath('//input[@class="searchV2__search_input__11y2w"]');
    //searchAddress: By = By.xpath('//input[@id="search_input"]');
    //searchAddress: By = By.xpath('//form[@id="search_input"]');
    searchAddress: By = By.xpath('//input[@*]');
    
    


    chooseMobile: By = By.css("#gnav20-eyebrow-link-Personal");
    selectPhones: By = By.css('#gnav20-Mobile-L2-2');
    phoneAd: By = By.css(".Col.hero-tile-wrap-content.u-paddingTop--xs24.u-paddingTop--lg48.u-paddingX--xs16.u-paddingX--sm24.u-paddingX--lg24.u-textCenter");
    //plansAd: By = By.xpath('//a[@class="anchor-wrap-target"]')[0];
    //plansAd: By = By.xpath('//div[@class="svg-wrap u-marginBottom--xs8 u-marginBottom--lg12"]');
    plansAd: By = By.xpath('//div[@class="hero-tile-wrap-first hero-tile-wrap u-paddingRight--xs16 u-paddingLeft--xs16 u-paddingRight--md10 u-paddingLeft--md10 u-marginBottom--xs16 u-marginBottom--md0"]');
    bonusOffers: By = By.xpath('//p[text()="Bonus offers"]');
    //addButton: By = By.xpath('//span[@class="HitArea-VDS__sc-bc3yhn-0 dCkSrl"]')[1];
    playVideoLink: By = By.xpath('//a[@data-testid="watch-video-link"]');
    clickPlay: By = By.css("#video-gallery-player");
    accessoriesButton: By = By.xpath('//button[@id="gnav20-Accessories-L1"]');
    //accessoriesAfterSearch: By = By.xpath('//span[text()="Accessories"]')[0];
    accessoriesAfterSearch: By = By.xpath('//a[@class="styled__SuggestionAnchor-hSOHLo fZSRNM"]')[0];
    workFromHomeButton: By = By.css("#gnav20-Accessories-L2-3");
    //searchButton: By = By.xpath('//button[@id="gnav20-search-icon-mobile"]');
    searchButton: By = By.xpath('//button[@id="gnav20-search-icon"]')
    whatAreYouLookingFor: By = By.xpath('//input[@name="q"]');
    siteMap: By = By.xpath('//a[contains(text(), "Site Map")]');
    siteMapText: By = By.xpath('//h1[@class="tiny-header-h3 margin-top-zero"]');
    buyNowButton: By = By.xpath('//a[text()="Buy now "]');
    colorDropDownArrow: By = By.xpath('//span[@class="TriggerIconWrapper-VDS__sc-19osi3m-1 fCdskV toggleIconWrapper"]')[0];
    //selectRed: By = By.xpath('//input[@id="clr10560020"]');
    //selectRed: By = By.xpath('//span[@class="h-9 w-9 rounded-full flex flex-0 border border-[#6f7171] "]')[3];
    //selectRed: By = By.xpath('//input[@id="clr10560020"]');
    //selectRed: By = By.xpath('//input[@name="color"]')[3];
    //selectRed: By = By.xpath('//label[@class="swatch p-0 border flex flex-shrink-0 fexl-grow-0 w-12 h-12 rounded-full mr-4 justify-center items-center content-center focus-within:outline-dashed focus-within:outline-offset-4 focus-within:outline-1 hover:border-2   selected"]');
    selectRed: By = By.xpath('//label[@class="swatch p-0 border flex flex-shrink-0 fexl-grow-0 w-12 h-12 rounded-full mr-4 justify-center items-center content-center focus-within:outline-dashed focus-within:outline-offset-4 focus-within:outline-1 hover:border-2   false"][4]');
    
    //storesButton: By = By.xpath('(//a[@*])[6]');
    //storesButton: By = By.xpath(".gnav20-sign-in")[0];
    //storesButton: By = By.xpath('//a[contains(@class, "gnav20-sign-in")]');
    //storesButton: By = By.xpath('//button[@class="gnav20-sign-in"]')[0];
    //storesButton: By = By.xpath('(//div[@class="gnav20-store"])[3]')
    storesButton: By = By.xpath('(//div[@*])[21]');
    //storesButton: By = By.xpath('//div[@class="gnav20-dropdown-box"]')[0];
    //inputZip: By = By.xpath('//input[@id="storesData"]');
    //inputZip: By = By.xpath('//div[@class="u-positionRelative"]');
    inputArea: By = By.xpath('(//input[@*])[8]');
    showPlans: By = By.xpath('//div[@class="Col hero-tile-wrap-content u-paddingTop--xs24 u-paddingTop--md48 u-paddingX--xs16 u-paddingX--sm24 u-paddingX--lg48"]');
    choosePhones: By = By.xpath('//a[@class="u-fontDisplay u-colorSecondary  Link u-displayInlineBlock u-fontDisplay u-marginBottom--md0 u-marginBottom--xs16 u-text--16 u-marginLeft--0 u-marginLeft--xl20"]');
    //spanishButton: By = By.xpath('//a[@class="gnav20-lang-link"]')[0];
    //spanishButton: By = By.xpath('(//a[@*])[6]');
    spanishButton: By = By.xpath('(//div[@*])[23]');
    lehiDropdown: By = By.xpath('//li[@class="u-colorPrimary u-marginBottom--0 u-text--12 match"]');
    //supportButton: By = By.xpath('//div[@class="gnav-80-utility-wrapper"]');
    //supportButton: By = By.xpath('(//div[@*])[20]');
    supportButton: By = By.xpath('//button[@id="gnav20-Support-L1"]');
    mobileButton: By = By.xpath('//button[@id="gnav20-Mobile-L1"]');
    getStartedPlansButton: By = By.xpath('//button[@class="build-ctas Button Button--inverse  u-textBreakNoWrap u-marginBottom--32 u-marginBottom--md16 u-marginBottom--xl0 u-marginRight--0 u-paddingX--24 modal-CTA prospect-contents"]');
    newCustomerButton: By = By.xpath('//a[@id="lines-new-customer"]');
    //inputZipForPlans: By = By.xpath('//input[@id="clj8t5ogf000p3b9aixjnn9x6"]');
    //inputZipForPlans: By = By.xpath('//input[@id="clj8tkhce000e3b9hfm3387ko"]');
    inputZipForPlans: By = By.xpath('//input[@name="zipCode"]');
    addLine: By = By.xpath('//a[@class="sc-fXSgeo gmdzyi"]');
    //continueAfterZipCodeEntry: By = By.xpath('//span[@class="HitArea-VDS__sc-bc3yhn-0 VAWhD"]')[1];
    //continueAfterZipCodeEntry: By = By.xpath('//span[@class="StyledChildWrapper-VDS__sc-bc3yhn-1 fkFKdk"]')[1];
    continueAfterZipCodeEntry: By = By.xpath('//div[@class="sc-Nxspf cRTOyC"]');
    buildYourOwnPlan: By = By.xpath('//div[@id="inner-buildyourown"]');
    //continueAfterUnlimitedOption: By = By.xpath('//span[@class="HitArea-VDS__sc-bc3yhn-0 VAWhD"]')[1];
    continueButton: By = By.xpath('//button[@id="continue_button"]');
    continueButtonForOnePhone: By = By.xpath('//span[text()="Shop phones"]');
    perkContinueButton: By = By.xpath('//button[@id="perk_continue"]');
    popUpCloseButton: By = By.xpath('//span[@class="lp_close-icon lp_icon-dark"]')[1];
    //chooseDisneyBundle: By = By.xpath('//span[@class="sc-tagGq gILsHN"]')[0];
    chooseDisneyBundle: By = By.xpath('//div[@id="2641_off"]');
    compareButton: By = By.xpath('//button[@id="compare_button"]');
    closeButtonForComparePlans: By = By.xpath('//button[@id="close-button"]');
    //logitechKeyboard: By = By.xpath('//div[@class="mt-0 mb-auto"]')[10];
    logitechKeyboard: By = By.xpath('//div[@id="productDetails"]')[10];
    //selectColorDropdown: By = By.xpath('//button[@class="StyledAccordionButton-VDS__sc-19osi3m-2 kZpcqO accordionButton"]')[0]
    //selectColorDropdown: By = By.xpath('//span[@class="TriggerIconWrapper-VDS__sc-19osi3m-1 fCdskV toggleIconWrapper"]')[1];
    //selectColorDropdown: By = By.xpath('//p[@class="StyledTypography-VDS__sc-5k55co-0 bWSyYu StyledTitle-VDS__sc-155xzr0-0 kiCJhW"]')[0];
    //selectColorDropdown: By = By.xpath('//div[@class="AccordionWrapper-VDS__sc-1xsaiao-0 bivghh"]')[0];
    //selectColorDropdown: By = By.xpath('//span[@class="TriggerIconWrapper-VDS__sc-19osi3m-1 fCdskV toggleIconWrapper"]')[0];
    //selectColorDropdown: By = By.xpath('//button[@class="StyledAccordionButton-VDS__sc-19osi3m-2 kZpcqO accordionButton"]')[0];
    //selectColorDropdown: By = By.xpath('//span[@class="text-2xl"]')[0];
    selectColorDropdown: By = By.xpath('//span[text()="Color"]');
    homeButtonOnMainMenu: By = By.xpath('//button[@id="gnav20-Home-L1"]');
    gamingButton: By = By.xpath('//a[@id="gnav20-Home-L2-7"]');
    //vrGaming: By = By.xpath('//a[@id="gnav20-Home-L3-29"]');
    //metaQuest256: By = By.xpath('//div[@id="productDetails"]')[3];
    //metaQuest256: By = By.xpath('//p[@id="gridwallProductName"]')[3];
    //metaQuest256: By = By.xpath('//div[@class="px-3 min-[684px]:px-6 max-[683px]:[&_p#gridwallProductName]:mt-7 min-[684px]:[&_p#gridwallProductName]:mt-8 max-[683px]:[&_div#preOrderDetails]:mt-2 min-[684px]:[&_div#preOrderDetails]:mt-3"]')[3];
    //metaQuest256: By = By.xpath('//div[@id="productDetails"]')[3];
    metaQuest256: By = By.xpath('//div[@id="1_tile"]');
    personalButton: By = By.xpath('//a[@id="gnav20-eyebrow-link-Personal"]');
    //accessoriesAtBottomOfPage: By = By.xpath('//a[text()="Accessories"]')[1];
    accessoriesAtBottomOfPage: By = By.xpath('//a[text()="Accessories"]');
    vrGaming: By = By.xpath('//a[text()="VR Gaming"]');
   
    chooseVrGaming: By = By.xpath('//a[text()="VR Gaming"]')
    //shopButton: By = By.xpath('//div[@class="gnav20-hero-footer-heading"]')[0];
    shopButton: By = By.xpath('//button[@id="gnav20-Shop-L1"]');
    getMoreSaveMore: By = By.xpath('//div[@class="section aem-GridColumn aem-GridColumn--default--12"]')[1];
    shopFooter: By = By.xpath('//div[@class="gnav20-herofooter"]')[0];
    //playMetaQuest256Video: By = By.xpath('//a[@class="underline cursor-pointer"]');
    playMetaQuest256Video: By = By.xpath('//a[text()="Play videos"]');
    //playMetaQuest256Video: By = By.xpath('//a[@data-testid="watch-video-link"]');
    //playMetaQuest256Video: By = By.xpath('//div[@class="mt-5 flex justify-center items-end"]');
    //playMetaQuest256Video: By = By.xpath('//video[@id="video-gallery-player"]');
    //playMetaQuest256Video: By = By.xpath('//a[@class="underline cursor-pointer"]');
    increaseQuantityMetaQuest256: By = By.xpath('//div[@class=" w-5 h-5 mt-[-3px]"]');
    clickMetaQuest256Video: By = By.xpath('//div[@class="video-gallery-modal relative"]');
    supportOverview: By = By.xpath('//a[@id="gnav20-Support-L2-1"]');
    deviceSupport: By = By.xpath('//a[@class="top_list sc-jKJlTe XcbzN"]');
    searchForDeviceInput: By = By.xpath('//input[@class="device-search"]');
    selectIphone13ProMax: By = By.xpath('//li[text()=" Apple iPhone 13 Pro Max "]');
    //troubleshoot: By = By.xpath('//a[text()="Troubleshoot"]')[25];
    //troubleshoot: By = By.xpath('//a[@id="tsa-landing-link-anchor"]')[25];
    troubleshoot: By = By.xpath('//div[@id="tsa-landing-link-container"]')[25];
    servicesAndApps: By = By.xpath('//a[text()="Service & apps"]');
    howToTransferYourContent: By = By.xpath('//a[text()="How to transfer your content"]');
    brandsGridItem: By = By.xpath('//div[@class="brands-grid-item"]');
    storeDistance: By = By.xpath('//div[@id="slSearch-Distance0Id"]');
    storeAddressResults: By = By.xpath('//a[@id="slSearch-CityLink0Id"]');
    //comprar: By = By.xpath('//button[text()="Comprar"]')[0];
    comprar: By = By.xpath('//button[@id="gnav20-Shop-L1"]');
    shopDevices: By = By.xpath('//a[@id="gnav20-Shop-L2-3"]');
    shopWatches: By = By.xpath('//a[@id="gnav20-Shop-L3-9"]');
    connectedSmartWatchesMessage: By = By.xpath('//span[text()="Connected Smart Watches"]');
    appleIphone14ProMaxMessage: By = By.xpath('//span[text()="Apple iPhone 14 Pro Max"]');
    letsTroubleshootYourDeviceMsg: By = By.xpath('//div[@class="cmp-title"]');
    buildYourOrderText: By = By.xpath('//h1[text()="Build your order."]');
    coverageMapText: By = By.xpath('//h1[@class="u-text--xs36 u-textLineHeightTight u-text--lg48 u-marginBottom--xs32 u-marginBottom--md64"]');
    appleIphone14PlusText: By = By.xpath('//span[text()="Apple iPhone 14 Plus"]');
    continueBtnForBuyNow: By = By.xpath('//span[@class="HitArea-VDS__sc-bc3yhn-0 dCkSrl"][2]');
    mapaDelSitio: By = By.xpath('//a[text()=" Mapa del sitio "]');
    mapaDelSitioText: By = By.xpath('//h1[text()="Mapa del sitio."]');
    //pickAPlan: By = By.xpath('//span[@class="HitArea-VDS__sc-bc3yhn-0 VAWhD"][1]');
    //pickAPlan: By = By.xpath('//button[@id="handle-pickaplan-button"][0]');
    pickAPlanForLine2: By = By.xpath('//button[@id="handle-pickaplan-button"]');


    //buildOrderShopPhones: By = By.xpath('//button[@id="handle-shopphones-button"][1]');
    //buildOrderShopPhones: By = By.xpath('//button[@id="handle-shopphones-button"][2]');
    //buildOrderShopPhones: By = By.xpath('//button[@id="handle-shopphones-button"][0]');
    //buildOrderShopPhones: By = By.xpath('//span[@class="HitArea-VDS__sc-bc3yhn-0 VAWhD"]')[1];
    //buildOrderShopPhones: By = By.xpath('//span[@class="StyledChildWrapper-VDS__sc-bc3yhn-1 fkFKdk"][1]');
    //buildOrderShopPhones: By = By.xpath('//span[@class="StyledChildWrapper-VDS__sc-bc3yhn-1 fkFKdk"][0]');
    buildOrderShopPhones: By = By.xpath('//span[@class="StyledChildWrapper-VDS__sc-bc3yhn-1 fkFKdk"][2]');
    //buildOrderShopPHones: By = By.xpath('//span[text()="Shop phones"]');


    googlePixelFold: By = By.xpath('//div[@id="productDetails"][1]');
    //preOrdergooglePixelFold: By = By.xpath('//button[@class="StyledButton-VDS__sc-bc3yhn-2 glVjuF w-full"]');
    preOrdergooglePixelFold: By = By.xpath('//div[@class="ContinueComponent__Wrapper-sc-26ypzp-0 qZMDL grid grid-cols-1 sm:grid-cols-2  gap-4"]');
    //preOrdergooglePixelFold: By = By.xpath('//span[text()="Pre-order"]');
    skipOffer: By = By.xpath('//button[@class="StyledButton-VDS__sc-bc3yhn-2 dlAMgf"]');
    continueBtnNextPhone: By = By.xpath('//button[@class="StyledButton-VDS__sc-bc3yhn-2 biMyqs sc-iHGNWf jsCVLy"]');
    shopSecondPhone: By = By.xpath('//button[@id="handle-shopphones-button"]');
    pickSecondPlan: By = By.xpath('//button[@id="handle-pickaplan-button"]');
    selectAppleiPhoneProMax: By = By.xpath('//div[@class="h-[522px] w-full min-[684px]:h-[542px] relative"][2]');
    continueWith2ndPhone: By = By.xpath('//button[@class="StyledButton-VDS__sc-bc3yhn-2 glVjuF w-full"]');
    continueWithOrderBtn: By = By.xpath('//button[@class="StyledButton-VDS__sc-bc3yhn-2 biMyqs sc-iHGNWf jsCVLy"]');
    continueWithOrderBtn2: By = By.xpath('//button[@class="StyledButton-VDS__sc-bc3yhn-2 fgVoVD"]');
    //pickIphone14Pro: By = By.xpath('//div[@id="MQ0E3LL/A-null"]');
    pickIphone14Pro: By = By.xpath('//div[@id="Apple iPhone 14 Pro Max-client"]');

    // xpath + 1 for array
    //continue: By = By.xpath('//div[@id="cta-btn"]');
    //continue: By = By.xpath('//div[@class="ContinueComponent__Wrapper-sc-26ypzp-0 qZMDL grid grid-cols-1 sm:grid-cols-2  gap-4"]');
    //continue: By = By.xpath('//span[@class="HitArea-VDS__sc-bc3yhn-0 dCkSrl"][3]');
    //continue: By = By.xpath('//span[@class="HitArea-VDS__sc-bc3yhn-0 dCkSrl"][4]');
    //continue: By = By.xpath('//span[@class="HitArea-VDS__sc-bc3yhn-0 dCkSrl"][2]');
    //continue: By = By.xpath('//span[@class="StyledChildWrapper-VDS__sc-bc3yhn-1 kdOlMG"][1]');
    //continue: By = By.xpath('//span[@class="StyledChildWrapper-VDS__sc-bc3yhn-1 kdOlMG"][0]');
    //continue: By = By.xpath('//span[text()="Continue"]');
    //continue: By = By.xpath('//button[@class="StyledButton-VDS__sc-bc3yhn-2 glVjuF w-full"]');
    //continue: By = By.xpath('//button[@*][53]');
    //continue: By = By.xpath('//button[@*]')[52];
    continue: By = By.xpath('(//span[@*])[79]');
    //shopPhones: By = By.xpath('//button[@class="StyledButton-VDS__sc-bc3yhn-2 fgVoVD"]');
    //shopPhones: By = By.xpath('//span[@class="HitArea-VDS__sc-bc3yhn-0 VAWhD"][1]');
    //shopPhones: By = By.xpath('//span[@class="HitArea-VDS__sc-bc3yhn-0 VAWhD"][0]');
    //shopPhones: By = By.xpath('//span[@class="HitArea-VDS__sc-bc3yhn-0 VAWhD"][2]');
    //shopPhones: By = By.xpath('//span[text()="Shop phones"]');
    //shopPhones: By = By.xpath('//div[@class="sc-djTQaJ gqgBlJ"][2]');
    //shopPhones: By = By.xpath('//span[@class="StyledChildWrapper-VDS__sc-bc3yhn-1 fkFKdk"][2]');
    shopPhones: By = By.xpath('//span[@class="StyledChildWrapper-VDS__sc-bc3yhn-1 fkFKdk"][1]');
    iPhone14ProMaxText: By = By.xpath('//a[text()="Play videos"]'); 
    metaQuestText: By = By.xpath('//a[text()="Play videos"]');
    buildYourOrderText2: By = By.xpath('//h1[text()="Build your order."]');


    constructor () {
    super ({url:"https://www.verizon.com"})
    }
}