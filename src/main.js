"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./entities/Post");
const PostObserver_1 = require("./entities/PostObserver");
const PostSubject_1 = require("./entities/PostSubject");
// Example usage
const postObserver = new PostObserver_1.PostObserver();
const postSubject = new PostSubject_1.PostSubject();
postSubject.addObserver(postObserver);
const firstPost = new Post_1.Post("First Post", "This is the content of the first post.");
const secondPost = new Post_1.Post("Second Post", "This is the content of the second post.");
postSubject.addPost(firstPost);
postSubject.addPost(secondPost);
