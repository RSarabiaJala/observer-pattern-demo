import { Observer } from "./Observer";
import { Post } from "./Post";

export class PostObserver implements Observer<Post> {
    update(post: Post): void {
        console.log(`PostObserver received an update: ${post.getTitle()} - ${post.getContent()}`);
    }
}