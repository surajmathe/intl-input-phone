/**All the enums will be here. */
/**Enums for content which can be available and show in option */
export enum ContentOptionsEnum {
  Flag = 0,
  CountryName = 1,
  CountryPhoneCode = 2
}

/**
 * Enum for specify output type of result.
 */
export enum OutputOptionsEnum {
  NumberWithCountryCode = 0,
  Number = 1
}

/**Enum to specify the sort order of dropdown list. */
export enum SortOrderEnum {
  CountryName = 0,
  CountryISOCode = 1,
  CountryPhoneCode = 2
}

/** 
 * Enum for show the tooltip text
*/
export enum TooltipOptionsEnum{
  CountryName = 1,
  CountryPhoneCode = 2,
  CountryISOCode = 3
}