# International Phone Number (intl-input-phone)

Open Source Angular plugin for entering and validating international mobile numbers. It adds a flag dropdown with country name, country phone code to any input provide validation and many customization.

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
* Customization in dropdown option. You can customize the dropdown option in following ways [See Demo Here](https://intl-input-phone-demo.stackblitz.io/#multiple-options) -
   * Country flag with country phone code.
   * Country flag with country name.
   * Country flag with country phone code and country name.

* Customization in tooltip text. You can customize the tooltip of option and selected value in following ways [See Demo Here](https://intl-input-phone-demo.stackblitz.io/#CustomizationTooltip)-
   * Country ISO code.
   * Country name.
   * Country phone code.

* Show the tooltip or not.

* Customization in ordering of the dropdown. Their are following order in which you can sort the dropdown [See Demo Here](https://intl-input-phone-demo.stackblitz.io/#customizedOrdering)-
   * Country ISO code.
   * Country name.
   * Country phone code.

* Provide the search option in the dropdown. Search is application on country name, country iso code and country phone code. Also provide flag to show search or not. [See Demo Here](https://intl-input-phone-demo.stackblitz.io/#CustomizationSearching)

* Provide the input masking according to the country phone format.

* Provide the output event which call when the input is filled completed according to input masking. [See Demo Here](https://intl-input-phone-demo.stackblitz.io/#SampleInputValidation)

* Provide the customization in output format in form of number with country phone code and number only.

* Provide the input property to set the value from model.

* Provide the input property to customize the country list in the dropdown. Their are following cases when you customize dropdown [See Demo Here](https://intl-input-phone-demo.stackblitz.io/#CustomizationCountryList)-
    * You can customize the country name.
    * You can customize the country flag.
    * You can customize the country input masking.
    * You can specify only few country listing in dropdown instead of all country list.
    * You can add new country if not avaliable in my country.

# Documentation -
* Input properties which can be used -
  * CountryList
  * ConfigurationOption
  * NumberTextValue
  * SelectedCountryISOCode
  
* Output Events which can be used -
  * OnIsRequiredChange
  * OnNumberChange
 
 
# Configuration Options -
Property and its usage available in ConfigurationOptions class.
  * SelectorClass : string - Property to set the selector for the dropdown.  **Default : 'IntlPhoneNumber'** 
  * OptionTextTypes : **ContentOptionsEnum[]** - Property to set which content show in option. **Default : Flag, CountryPhoneCode**
  * ToolTipText : **TooltipOptionsEnum** - Property to set the tooltip text. **Default : Country Name**
  * IsShowToolTip : boolean - Property to set whether tooltip is show or not. **Default : true**
  * IsShowSearchOption : boolean - Property to set whether user want search option or not. **Default : true**
  * SortBy : **SortOrderEnum** - Property to set the sort order of country list to be rendered. **Default : CountryISOCode**
  * IsShowAllOtherCountry : boolean - Property to set whether show all other country in dropdown as well or not, when specify custom country list in module. **Default : true**
  * OutputFormat : **OutputOptionsEnum** - Property to set in which format user want the output when fill the input correctly. **Default : NumberWithCountryCode**

# ContentOptionsEnum -
Enums can be use to set the content which show in option. Enum members are -
  * *Flag*
  * *CountryName*
  * *CountryPhoneCode*

# TooltipOptionsEnum -
Enum can be use to set the content of the tooltip. Enum members are -
  * *CountryName*
  * *CountryPhoneCode*
  * *CountryISOCode*

# SortOrderEnum -
Enum to specify the sort order of dropdown list. Enum members are -
  * *CountryName*
  * *CountryISOCode*
  * *CountryPhoneCode*

# OutputOptionsEnum -
Enum for specify output type of result. Enum members are -
  * *NumberWithCountryCode*
  * *Number*

# Code Sample -
  * **Show the selected country list.**
  
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
    
  * **Change in order of dropdown list.**
  
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
      
  * **Change the tooltip text.**
  
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
  
  * **Integrate the validation and set the value.**
  
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
  
# Contribute -
  Thanks for using the plugin!! Feel free to report any issue or change request required.
  
  Your appreciation would really appreciate me for further contributing in this plugin.  
  
  [![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ENNZSJNZKDEQ2)

  
