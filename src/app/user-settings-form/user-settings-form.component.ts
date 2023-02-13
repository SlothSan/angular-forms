import {Component, OnInit} from '@angular/core';
import { UserSettings} from "../data/user-settings";
import {NgForm, NgModel} from "@angular/forms";
import {DataService} from "../data/data.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit{
  originalUserSettings : UserSettings = {
    "name": null,
    "emailOffers": null,
    "interfaceStyle": null,
    "subscriptionType": null,
    "notes": null
  }

  postError: boolean = false;
  postErrorMessage: string = ''
  subscriptionTypes: Observable<string[]> | undefined

  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings)
        .subscribe(
          {
            next: (result: any) => console.log('succes: ', result),
            error: (error: any) => console.log('error:', error)
          }
        );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors.'
    }

  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid)
  }
}
