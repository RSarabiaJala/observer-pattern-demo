import { Post } from "./entities/Post";
import { PostObserver } from "./entities/PostObserver";
import { PostSubject } from "./entities/PostSubject";

// Example usage
const postObserver = new PostObserver();
const postSubject = new PostSubject();

postSubject.addObserver(postObserver);

const firstPost = new Post("First Post", "This is the content of the first post.");
const secondPost = new Post("Second Post", "This is the content of the second post.");

postSubject.addPost(firstPost);
postSubject.addPost(secondPost);