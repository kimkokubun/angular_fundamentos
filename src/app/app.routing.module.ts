import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {PhotoListComponent} from "./shared/photo/component/photo-list/photo-list.component";
import {PhotoFormComponent} from "./shared/photo/component/photo-form/photo-form.component";
import {NotFoundComponent} from "./shared/errors/not-found/not-found.component";

const routes: Routes = [
  {path: '**', component: NotFoundComponent},
  {path: 'users/flavio', component: PhotoListComponent},
  {path: 'p/add', component: PhotoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
