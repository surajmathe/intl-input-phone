import {
  Component,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  SimpleChange,
  forwardRef
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { IntlInputPhoneService } from "./intl-input-phone.service";
import {
  CountryModel,
  CustomCountryModel,
  NumberResult
} from "./model/CountryModel";
import { ConfigurationOptions } from "./model/Configuration";
import {
  ContentOptionsEnum,
  TooltipOptionsEnum,
  SortOrderEnum,
  OutputOptionsEnum
} from "./model/Enums";
declare var $: any;

@Component({
  selector: "intl-input-phone",
  templateUrl: "./intl-input-phone.component.html",
  styleUrls: ["./intl-input-phone.component.css"],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IntlInputPhoneComponent),
      multi: true
    }
  ]
})
export class IntlInputPhoneComponent
  implements OnInit, AfterViewInit, ControlValueAccessor {
  /**
   * Input property to set the Custom Country List.
   */
  @Input() CountryList: CustomCountryModel[];

  /**
   * Input property to provide the configuration of module and its feature.
   */
  @Input() ConfigurationOption: ConfigurationOptions;

  /**
   * Input property to set the prefilled number value.
   */
  @Input() NumberTextValue: string;

  /**
   * Input property to set the selected country isocode not able to get correctly from number text value.
   */
  @Input() SelectedCountryISOCode: string;

  /**
   * Output event : It is fire when Is Required flag is change.
   */
  @Output() OnIsRequiredChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Output event : It is fire when Number is filled completly according to input masking.
   * return number or number with country code.
   */
  @Output() OnNumberChange: EventEmitter<NumberResult> = new EventEmitter<NumberResult>();

  /**
   * Output event : It is fire when Number is filled completly according to input masking.
   * return number or number with country code.
   */
  @Output() OnCountryDrpdwnChange: EventEmitter<CountryModel> = new EventEmitter<CountryModel>();
  onChange: any = () => {};
  onTouched: any = () => {};

  /**
   *
   * @param obj In this InputCountryModel : In "Number" we expect mobile number without country code and "ISOCode" we expect ISO code
   * for setting the country flag.
   */
  writeValue(obj: NumberResult): void {
    if(obj && obj.CountryModel.ISOCode)
    {
      let selectedCountry = this.filteredCountryList.find(
        x => x.ISOCode == obj.CountryModel.ISOCode
      );
      if (selectedCountry && selectedCountry.ISOCode) {
        $("." + this.ConfigurationOption.SelectorClass + " .CountryDrpDwn")
          .val(selectedCountry.ISOCode)
          .trigger("change");
          $("." + this.ConfigurationOption.SelectorClass + " .CountryNumberInput").val(obj.Number);
      }
    }
  }
  
  /**
   * Register On Change Event
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  /**
   * Register on touched events.
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  get value(){
    return this.outputResult;
  }

  set value(obj : NumberResult)
  {
    this.writeValue(obj);
  }
  /**
   * Method to set the enable/disable state of the control using reactive form.
   */
  setDisabledState?(isDisabled: boolean): void {
    if ($("." + this.ConfigurationOption.SelectorClass + " .CountryDrpDwn")) {
      $("." + this.ConfigurationOption.SelectorClass + " .CountryDrpDwn").prop(
        "disabled",
        isDisabled
      );
      
    }
    if ($("." + this.ConfigurationOption.SelectorClass + " .CountryNumberInput")) {
      $("." + this.ConfigurationOption.SelectorClass + " .CountryNumberInput").prop(
        "disabled",
        isDisabled
      );
      
    }
  }
  IsInputComplete: boolean = false;

  allCountryList: CountryModel[] = [];
  filteredCountryList: CountryModel[] = [];
  selectedCountry: CountryModel;
  outputResult: NumberResult;
  constructor(private _service: IntlInputPhoneService) {
    /**
     * Get Country list data.
     */
    this.allCountryList = this._service.GetCountryList();
    //assign the configuration option if found null so default dropdown will run.
    if (
      this.ConfigurationOption == null ||
      this.ConfigurationOption == undefined
    ) {
      this.ConfigurationOption = new ConfigurationOptions();
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeCountryDrpDwn();
  }

  ngOnChanges(changes: SimpleChange) {
    if (
      changes["NumberTextValue"] &&
      changes["NumberTextValue"].previousValue !=
        changes["NumberTextValue"].currentValue
    ) {
      this.initializeCountryDrpDwn();
    }
  }

  /**
   * Method to initialize the country Dropdown.
   */
  initializeCountryDrpDwn() {
    //#region Apply filter based on user given country list
    if (
      this.CountryList != null &&
      this.CountryList != undefined &&
      this.CountryList.length > 0
    ) {
      //check whether specify in configuration to show all other country or not.
      if (this.ConfigurationOption.IsShowAllOtherCountry) {
        this.filteredCountryList = [];
        this.filteredCountryList = this.filteredCountryList.concat(
          this.allCountryList
        );
      }

      //Loop through the user country list and add/change the value in filteredCountryList.
      this.CountryList.forEach(customCountry => {
        let existingCountry = this.filteredCountryList.find(
          x => x.ISOCode.toLowerCase() == customCountry.ISOCode.toLowerCase()
        );
        if (existingCountry != null && existingCountry != undefined) {
          //update country in list.
          //remove the existing item.
          var existingIndex = this.filteredCountryList.findIndex(
            x => x.ISOCode == existingCountry.ISOCode
          );
          if (existingIndex > -1) {
            this.filteredCountryList.splice(existingIndex, 1);
          }
          existingCountry = this.getCountryOptionFromCustomCountry(
            customCountry
          );

          //add element in array.
          this.filteredCountryList.push(existingCountry);
        } else {
          //add country in list.
          this.filteredCountryList.push(
            this.getCountryOptionFromCustomCountry(customCountry)
          );
        }
      });
    } else {
      this.filteredCountryList = this.allCountryList;
    }
    //#endregion

    //#region Apply Sorting based on configuration.
    switch (this.ConfigurationOption.SortBy) {
      case SortOrderEnum.CountryName:
        this.filteredCountryList = this.filteredCountryList.sort(
          (objA, objB) => {
            if (objA.Name < objB.Name) return -1;
            else if (objA.Name > objB.Name) return 1;
            return 0;
          }
        );
        break;
      case SortOrderEnum.CountryISOCode:
        this.filteredCountryList = this.filteredCountryList.sort(
          (objA, objB) => {
            if (objA.ISOCode < objB.ISOCode) return -1;
            else if (objA.ISOCode > objB.ISOCode) return 1;
            return 0;
          }
        );
        break;
      case SortOrderEnum.CountryPhoneCode:
        this.filteredCountryList = this.filteredCountryList.sort(
          (objA, objB) => {
            if (objA.CountryPhoneCode < objB.CountryPhoneCode) return -1;
            else if (objA.CountryPhoneCode > objB.CountryPhoneCode) return 1;
            return 0;
          }
        );
        break;
    }
    //#endregion

    //#region  set the selected country dropdown and set the input value.
    let selectedCountry: any;
    let NumberValue: any;
    if (
      this.NumberTextValue != null &&
      this.NumberTextValue != undefined &&
      this.NumberTextValue != ""
    ) {
      //get the country code from number and set the selected country.
      let countryCode = this.NumberTextValue.split(/ /)[0];
      //replace the country code from numbertext.
      NumberValue = this.NumberTextValue.replace(countryCode, "");
      NumberValue = NumberValue.trim();

      if (countryCode.includes("+")) {
        //check if country contain bracket then get country code till next space.
        if (NumberValue[0] == "(") {
          countryCode += " " + NumberValue.split(/ /)[0];
          NumberValue = this.NumberTextValue.replace(countryCode, "");
        }
        //add the space in country code and trim the numbervalue.
        countryCode += " ";
        NumberValue = NumberValue.trim();
      } else {
        NumberValue = countryCode;
        countryCode = "";
      }

      //set the countrycode from
      this.filteredCountryList = $.map(this.filteredCountryList, objCountry => {
        objCountry.selected = false;
        return objCountry;
      });
      if (
        this.SelectedCountryISOCode != null &&
        this.SelectedCountryISOCode != undefined &&
        this.SelectedCountryISOCode != ""
      ) {
        //get the selected country dropdown match the inital 3 character with the countrycode from the filteredcountry list.
        selectedCountry = this.filteredCountryList.find(
          x => x.ISOCode == this.SelectedCountryISOCode
        );
        if (selectedCountry != null && selectedCountry != undefined) {
          selectedCountry.selected = true;
        }
      } else {
        //get the selected country dropdown match the inital 3 character with the countrycode from the filteredcountry list.
        selectedCountry = this.filteredCountryList.find(
          x => x.CountryPhoneCode == countryCode
        );
        if (selectedCountry != null && selectedCountry != undefined) {
          selectedCountry.selected = true;
        }
      }
    }

    //#endregion

    //#region set the id and title for the country dropdown.
    var selectedDrpDwnData = $.map(this.filteredCountryList, obj => {
      obj.id = obj.ISOCode;
      //set the tooltip, if flag is true and based of value which is set in the configuration.
      if (this.ConfigurationOption.IsShowToolTip) {
        switch (this.ConfigurationOption.ToolTipText) {
          case TooltipOptionsEnum.CountryName:
            obj.title = obj.Name;
            break;
          case TooltipOptionsEnum.CountryISOCode:
            obj.title = obj.ISOCode;
            break;
          case TooltipOptionsEnum.CountryPhoneCode:
            obj.title = obj.CountryPhoneCode;
            break;
          default:
            obj.title = "";
            break;
        }
      } else {
        obj.title = "";
      }
      return obj;
    });
    //#endregion

    $("." + this.ConfigurationOption.SelectorClass + " .CountryDrpDwn").select2(
      {
        data: selectedDrpDwnData,
        templateResult: this.prepareHtmlOptionToRender,
        minimumResultsForSearch: this.ConfigurationOption.IsShowSearchOption
          ? 0
          : Infinity,
        matcher: this.searchCountryData,
        templateSelection: this.prepareHtmlOptionSelected
      }
    );
    if (selectedCountry && selectedCountry.selected) {
      $("." + this.ConfigurationOption.SelectorClass + " .CountryDrpDwn")
        .val(selectedCountry.id)
        .trigger("change");
    }

    if (NumberValue != null && NumberValue != undefined && NumberValue != "") {
      $(
        "." + this.ConfigurationOption.SelectorClass + " .CountryNumberInput"
      ).val(NumberValue);
    }
  }

  /**
   * Method to prepare the html and render the option html based on configuration.
   * Set the option html based on configuration provided
   */
  prepareHtmlOptionToRender = (country: CountryModel) => {
    let optionHtml = "";
    optionHtml += `<div class="CountryOptionItem">`;
    if (
      this.ConfigurationOption.OptionTextTypes.includes(ContentOptionsEnum.Flag)
    ) {
      //check if customflag url is set then show the for that url
      if (
        country.IsShowCustomFlag != null &&
        country.IsShowCustomFlag != undefined &&
        country.IsShowCustomFlag
      ) {
        optionHtml +=
          `<div class="flags" style="background:url(` +
          country.CustomFlagUrl +
          `) no-repeat center/contain;"></div>`;
      } else {
        optionHtml += `<div class="flags ` + country.FlagCssClass + `"></div>`;
      }
    }
    if (
      this.ConfigurationOption.OptionTextTypes.includes(
        ContentOptionsEnum.CountryName
      )
    ) {
      optionHtml += `<div class="CountryText">` + country.Name + `</div>`;
    }
    if (
      this.ConfigurationOption.OptionTextTypes.includes(
        ContentOptionsEnum.CountryPhoneCode
      )
    ) {
      optionHtml +=
        `<div class="CountryCode"> ` + country.CountryPhoneCode + `</div>`;
    }
    optionHtml += `</div>`;
    return $(optionHtml);
  };

  /**
   * Return the Country falg and country code.
   * Change the input masking for the input.
   */
  prepareHtmlOptionSelected = (selectedItem: any) => {
    this.selectedCountry = selectedItem;
    let selectedHtml = "";
    selectedHtml += `<div class="CountryOptionItem CountryOptionSelected">`;
    //check if customflag url is set then show the for that url
    if (
      selectedItem.IsShowCustomFlag != null &&
      selectedItem.IsShowCustomFlag != undefined &&
      selectedItem.IsShowCustomFlag
    ) {
      selectedHtml +=
        `<div class="flags" style="background:url(` +
        selectedItem.CustomFlagUrl +
        `) no-repeat center/contain;"></div>`;
    } else {
      selectedHtml +=
        `<div class="flags ` + selectedItem.FlagCssClass + `"></div>`;
    }

    selectedHtml +=
      `<div class="CountryCode"> ` + selectedItem.CountryPhoneCode + `</div>`;
    selectedHtml += `</div>`;

    if (
      this.selectedCountry != null &&
      this.selectedCountry.InputMasking != null &&
      this.selectedCountry.InputMasking != ""
    ) {
      $(
        "." + this.ConfigurationOption.SelectorClass + " .CountryNumberInput"
      ).inputmask(this.selectedCountry.InputMasking, {
        placeholder: "_",
        oncomplete: this.maskingOnCompleteEvent,
        onincomplete: this.maskingOnInCompleteEvent,
        oncleared: this.maskingOnClearedEvent
      });
      //emit the output event.
      this.OnCountryDrpdwnChange.emit(this.selectedCountry);
    }
    return $(selectedHtml);
  };

  /**
   * Method for apply the searching for the select 2.
   * Searching is apply based on country name, country ISO Code and Country phone Code.
   */
  searchCountryData = (params, data: CountryModel) => {
    //check if query is empty then return show all listing.
    if (
      params != null &&
      params != undefined &&
      params.term != null &&
      params.term != undefined &&
      params.term != ""
    ) {
      //if query match with in name or phonecode or iso then return the data otherwise return null.
      try {
        if (
          data.Name.toLowerCase().includes(params.term.toLowerCase()) ||
          data.CountryPhoneCode.toLowerCase().includes(
            params.term.toLowerCase()
          ) ||
          data.ISOCode.toLowerCase().includes(params.term.toLowerCase())
        ) {
          return data;
        }
        return null;
      } catch {
        return null;
      }
    } else {
      return data;
    }
  };

  /**
   * Method return the country option from the customcountry option.
   * Check if user given country is not available our list then add in the country.
   * Check if user given country is available in our list then replace those value which is not given by user.
   */
  getCountryOptionFromCustomCountry = (
    customCountry: CustomCountryModel
  ): CountryModel => {
    let existingCountry = this.allCountryList.find(
      x => x.ISOCode == customCountry.ISOCode
    );
    if (existingCountry != null && existingCountry != undefined) {
      //change the name.
      if (
        customCountry.Name != null &&
        customCountry.Name != undefined &&
        customCountry.Name != ""
      ) {
        existingCountry.Name = customCountry.Name;
      }
      //change in input masking.
      if (
        customCountry.InputMasking != null &&
        customCountry.InputMasking != undefined &&
        customCountry.InputMasking != ""
      ) {
        existingCountry.InputMasking = customCountry.InputMasking;
      }

      //set the country phonecode
      if (
        customCountry.CountryPhoneCode != null &&
        customCountry.CountryPhoneCode != undefined &&
        customCountry.CountryPhoneCode != ""
      ) {
        existingCountry.CountryPhoneCode = customCountry.CountryPhoneCode;
      }

      //set the custom flag url
      if (
        customCountry.CustomFlagUrl != null &&
        customCountry.CustomFlagUrl != undefined &&
        customCountry.CustomFlagUrl != ""
      ) {
        existingCountry.CustomFlagUrl = customCountry.CustomFlagUrl;
        existingCountry.IsShowCustomFlag = true;
      }
      return existingCountry;
    } else {
      let OutputCountry: CountryModel = {
        Name: customCountry.Name,
        ISOCode: customCountry.ISOCode,
        FlagCssClass: "flags ",
        CountryPhoneCode: customCountry.CountryPhoneCode,
        InputMasking: customCountry.InputMasking,
        CustomFlagUrl: customCountry.CustomFlagUrl,
        IsShowCustomFlag: true
      };
      return OutputCountry;
    }
  };

  /**
   * Event to handle the completed event for input masking.
   */
  maskingOnCompleteEvent = (e: any): void => {
    this.IsInputComplete = true;
    this.emitIsRequiredEvent();
  };

  /**
   * Event to handle incomplete event for input masking.
   */
  maskingOnInCompleteEvent = (e: any): void => {
    this.IsInputComplete = false;
    this.emitIsRequiredEvent();
  };

  /**
   * Event to handle cleared event for input masking.
   */
  maskingOnClearedEvent = (e: any): void => {
    this.IsInputComplete = false;
    this.emitIsRequiredEvent();
  };

  /**
   * Emit is Input completed event to outer component.
   */
  emitIsRequiredEvent() {
    this.OnIsRequiredChange.emit(this.IsInputComplete);
    if (this.IsInputComplete) {
      this.emitOnNumberChange();
    }
    else{
      this.outputResult = null;
      //updating null value in the form group.
      this.onChange(null);
    }
  }
  
  /**
   * Emit when input is change and completed the masking.
   * Return the output value based on configuration that whether we need to return number only or number with country code.
   */
  emitOnNumberChange() {
    let inputValue: string = $(
      "." + this.ConfigurationOption.SelectorClass + " .CountryNumberInput"
    ).val();

    this.outputResult = {
      CountryModel: this.selectedCountry,
      Number: ""
    };
    if (
      this.ConfigurationOption.OutputFormat ==
      OutputOptionsEnum.NumberWithCountryCode
    ) {
      let selectedCountryCode: string = this.selectedCountry.CountryPhoneCode;
      this.outputResult.Number = selectedCountryCode + inputValue;
    } else {
      this.outputResult.Number = inputValue;
    }
    this.OnNumberChange.emit(this.outputResult);
    this.onChange(this.outputResult);
  }
}
