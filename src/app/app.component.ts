import { Component, ViewEncapsulation } from '@angular/core';
import { CustomCountryModel, OutputOptionsEnum, ContentOptionsEnum } from 'intl-input-phone';
import { ConfigurationOptions } from 'intl-input-phone';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NumberResult } from 'projects/intl-input-phone/src/public_api';


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
  configOption3 : ConfigurationOptions;
  sampleForm : FormGroup
  constructor(
    private formBuilder : FormBuilder
  ){
    this.sampleForm = this.formBuilder.group({
      "sampleReactiveControl" : new FormControl()
    });
    

     this.selectedCountryList.push({ISOCode : "TE", Name : "TEST", CountryPhoneCode : "+39", CustomFlagUrl : "../assets/images.jpg", InputMasking : "999 999 9999"});
     this.selectedCountryList.push({ISOCode : "IN", Name : "INDIATEST"});
     this.configOption1 = new ConfigurationOptions();
     this.configOption2 = new ConfigurationOptions();
     this.configOption3 = new ConfigurationOptions();
     this.configOption2.SelectorClass = "CountryInput1";
     this.configOption2.OptionTextTypes = [];
     this.configOption2.OptionTextTypes.push(ContentOptionsEnum.Flag);
     this.configOption2.OptionTextTypes.push(ContentOptionsEnum.CountryName);

     this.configOption1.SelectorClass = "CountryInput2";
     this.configOption1.IsShowAllOtherCountry = false;
     this.configOption1.OutputFormat = OutputOptionsEnum.Number;
    // this.selectedCountryList.push(new CustomCountryModel(){ Name="Test2", ISOCode="IN"});
  }

  ToggbleEnableDisableState(){
    if(this.sampleForm.controls['sampleReactiveControl'].disabled)
    {
      this.sampleForm.controls['sampleReactiveControl'].enable();
    }
    else{
      this.sampleForm.controls['sampleReactiveControl'].disable();
    }
  }

  GetFormValue(){
    // let selectedCountryValue : NumberResult = {
    //   CountryModel :{
    //     ISOCode : "IN",
    //     CountryPhoneCode : "+91",
    //     FlagCssClass:"",
    //     InputMasking : "",
    //     Name : "",
    //     IsShowCustomFlag : false
    //   },
    //   Number : "8602605927"
    // }
    // this.sampleForm.controls['sampleReactiveControl'].setValue(selectedCountryValue);
    console.log('form value is ', this.sampleForm);
  }

  onNumberChange(e: string){
    console.log("Number Value is",e);
  }

}
