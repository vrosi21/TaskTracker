import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../Credentials';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private apiUrl = 'http://localhost:3000';

	constructor(private http: HttpClient) {}

	signup(credentials: Credentials): Observable<any> {
		return this.http.post(`${this.apiUrl}/users`, credentials);
	}

	getUser(userId: string): Observable<any> {
		return this.http.get(`${this.apiUrl}/users/${userId}`);
	}
}
