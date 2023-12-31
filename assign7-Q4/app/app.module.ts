// app.module.ts

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    exports:[CharacteristicsComponent],
    declarations: [
    AppComponent,
    CharacteristicsComponent, // Ensure this line is present
    // ... other components
  ],
  imports: [
    BrowserModule,
    // ... other modules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
