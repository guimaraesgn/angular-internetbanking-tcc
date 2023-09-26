import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import { RouterModule} from '@angular/router';



import { AppComponent } from './app.component';

const routes: Routes =[
{ path: '', pathMatch: 'full', redirectTo: 'bancos' },
{
    path: 'bancos',
    loadChildren: () => import('./bancos/bancos.module').then(m => m.BancosModule)
  }
];

@NgModule({
  declarations: [

    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


