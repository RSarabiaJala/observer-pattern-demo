"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSubject = void 0;
class PostSubject {
    constructor() {
        this.observers = [];
        this.posts = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notifyObservers(post) {
        for (const observer of this.observers) {
            observer.update(post);
        }
    }
    addPost(post) {
        this.posts.push(post);
        this.notifyObservers(post);
    }
}
exports.PostSubject = PostSubject;
