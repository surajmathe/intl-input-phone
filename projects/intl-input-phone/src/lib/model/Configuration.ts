import { ContentOptionsEnum, SortOrderEnum, TooltipOptionsEnum, OutputOptionsEnum } from "./Enums";
import { Injectable } from '@angular/core';

/**
 * Class for configure the dropdown.
 */
@Injectable()
export class ConfigurationOptions {

  /**
   * Prperty to set the selector for the dropdown.
   * Default : 'IntlPhoneNumber'
   */
  public SelectorClass : string = "IntlPhoneNumber";

  /**
   * Property to set which content show in option
   * Default : Flag, CountryPhoneCode
   */
  public OptionTextTypes: ContentOptionsEnum[] = [
    ContentOptionsEnum.Flag,
    ContentOptionsEnum.CountryPhoneCode
  ];

  /**
   * Property to set the tooltip text
   * Default : Country Name
   */
  public ToolTipText: TooltipOptionsEnum = TooltipOptionsEnum.CountryName;

  /**
   * Property to set whether tooltip is show or not.
   * Default : true
   */
  public IsShowToolTip : boolean = true;

  /**
   * Property to set whether user want search option or not.
   * Default : true
   */
  public IsShowSearchOption : boolean = true;

  /**
   * Property to set the sort order of country list to be rendered.
   * Default : CountryISOCode
   */
  public SortBy : SortOrderEnum = SortOrderEnum.CountryISOCode;


  /**
   * Property to set whether show all other country in dropdown as well or not, when specify custom country list in module.
   * Default : true
   */
  public IsShowAllOtherCountry : boolean = true;

  /**
   * Property to set in which format user want the output when fill the input correctly.
   * Default : NumberWithCountryCode
   */
  public OutputFormat : OutputOptionsEnum = OutputOptionsEnum.NumberWithCountryCode;

}
