import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule,MatSnackBarModule, MatChipsModule, MatDialogModule, MatPaginatorModule, MatFormFieldModule, MatSortModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatStepperModule, MatCheckboxModule, MatListModule, MatBadgeModule, MatCardModule, MatButtonModule, MatGridListModule, MatSelectModule, MatMenuModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatTableModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/Dashboard/home/home.component';
import { LoginComponent } from './Component/Auth/login/login.component';
import { RegisterComponent } from './Component/Auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
