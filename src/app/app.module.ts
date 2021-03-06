import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PhonePipe } from './pipes/phone.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FooterComponent } from './shared/footer/footer.component';
import { InputTextComponent } from './shared/form/input/input-text/input-text.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContactAddComponent } from './view/contacts/contact-add/contact-add.component';
import { NameCellComponent } from './view/contacts/contact-cells/name-cell/name-cell.component';
import { NameHeaderComponent } from './view/contacts/contact-cells/name-header/name-header.component';
import { PhoneCellComponent } from './view/contacts/contact-cells/phone-cell/phone-cell.component';
import { ContactDetailsComponent } from './view/contacts/contact-details/contact-details.component';
import { DetailItemComponent } from './view/contacts/contact-details/detail-item/detail-item.component';
import { ContactFormComponent } from './view/contacts/contact-form/contact-form.component';
import { ContactHeaderComponent } from './view/contacts/contact-header/contact-header.component';
import { ContactsComponent } from './view/contacts/contacts.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    PhonePipe,
    ContactDetailsComponent,
    ContactAddComponent,
    ContactHeaderComponent,
    ContactFormComponent,
    InputTextComponent,
    DetailItemComponent,
    TruncatePipe,
    NameCellComponent,
    NameHeaderComponent,
    PhoneCellComponent,
  ],
  entryComponents: [
    ContactFormComponent,
    InputTextComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
