export class Post {
    private title: string;
    private content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    getTitle(): string {
        return this.title;
    }

    getContent(): string {
        return this.content;
    }

    setTitle(title: string): void {
        this.title = title;
    }

    setContent(content: string): void {
        this.content = content;
    }
}