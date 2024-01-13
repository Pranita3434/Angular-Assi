import { Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BookeComponent } from './booke/booke.component';
export const routes: Routes = [

    {path :'technologies', component: TechnologiesComponent},
    {path :'booke', component: BookeComponent},
];
