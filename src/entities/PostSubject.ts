import { Observer } from "./Observer";
import { Post } from "./Post";
import { Subject } from "./Subject";

export class PostSubject implements Subject<Post> {
    private observers: Observer<Post>[] = [];
    private posts: Post[] = [];

    addObserver(observer: Observer<Post>): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer<Post>): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(post: Post): void {
        for (const observer of this.observers) {
        observer.update(post);
        }
    }

    addPost(post: Post): void {
        this.posts.push(post);
        this.notifyObservers(post);
    }
}