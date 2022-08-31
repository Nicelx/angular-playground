import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";
import { map, catchError } from "rxjs/operators";
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
				postData
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
		return this.http
			.get<{ [key: string]: Post }>(
				"https://angular-test-afd6e-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
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
			"https://angular-test-afd6e-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
		);
	}
}
