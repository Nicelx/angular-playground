import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { PostsService } from "./posts.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
	constructor(private http: HttpClient, private postService: PostsService) {}

	loadedPosts: Post[] = [];
	isFetching = false;
	error = null;

	isLoadedPostsEmpty = () => {
		if (this.loadedPosts.length < 1) return true;
		else return false;
	};

	ngOnInit() {
		this.isFetching = true;
		this.postService.fetchPosts().subscribe((posts) => {
			this.isFetching = false;
			this.loadedPosts = posts;
		}, error => {
			this.error = error.message;
		});
	}

	onCreatePost(postData: Post) {
		this.postService.createAndStorePost(postData.title, postData.content);
	}

	onFetchPosts() {
		// Send Http request
		this.isFetching = true;
		this.postService.fetchPosts().subscribe((posts) => {
			this.isFetching = false;
			this.loadedPosts = posts;
		}, error => {
			this.error = error.message;
		});
	}

	onClearPosts() {
		this.postService.deletePosts().subscribe(() => {
			this.loadedPosts = [];
		})
	}
}
