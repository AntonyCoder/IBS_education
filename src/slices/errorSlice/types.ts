export interface IError {
    message: string;
    code?: string;
}

export interface IErrorState {
    errorQueue: Error[];
    currentError: Error | null;
}