import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

import {PhotoComponent} from "./component/photo/photo.component";
import {PhotoListComponent} from './component/photo-list/photo-list.component';
import {PhotoFormComponent} from './component/photo-form/photo-form.component';
import { PhotosComponent } from './component/photo-list/photos/photos.component';

@NgModule({
  declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent, PhotosComponent],
  imports: [HttpClientModule, CommonModule],
})
export class PhotosModule {

}
