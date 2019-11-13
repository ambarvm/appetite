import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ResultsComponent } from './pages/home/results/results.component';
import { SearchComponent } from './pages/home/search/search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [AppComponent, TopBarComponent, HomeComponent, SearchComponent, ResultsComponent],
	imports: [BrowserModule,HttpClientModule,AppRoutingModule, BrowserAnimationsModule,MaterialModule,FormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
