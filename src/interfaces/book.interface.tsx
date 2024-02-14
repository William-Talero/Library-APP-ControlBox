export interface IBook {
    id: number;
    name: string,
    author: string,
    image: string,
    resume: string
}

export interface IBookProps {
    key: number,
    book: IBook
}