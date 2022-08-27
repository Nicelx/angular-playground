import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "./post.model";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
	constructor(private http: HttpClient) {}

	loadedPosts: Post[] = [];

	isLoadedPostsEmpty = () => {
		if (this.loadedPosts.length >= 1) return true;
		else return false
	}

	ngOnInit() {
		this.fetchPosts();
	}

	onCreatePost(postData: Post) {
		// Send Http request
		this.http
			.post<{name: string}>(
				"https://angular-test-afd6e-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
				postData
			)
			.subscribe((responseData) => {
				console.log(responseData);
			});
	}

	onFetchPosts() {
		// Send Http request
		this.fetchPosts();
	}

	onClearPosts() {
		// Send Http request
	}

	private fetchPosts() {
		this.http
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
				})
			)
			.subscribe((posts) => {
				this.loadedPosts = posts;
			});
	}
	
}
