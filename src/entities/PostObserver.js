"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostObserver = void 0;
class PostObserver {
    update(post) {
        console.log(`PostObserver received an update: ${post.getTitle()} - ${post.getContent()}`);
    }
}
exports.PostObserver = PostObserver;
