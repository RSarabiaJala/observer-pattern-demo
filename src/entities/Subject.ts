import { Observer } from "./Observer";

export interface Subject<T> {
    addObserver(observer: Observer<T>): void;
    removeObserver(observer: Observer<T>): void;
    notifyObservers(data: T): void;
}