
# Observer Pattern

The Observer Pattern is a behavioral design pattern used in software development. It defines a one-to-many dependency between objects, so that when one object (the subject) changes its state, all its dependents (observers) are notified and updated automatically. This pattern is commonly used to implement distributed event handling systems.

## Key components of the Observer Pattern

````mermaid

classDiagram
  class Observer {
    +update(data: T): void
  }

  class Subject {
    +addObserver(observer: Observer<T>): void
    +removeObserver(observer: Observer<T>): void
    +notifyObservers(data: T): void
  }

  class PostObserver {
    +update(post: Post): void
  }

  class PostSubject {
    -observers: Observer<Post>[]
    +addObserver(observer: Observer<Post>): void
    +removeObserver(observer: Observer<Post>): void
    +notifyObservers(post: Post): void
  }

  class Post {
    -title: string
    -content: string
    +getTitle(): string
    +getContent(): string
    +setTitle(title: string): void
    +setContent(content: string): void
  }

  Observer <|-- PostObserver
  Subject <|-- PostSubject
  Subject "1" *-- "*" Observer : observers
  PostSubject "1" *-- "0..*" Post : posts

````

1. **Observer Interface**

    ````typescript
    // Observer interface
    interface Observer<T> {
        update(data: T): void;
    }
    ````

    Purpose: The Observer interface defines the contract for concrete observers. It declares the update method, which concrete observers must implement. This method is called by the subject to notify the observer about changes in the subject's state.

2. **Subject Interface**

    ````typescript
    // Subject interface
    interface Subject<T> {
        addObserver(observer: Observer<T>): void;
        removeObserver(observer: Observer<T>): void;
        notifyObservers(data: T): void;
    }
    ````

    Purpose: The Subject interface defines the contract for concrete subjects. It declares methods for managing observers (addObserver and removeObserver) and a method for notifying observers about changes (notifyObservers). Concrete subjects must implement these methods to handle the registration, removal, and notification of observers.

3. **Concrete Observer**

    ````typescript
    // Concrete Observer
    class PostObserver implements Observer<Post> {
        update(post: Post): void {
            console.log(`PostObserver received an update: ${post.getTitle()} - ${post.getContent()}`);
        }
    }
    ````

    Purpose: PostObserver is a concrete implementation of the Observer interface. It defines the update method to specify how it reacts to updates from the subject. In this example, it logs information about the received post.

4. **Concrete Subject**

    ````typescript
    // Concrete Subject
    class PostSubject implements Subject<Post> {
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
    ````

    Purpose: PostSubject is a concrete implementation of the Subject interface. It maintains a list of observers and notifies them about changes in its state (in this case, when a new post is added). The addObserver, removeObserver, and notifyObservers methods are part of the implementation to manage the observers and trigger updates.

5. **Post Class**

    ````typescript
    // Post class
    class Post {
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
    ````

    Purpose: The Post class represents the data structure for a post. It has methods to retrieve and modify the title and content of the post. In this example, instances of Post are the data that the observers are interested in, and changes to posts trigger updates to the observers.

## When is it useful

The Observer pattern is useful in the following situations:

- When an object should be able to notify other objects without making assumptions about what the dependent objects are. In other words, you don’t want these objects tightly coupled.
- When a change to one object requires changing others, and you don’t know how many objects need to be changed.
- When an abstraction has two aspects, one dependent on the other. Encapsulating these aspects in separate objects lets you vary and reuse them independent

The Observer pattern is often used to implement the Model-View-Controller pattern. Callback functions are often extended via the use of the Observer pattern.
