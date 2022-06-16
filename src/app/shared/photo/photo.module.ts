import {NgModule} from "@angular/core";
import {PhotoComponent} from "./component/photo.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [PhotoComponent],
  imports: [HttpClientModule],
  exports: [PhotoComponent]
})
export class PhotosModule {

}
