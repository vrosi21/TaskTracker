import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const appRoutes: Routes = [
	{ path: '', component: TasksComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'login', component: LoginPageComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ButtonComponent,
		TasksComponent,
		TaskItemComponent,
		AddTaskComponent,
		AboutComponent,
		FooterComponent,
		LoginPageComponent,
  LoginComponent,
  SignUpComponent,
	],
	imports: [
		BrowserModule,
		FontAwesomeModule,
		HttpClientModule,
		FormsModule,
		RouterModule.forRoot(appRoutes),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
