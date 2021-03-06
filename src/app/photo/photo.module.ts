import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

import {PhotoComponent} from "./component/photo/photo.component";
import {PhotoListComponent} from './component/photo-list/photo-list.component';
import {PhotoFormComponent} from './component/photo-form/photo-form.component';
import { PhotosComponent } from './component/photo-list/photos/photos.component';
import {FormsModule} from "@angular/forms";
import { FilterByDescriptionPipe } from './component/photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './component/photo-list/load-button/load-button.component';
import {CardModule} from "../shared/components/card/card.module";
import {SearchModule} from "./component/photo-list/search/search.module";
import {DarkenOnHoverModule} from "../shared/directives/darken-on-hover/darken-on-hover.module";

@NgModule({
  declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent, PhotosComponent, FilterByDescriptionPipe, LoadButtonComponent],
    imports: [HttpClientModule, CommonModule, FormsModule, CardModule, SearchModule, DarkenOnHoverModule],
})
export class PhotosModule {

}
