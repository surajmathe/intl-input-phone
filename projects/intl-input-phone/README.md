# International Phone Number (intl-input-phone)

Open Source Angular plugin for entering and validating international mobile numbers. It adds a flag dropdown with country name, country phone code to any input provide validation and many customization.

# Demo Link -

You can see [Demo Here.](https://intl-input-phone-demo.stackblitz.io/)

[Demo Link 2](https://stackblitz.com/edit/intl-input-phone-demo)

# How to use -

- Step 1 - Add dependancy in to your project
  This plugin has following dependancy -

  - [Jquery](https://jquery.com/)
  - [Select 2](https://select2.org/)
  - [Input Masking](https://robinherbots.github.io/Inputmask/)

  Please include the following cdn scripts in your project in order to use this plugin or you can download that script file manually and include it in head section of index.html file -

  ```HTML
  <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.3.4/jquery.inputmask.bundle.min.js"></script>
  ```

- Step 2 - Install the plugin.
  ```Node
    npm install intl-input-phone --save
  ```
  Import the module IntlInputPhoneModule in module file in import section.
  ```Typescript

   @NgModule({
     imports:      [ BrowserModule, FormsModule, IntlInputPhoneModule,..],
     declarations: [ AppComponent, ...  ],
     bootstrap:    [ AppComponent ]
   })
   export class AppModule {
     ....
   }
  ```
- Step 3 - Use the plugin by using selector - intl-input-phone
  ```HTML
      <intl-input-phone></intl-input-phone>
  ```

For more detail please check the [Stackblitz Example](https://stackblitz.com/edit/intl-input-phone-demo)

# Features -

- Customization in dropdown option. You can customize the dropdown option in following ways [See Demo Here](https://intl-input-phone-demo.stackblitz.io/#multiple-options) -

  - Country flag with country phone code.
  - Country flag with country name.
  - Country flag with country phone code and country name.

- Customization in tooltip text. You can customize the tooltip of option and selected value in following ways [See Demo Here](https://intl-input-phone-demo.stackblitz.io/#CustomizationTooltip)-

  - Country ISO code.
  - Country name.
  - Country phone code.

- Show the tooltip or not.

- Customization in ordering of the dropdown. Their are following order in which you can sort the dropdown [See Demo Here](https://intl-input-phone-demo.stackblitz.io/#customizedOrdering)-

  - Country ISO code.
  - Country name.
  - Country phone code.

- Provide the search option in the dropdown. Search is application on country name, country iso code and country phone code. Also provide flag to show search or not. [See Demo Here](https://intl-input-phone-demo.stackblitz.io/#CustomizationSearching)

- Provide the input masking according to the country phone format.

- Provide the output event which call when the input is filled completed according to input masking. [See Demo Here](https://intl-input-phone-demo.stackblitz.io/#SampleInputValidation)

- Provide the customization in output format in form of number with country phone code and number only.

- Provide the input property to set the value from model.

- Provide the input property to customize the country list in the dropdown. Their are following cases when you customize dropdown [See Demo Here](https://intl-input-phone-demo.stackblitz.io/#CustomizationCountryList)-
  - You can customize the country name.
  - You can customize the country flag.
  - You can customize the country input masking.
  - You can specify only few country listing in dropdown instead of all country list.
  - You can add new country if not avaliable in my country.
  
- Provide the Reactive form support. [See Demo Here](https://intl-input-phone-demo.stackblitz.io/#CustomizationReactiveForm)-
  - You can enable/disable control using reactive form.
  - You can set/get value using reactive form.
  - Note - When use control with reactive form, you should set control OutputFormat as OutputOptionsEnum.Number.

# Documentation -

- Input properties which can be used -

  - CountryList
  - ConfigurationOption
  - NumberTextValue
  - SelectedCountryISOCode

- Output Events which can be used -
  - OnIsRequiredChange
  - OnNumberChange

# Configuration Options -

Property and its usage available in ConfigurationOptions class.

- SelectorClass : string - Property to set the selector for the dropdown. **Default : 'IntlPhoneNumber'**
- OptionTextTypes : **ContentOptionsEnum[]** - Property to set which content show in option. **Default : Flag, CountryPhoneCode**
- ToolTipText : **TooltipOptionsEnum** - Property to set the tooltip text. **Default : Country Name**
- IsShowToolTip : boolean - Property to set whether tooltip is show or not. **Default : true**
- IsShowSearchOption : boolean - Property to set whether user want search option or not. **Default : true**
- SortBy : **SortOrderEnum** - Property to set the sort order of country list to be rendered. **Default : CountryISOCode**
- IsShowAllOtherCountry : boolean - Property to set whether show all other country in dropdown as well or not, when specify custom country list in module. **Default : true**
- OutputFormat : **OutputOptionsEnum** - Property to set in which format user want the output when fill the input correctly. **Default : NumberWithCountryCode**

# ContentOptionsEnum -

Enums can be use to set the content which show in option. Enum members are -

- _Flag_
- _CountryName_
- _CountryPhoneCode_

# TooltipOptionsEnum -

Enum can be use to set the content of the tooltip. Enum members are -

- _CountryName_
- _CountryPhoneCode_
- _CountryISOCode_

# SortOrderEnum -

Enum to specify the sort order of dropdown list. Enum members are -

- _CountryName_
- _CountryISOCode_
- _CountryPhoneCode_

# OutputOptionsEnum -

Enum for specify output type of result. Enum members are -

- _NumberWithCountryCode_
- _Number_

# Code Sample -

- **Show the selected country list.**

  In component html file.

  ```HTML
  <intl-input-phone [ConfigurationOption]="configOption1" [CountryList]="customCountryList1" ></intl-input-phone>
  ```

  In component typescript file.

  ```typescript
  ...
  ...
  export class CustomizedCountryListComponent implements OnInit {
  configOption1 : ConfigurationOptions;
  customCountryList1 : CustomCountryModel[] = [];
  constructor() {

    //show the selected country
    this.configOption1 = new ConfigurationOptions();
    this.configOption1.SelectorClass = "CountryListType1";
    this.configOption1.IsShowAllOtherCountry = false;
    this.customCountryList1.push({ISOCode : "IN"});
    this.customCountryList1.push({ISOCode : "US"});
    this.customCountryList1.push({ISOCode : "SK"});
      ...
      ...
   }
   ....
   ....
  }
  ```

- **Change in order of dropdown list.**

  In component html file.

  ```HTML
  <intl-input-phone [ConfigurationOption]="configOption2"></intl-input-phone>
  ```

  In component typescript file.

  ```typescript
  ...
  ...
  export class CustomizedOrderingComponent implements OnInit {
  configOption2 : ConfigurationOptions;
  constructor() {

  this.configOption2 = new ConfigurationOptions();
  this.configOption2.SelectorClass = "OrderByType2";
  //set the sortby value using the sortorderenum.
  this.configOption2.SortBy = SortOrderEnum.CountryName;
      ...
      ...
   }
   ....
   ....
  }
  ```

- **Change the tooltip text.**

  In component html file.

  ```HTML
  <intl-input-phone [ConfigurationOption]="configOption2"></intl-input-phone>
  ```

  In component typescript file.

  ```typescript
  ...
  ...
  export class CustomizedTooltipComponent implements OnInit {
  configOption2 : ConfigurationOptions;
  constructor() {
  this.configOption2 = new ConfigurationOptions();
  this.configOption2.SelectorClass = "ToolTipType2";
  //set the tooltip text value from the tooltipoptionsenum.
  this.configOption2.ToolTipText = TooltipOptionsEnum.CountryISOCode;
      ...
      ...
   }
   ....
   ....
  }
  ```

- **Integrate the validation and set the value.**

  In component html file.

  ```HTML
  <intl-input-phone [ConfigurationOption]="configOption1" (OnIsRequiredChange)="requiredFlagChange($event)" (OnNumberChange)="onNumberChage($event)" [NumberTextValue]="NumberModel" [SelectedCountryISOCode]="SelectedCountryISOCode"></intl-input-phone>
  ```

  In component typescript file.

  ```typescript
    ...
    ...
    export class IntegrateValidationComponent implements OnInit {
      configOption1: ConfigurationOptions;
      NumberModel: string = "+1 3235634245";
      SelectedCountryISOCode: string = "US";
      IsRequired: boolean = false;
      OutputValue : NumberResult = new NumberResult();
      constructor() {
      this.configOption1 = new ConfigurationOptions();
      this.configOption1.SelectorClass = "InputValidation1";
      this.configOption2.ToolTipText = TooltipOptionsEnum.CountryISOCode;
          ...
          ...
       }
       ...
       ...

        requiredFlagChange(isRequire: boolean) {
          this.IsRequired = isRequire;
        }
        onNumberChage(outputResult) {
          this.OutputValue = outputResult;
          console.log("Output result is", this.OutputValue);
        }

       ....
       ....
    }
  ```
- **Integrate with reactive form.**

  In component html file.

  ```HTML
    <form [formGroup]="sampleForm">
     <intl-input-phone [ConfigurationOption]="configOption1" formControlName="sampleReactiveControl" ></intl-input-phone>
    </form>
  ```

  In component typescript file.

  ```typescript
    ...
    ...
    export class ReactiveFormSampleComponent implements OnInit {
      configOption1: ConfigurationOptions;
      sampleForm : FormGroup
      constructor( private formBuilder : FormBuilder) {
      this.sampleForm = this.formBuilder.group({
      "sampleReactiveControl" : new FormControl()
      });
      this.configOption1 = new ConfigurationOptions();
      //If you are use control using reactive form then you should use use this output form only.
      this.configOption1.OutputFormat = OutputOptionsEnum.Number;
          ...
          ...
       }
       ...
        

       ....
       ....
    }
  ```

# Country list with detail -

Below are the list of country data used in this library. Which is appear in the dropdown. You can customize any country data by using Country ISO code.

| Country ISO Code |           Country Name           | Country Phone Code |     Masking      |
| :--------------: | :------------------------------: | :----------------: | :--------------: |
|        AD        |             Andorra              |        +376        |     999 999      |
|        AE        |       United Arab Emirates       |        +971        |   999 999 9999   |
|        AF        |           Afghanistan            |        +93         |   999 999 9999   |
|        AG        |       Antigua and Barbuda        |      +1 (268)      |     999-9999     |
|        AI        |             Anguilla             |      +1 (264)      |     999-9999     |
|        AL        |             Albania              |        +355        |   999 999 9999   |
|        AM        |             Armenia              |        +374        |    999 999999    |
|        AN        |       Netherlands Antilles       |        +599        |     999 9999     |
|        AO        |              Angola              |        +244        |   999 999 999    |
|        AQ        |            Antarctica            |        +672        |     9 99999      |
|        AR        |            Argentina             |        +54         | 999 99-9999-9999 |
|        AS        |          American Samoa          |      +1 (684)      |     999-9999     |
|        AT        |             Austria              |        +43         |   9999 999999    |
|        AU        |            Australia             |        +61         |   9999 999 999   |
|        AW        |              Aruba               |        +297        |     999 9999     |
|        AZ        |            Azerbaijan            |        +994        |  999 999 99 99   |
|        BA        |      Bosnia and Herzegovina      |        +387        |   999 999 999    |
|        BB        |             Barbados             |      +1 (246)      |     999-9999     |
|        BD        |            Bangladesh            |        +880        |   99999-999999   |
|        BE        |             Belgium              |        +32         |  9999 99 99 99   |
|        BF        |           Burkina Faso           |        +226        |   99 99 99 99    |
|        BG        |             Bulgaria             |        +359        |   999 999 999    |
|        BH        |             Bahrain              |        +973        |    9999 9999     |
|        BI        |             Burundi              |        +257        |   99 99 99 99    |
|        BJ        |              Benin               |        +229        |   99 99 99 99    |
|        BL        |         Saint Barthelemy         |        +590        |  9999 99 99 99   |
|        BM        |             Bermuda              |      +1 (441)      |     999-9999     |
|        BN        |              Brunei              |        +673        |     999 9999     |
|        BO        |             Bolivia              |        +591        |     99999999     |
|        BR        |              Brazil              |        +55         | (99) 99999-9999  |
|        BS        |             Bahamas              |      +1 (242)      |     999-9999     |
|        BT        |              Bhutan              |        +975        |   99 99 99 99    |
|        BW        |             Botswana             |        +267        |    99 999 999    |
|        BY        |             Belarus              |        +375        | 9 999 999-99-99  |
|        BZ        |              Belize              |        +501        |     999-9999     |
|        CA        |              Canada              |         +1         |  (999) 999-9999  |
|        CC        |          Cocos Islands           |        +61         |   9999 999 999   |
|        CD        | Democratic Republic of the Congo |        +243        |   9999 999 999   |
|        CF        |     Central African Republic     |        +236        |   99 99 99 99    |
|        CG        |      Republic of the Congo       |        +242        |   99 999 9999    |
|        CH        |           Switzerland            |        +41         |  999 999 99 99   |
|        CI        |           Ivory Coast            |        +225        |   99 99 99 99    |
|        CK        |           Cook Islands           |        +682        |     99 9999      |
|        CL        |              Chile               |        +56         |   9 9999 9999    |
|        CM        |             Cameroon             |        +237        |  9 99 99 99 99   |
|        CN        |              China               |        +86         |  999 9999 9999   |
|        CO        |             Colombia             |        +57         |   999 9999999    |
|        CR        |            Costa Rica            |        +506        |    9999 9999     |
|        CU        |               Cuba               |        +53         |    99 9999999    |
|        CV        |            Cape Verde            |        +238        |    999 99 99     |
|        CW        |             Curacao              |        +599        |     999 9999     |
|        CX        |         Christmas Island         |        +61         |   9999 999 999   |
|        CY        |              Cyprus              |        +357        |    99 999999     |
|        CZ        |          Czech Republic          |        +420        |   999 999 999    |
|        DE        |             Germany              |        +49         |  99999 9999999   |
|        DJ        |             Djibouti             |        +253        |   99 99 99 99    |
|        DK        |             Denmark              |        +45         |   99 99 99 99    |
|        DM        |             Dominica             |      +1 (767)      |     999-9999     |
|        DO        |        Dominican Republic        |      +1 (809)      |     999-9999     |
|        DZ        |             Algeria              |        +213        |  9999 99 99 99   |
|        EC        |             Ecuador              |        +593        |   999 999 9999   |
|        EE        |             Estonia              |        +372        |    9999 9999     |
|        EG        |              Egypt               |        +20         |  9999 999 9999   |
|        EH        |          Western Sahara          |        +212        |   9999-999999    |
|        ER        |             Eritrea              |        +291        |    99 999 999    |
|        ES        |              Spain               |        +34         |   999 99 99 99   |
|        ET        |             Ethiopia             |        +251        |   999 999 9999   |
|        FI        |             Finland              |        +358        |   999 9999999    |
|        FJ        |               Fiji               |        +679        |     999 9999     |
|        FK        |         Falkland Islands         |        +500        |      99999       |
|        FM        |            Micronesia            |        +691        |     999 9999     |
|        FO        |          Faroe Islands           |        +298        |      999999      |
|        FR        |              France              |        +33         |  99 99 99 99 99  |
|        GA        |              Gabon               |        +241        |   99 99 99 99    |
|        GB        |          United Kingdom          |        +44         |   99999 99999    |
|        GD        |             Grenada              |      +1 (473)      |     999-9999     |
|        GE        |             Georgia              |        +995        |   999 99 99 99   |
|        GG        |             Guernsey             |        +44         |   99999 999999   |
|        GH        |              Ghana               |        +233        |   999 999 9999   |
|        GI        |            Gibraltar             |        +350        |     99999999     |
|        GL        |            Greenland             |        +299        |     99 99 99     |
|        GM        |              Gambia              |        +220        |     999 9999     |
|        GN        |              Guinea              |        +224        |   999 99 99 99   |
|        GQ        |        Equatorial Guinea         |        +240        |   999 999 999    |
|        GR        |              Greece              |        +30         |   999 999 9999   |
|        GT        |            Guatemala             |        +502        |    9999 9999     |
|        GU        |               Guam               |      +1 (671)      |     999-9999     |
|        GW        |          Guinea-Bissau           |        +245        |   999 999 999    |
|        GY        |              Guyana              |        +592        |     999 9999     |
|        HK        |            Hong Kong             |        +852        |    9999 9999     |
|        HN        |             Honduras             |        +504        |    9999-9999     |
|        HR        |             Croatia              |        +385        |   999 999 9999   |
|        HT        |              Haiti               |        +509        |    99 99 9999    |
|        HU        |             Hungary              |        +36         |  (99) 999 9999   |
|        ID        |            Indonesia             |        +62         |   9999-999-999   |
|        IE        |             Ireland              |        +353        |   999 999 9999   |
|        IL        |              Israel              |        +972        |   999-999-9999   |
|        IM        |             Isle of              |        +44         |   99999 999999   |
|        IN        |              India               |        +91         |   99999 99999    |
|        IO        |       British Indian Ocean       |        +246        |     999 9999     |
|        IQ        |               Iraq               |        +964        |  9999 999 9999   |
|        IR        |               Iran               |        +98         |  9999 999 9999   |
|        IS        |             Iceland              |        +354        |     999 9999     |
|        IT        |              Italy               |        +39         |   999 999 9999   |
|        JE        |              Jersey              |        +44         |   99999 999999   |
|        JM        |             Jamaica              |      +1 (876)      |     999-9999     |
|        JO        |              Jordan              |        +962        |   99 9999 9999   |
|        JP        |              Japan               |        +81         |  999 9999-9999   |
|        KE        |              Kenya               |        +254        |   9999 999999    |
|        KG        |            Kyrgyzstan            |        +996        |   9999 999 999   |
|        KH        |             Cambodia             |        +855        |   999 999 999    |
|        KI        |             Kiribati             |        +686        |     99999999     |
|        KM        |             Comoros              |        +269        |    999 99 99     |
|        KN        |           Saint Kitts            |      +1 (869)      |     999-9999     |
|        KP        |           North Korea            |        +850        |  9999 999 9999   |
|        KR        |           South Korea            |        +82         |  999-9999-9999   |
|        KW        |              Kuwait              |        +965        |    999 99999     |
|        KY        |          Cayman Islands          |      +1 (345)      |     999-9999     |
|        KZ        |            Kazakhstan            |         +7         | 9 (999) 999 9999 |
|        LA        |               Laos               |        +856        |  999 99 999 999  |
|        LB        |             Lebanon              |        +961        |    99 999 999    |
|        LC        |           Saint Lucia            |      +1 (758)      |     999-9999     |
|        LI        |          Liechtenstein           |        +423        |   999 999 999    |
|        LK        |            Sri Lanka             |        +94         |   999 999 9999   |
|        LR        |             Liberia              |        +231        |   999 999 9999   |
|        LS        |             Lesotho              |        +266        |    9999 9999     |
|        LT        |            Lithuania             |        +370        |  (9-999) 99999   |
|        LU        |            Luxembourg            |        +352        |   999 999 999    |
|        LV        |              Latvia              |        +371        |    99 999 999    |
|        LY        |              Libya               |        +218        |   999-9999999    |
|        MA        |             Morocco              |        +212        |   9999-999999    |
|        MC        |              Monaco              |        +377        |  99 99 99 99 99  |
|        MD        |             Moldova              |        +373        |   9999 99 999    |
|        ME        |            Montenegro            |        +382        |   999 999 999    |
|        MF        |           Saint Martin           |        +590        |  9999 99 99 99   |
|        MG        |            Madagascar            |        +261        |  999 99 999 99   |
|        MH        |         Marshall Islands         |        +692        |     999-9999     |
|        MK        |            Macedonia             |        +389        |   999 999 999    |
|        ML        |               Mali               |        +223        |   99 99 99 99    |
|        MM        |             Myanmar              |        +95         |   99 999 9999    |
|        MN        |             Mongolia             |        +976        |    9999 9999     |
|        MO        |              Macau               |        +853        |    9999 9999     |
|        MP        |     Northern Mariana Islands     |      +1 (670)      |     999-9999     |
|        MR        |            Mauritania            |        +222        |   99 99 99 99    |
|        MS        |            Montserrat            |      +1 (664)      |     999-9999     |
|        MT        |              Malta               |        +356        |    9999 9999     |
|        MU        |            Mauritius             |        +230        |    9999 9999     |
|        MV        |             Maldives             |        +960        |     999-9999     |
|        MW        |              Malawi              |        +265        |  9999 99 99 99   |
|        MX        |              Mexico              |        +52         | 999 999 999 9999 |
|        MY        |             Malaysia             |        +60         |   999-999 9999   |
|        MZ        |            Mozambique            |        +258        |   99 999 9999    |
|        NA        |             Namibia              |        +264        |   999 999 9999   |
|        NC        |          New Caledonia           |        +687        |     99 99 99     |
|        NE        |              Niger               |        +227        |   99 99 99 99    |
|        NG        |             Nigeria              |        +234        |  9999 999 9999   |
|        NI        |            Nicaragua             |        +505        |    9999 9999     |
|        NL        |           Netherlands            |        +31         |   99 99999999    |
|        NO        |              Norway              |        +47         |    999 99 999    |
|        NP        |              Nepal               |        +977        |   999-9999999    |
|        NR        |              Nauru               |        +674        |     999 9999     |
|        NU        |               Niue               |        +683        |     999 9999     |
|        NZ        |           New Zealand            |        +64         |   999 999 9999   |
|        OM        |               Oman               |        +968        |    9999 9999     |
|        PA        |              Panama              |        +507        |    9999-9999     |
|        PE        |               Peru               |        +51         |   999 999 999    |
|        PF        |         French Polynesia         |        +689        |   99 99 99 99    |
|        PG        |            Papua New             |        +675        |    9999 9999     |
|        PH        |           Philippines            |        +63         |  9999 999 9999   |
|        PK        |             Pakistan             |        +92         |   9999 9999999   |
|        PL        |              Poland              |        +48         |   999 999 999    |
|        PM        |           Saint Pierre           |        +508        |    999 99 99     |
|        PN        |             Pitcairn             |        +64         |    99 999999     |
|        PR        |           Puerto Rico            |      +1 (787)      |     999-9999     |
|        PS        |            Palestine             |        +970        |   9999 999 999   |
|        PT        |             Portugal             |        +351        |   999 999 999    |
|        PW        |              Palau               |        +680        |     999 9999     |
|        PY        |             Paraguay             |        +595        |   9999 999999    |
|        QA        |              Qatar               |        +974        |    9999 9999     |
|        RE        |             Reunion              |        +262        |  9999 99 99 99   |
|        RO        |             Romania              |        +40         |   9999 999 999   |
|        RS        |              Serbia              |        +381        |   999 9999999    |
|        RU        |              Russia              |         +7         |  9 (999) 999-99  |
|        RW        |              Rwanda              |        +250        |   9999 999 999   |
|        SA        |           Saudi Arabia           |        +966        |   999 999 9999   |
|        SB        |         Solomon Islands          |        +677        |     99 99999     |
|        SC        |            Seychelles            |        +248        |    9 999 999     |
|        SD        |              Sudan               |        +249        |   999 999 9999   |
|        SE        |              Sweden              |        +46         |  999-999 99 99   |
|        SG        |            Singapore             |        +65         |    9999 9999     |
|        SH        |           Saint Helena           |        +290        |      99999       |
|        SI        |             Slovenia             |        +386        |   999 999 999    |
|        SJ        |      Svalbard and Jan Mayen      |        +47         |    999 99 999    |
|        SK        |             Slovakia             |        +421        |   9999 999 999   |
|        SL        |           Sierra Leone           |        +232        |   (999) 999999   |
|        SM        |            San Marino            |        +378        |   99 99 99 99    |
|        SN        |             Senegal              |        +221        |   99 999 99 99   |
|        SO        |             Somalia              |        +252        |    9 9999999     |
|        SR        |             Suriname             |        +597        |     999-9999     |
|        SS        |           South Sudan            |        +211        |   9999 999 999   |
|        ST        |             Sao Tome             |        +239        |     999 9999     |
|        SV        |           El Salvador            |        +503        |    9999 9999     |
|        SX        |           Sint Maarten           |      +1 (721)      |     999-9999     |
|        SY        |              Syria               |        +963        |   9999 999 999   |
|        SZ        |            Swaziland             |        +268        |    9999 9999     |
|        TC        |     Turks and Caicos Islands     |      +1 (649)      |     999-9999     |
|        TD        |               Chad               |        +235        |   99 99 99 99    |
|        TG        |               Togo               |        +228        |   99 99 99 99    |
|        TH        |             Thailand             |        +66         |   999 999 9999   |
|        TJ        |            Tajikistan            |        +992        |   999 99 9999    |
|        TK        |             Tokelau              |        +690        |       9999       |
|        TL        |            East Timor            |        +670        |    9999 9999     |
|        TM        |           Turkmenistan           |        +993        |   9 99 999999    |
|        TN        |             Tunisia              |        +216        |    99 999 999    |
|        TO        |              Tonga               |        +676        |     999 9999     |
|        TR        |              Turkey              |        +90         |  9999 999 99 99  |
|        TT        |       Trinidad and Tobago        |      +1 (868)      |     999-9999     |
|        TV        |              Tuvalu              |        +688        |      999999      |
|        TW        |              Taiwan              |        +886        |   9999 999 999   |
|        TZ        |             Tanzania             |        +255        |   9999 999 999   |
|        UA        |             Ukraine              |        +380        |   999 999 9999   |
|        UG        |              Uganda              |        +256        |   9999 999999    |
|        US        |          United States           |         +1         |  (999) 999-9999  |
|        UY        |             Uruguay              |        +598        |   999 999 999    |
|        UZ        |            Uzbekistan            |        +998        |  9 99 999 99 99  |
|        VA        |             Vatican              |        +39         |   999 999 9999   |
|        VC        | Saint Vincent and the Grenadines |      +1 (784)      |     999-9999     |
|        VE        |            Venezuela             |        +58         |   9999-9999999   |
|        VG        |      British Virgin Islands      |      +1 (284)      |     999-9999     |
|        VI        |               U.S                |      +1 (340)      |     999-9999     |
|        VN        |             Vietnam              |        +84         |  999 999 99 99   |
|        VU        |             Vanuatu              |        +678        |     999 9999     |
|        WF        |        Wallis and Futuna         |        +681        |     99 99 99     |
|        WS        |              Samoa               |        +685        |     99 99999     |
|        XK        |              Kosovo              |        +383        |   999 999 999    |
|        YE        |              Yemen               |        +967        |   9999 999 999   |
|        YT        |             Mayotte              |        +262        |  9999 99 99 99   |
|        ZA        |           South Africa           |        +27         |   999 999 9999   |
|        ZM        |              Zambia              |        +260        |   999 9999999    |
|        ZW        |             Zimbabwe             |        +263        |   999 999 9999   |

# Contribute -

Thanks for using the plugin!! Feel free to report any issue or change request required.
