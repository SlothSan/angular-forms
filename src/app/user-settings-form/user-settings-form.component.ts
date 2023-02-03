import { Component } from '@angular/core';
import { UserSettings} from "../data/user-settings";
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent {
  originalUserSettings : UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  }

  userSettings: UserSettings = { ...this.originalUserSettings };

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid)
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid)
  }
}
