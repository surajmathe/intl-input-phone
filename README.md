# InternationalPhoneNumber

Angular plugin for entering and validating international mobile numbers. It adds a flag dropdown with country name, country phone code to any input provide validation and many customization.

# How to Use -
- Step 1 - Add dependancy in to your project
    This plugin has following dependancy - 
    1. [Jquery](https://jquery.com/)
    2. [Select 2](https://select2.org/)
    3. [Input Masking](https://robinherbots.github.io/Inputmask/)

    please include the following cdn scripts in your project in order to use this plugin or you can download that script file manually and include it in head section of index.html file -
    ```HTML
    <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.3.4/jquery.inputmask.bundle.min.js"></script>
    ```
- Step 2 - Use the plugin by using selector - intl-input-phone 
    ```HTML
        <intl-input-phone></intl-input-phone>
    ```

# Features
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




