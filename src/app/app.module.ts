import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatInputModule,MatSnackBarModule, MatChipsModule, MatDialogModule, MatPaginatorModule, MatFormFieldModule, MatSortModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatStepperModule, MatCheckboxModule, MatListModule, MatBadgeModule, MatCardModule, MatButtonModule, MatGridListModule, MatSelectModule, MatMenuModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatTableModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/Dashboard/home/home.component';
import { LoginComponent } from './Component/Auth/login/login.component';
import { RegisterComponent } from './Component/Auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './Component/landing-page/landing-page.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Service/in-memory-data.service';
import { StundentListComponent } from './Component/Teacher/stundent-list/stundent-list.component';
import { GradeListComponent } from './Component/Student/grade-list/grade-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LandingPageComponent,
    StundentListComponent,
    GradeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatChipsModule,
    MatDialogModule, 
    MatPaginatorModule, 
    MatFormFieldModule, 
    MatSortModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatRadioModule, 
    MatStepperModule, 
    MatCheckboxModule, 
    MatListModule, 
    MatBadgeModule, 
    MatCardModule, 
    MatButtonModule, 
    MatGridListModule, 
    MatSelectModule, 
    MatMenuModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatToolbarModule, 
    MatTableModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,{dataEncapsulation:false}
    ), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
