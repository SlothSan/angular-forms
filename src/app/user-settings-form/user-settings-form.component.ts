import { Component } from '@angular/core';
import { UserSettings} from "../data/user-settings";
import {NgForm, NgModel} from "@angular/forms";
import {DataService} from "../data/data.service";

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent {
  originalUserSettings : UserSettings = {
    "name": null,
    "emailOffers": null,
    "interfaceStyle": null,
    "subscriptionType": null,
    "notes": null
  }

  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor(private dataService: DataService) {
  }

  onSubmit(form: NgForm) {
    this.dataService.postUserSettingsForm(this.userSettings)
      .subscribe(
        {
          next: (result: any) => console.log('succes: ', result),
          error: (error: any) => console.log('error:', error)
        }
      );
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid)
  }
}
