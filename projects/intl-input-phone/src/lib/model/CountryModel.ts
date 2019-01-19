export interface CountryModel{
    ISOCode : string;
    Name : string;
    FlagCssClass : string;
    InputMasking : string;
    CountryPhoneCode :string;
    IsShowCustomFlag : boolean;
    CustomFlagUrl ?: string;
}

/**
 * Class for set the country
 */
export class CustomCountryModel{
    ISOCode : string;
    Name? : string;    
    InputMasking? : string;
    CountryPhoneCode? :string;
    CustomFlagUrl?: string;
    constructor(){

    }
}

export class NumberResult{
    Number : string;
    CountryModel : CountryModel;
}