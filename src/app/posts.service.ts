import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Post } from "./post.model";
import { map, catchError, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({ providedIn: "root" })
export class PostsService {
	error = new Subject<string>();

	constructor(private http: HttpClient) {}

	createAndStorePost(title: string, content: string) {
		const postData: Post = { title, content };
		this.http
			.post<{ name: string }>(
				"https://angular-test-afd6e-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
				postData,
				{
					observe: 'response',
				}
			)
			.subscribe(
				(responseData) => {
					console.log(responseData);
				},
				(error) => {
					this.error.next(error.message);
				}
			);
	}

	fetchPosts() {
		let searchParams = new HttpParams();
		searchParams = searchParams.append('print' , 'pretty')

		return this.http
			.get<{ [key: string]: Post }>(
				"https://angular-test-afd6e-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
				{
					headers: new HttpHeaders({
						'Custom-Hedear' : 'hello'
					}),
					// params: new HttpParams().set('print','pretty')
					params: searchParams
				}
			)
			.pipe(
				map((responseData) => {
					const postsArray: Post[] = [];
					for (const key in responseData) {
						if (responseData.hasOwnProperty(key)) {
							postsArray.push({ ...responseData[key], id: key });
						}
					}
					return postsArray;
				}),
				catchError((errorRes) => {
					// log, send to analytics etc..
					return throwError(errorRes);
				})
			);
	}

	deletePosts() {
		return this.http.delete(
			"https://angular-test-afd6e-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
			{
				observe: 'events'
			}
		).pipe(tap(event => {
			console.log(event);			

			if (event.type === HttpEventType.Sent) {
				// ...
			}
			if (event.type === HttpEventType.Response) {
				console.log(event.body);
			}
		}));
	}
}
