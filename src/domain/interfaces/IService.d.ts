export interface IService<T> {
     Get: () => Promise<string>;
     GetById: (id: string) => Promise<string>;
     GetByDescription: (description: string) => Promise<string>;
     Post: (entity: T) => Promise<string>;
     Put: (entity: T) => Promise<string>;
     Delete: (id: string) => Promise<string>;
}