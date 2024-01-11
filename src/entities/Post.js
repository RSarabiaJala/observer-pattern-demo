"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
    getTitle() {
        return this.title;
    }
    getContent() {
        return this.content;
    }
    setTitle(title) {
        this.title = title;
    }
    setContent(content) {
        this.content = content;
    }
}
exports.Post = Post;
