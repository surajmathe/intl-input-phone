import { Component, ViewEncapsulation } from '@angular/core';
import { CustomCountryModel, OutputOptionsEnum, ContentOptionsEnum } from 'intl-input-phone';
import { ConfigurationOptions } from 'intl-input-phone';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.None  
})
export class AppComponent {
  title = 'international-phone-number';
  selectedCountryList : CustomCountryModel[] = [];
  configOption1 : ConfigurationOptions;
  configOption2 : ConfigurationOptions;
  constructor(){


     this.selectedCountryList.push({ISOCode : "TE", Name : "TEST", CountryPhoneCode : "+39", CustomFlagUrl : "../assets/images.jpg", InputMasking : "999 999 9999"});
     this.selectedCountryList.push({ISOCode : "IN", Name : "INDIATEST"});
     this.configOption1 = new ConfigurationOptions();
     this.configOption2 = new ConfigurationOptions();
     this.configOption2.SelectorClass = "CountryInput1";
     this.configOption2.OptionTextTypes = [];
     this.configOption2.OptionTextTypes.push(ContentOptionsEnum.Flag);
     this.configOption2.OptionTextTypes.push(ContentOptionsEnum.CountryName);

     this.configOption1.SelectorClass = "CountryInput2";
     this.configOption1.IsShowAllOtherCountry = false;
     this.configOption1.OutputFormat = OutputOptionsEnum.Number;
    // this.selectedCountryList.push(new CustomCountryModel(){ Name="Test2", ISOCode="IN"});
  }


  onNumberChange(e: string){
    console.log("Number Value is",e);
  }

}
