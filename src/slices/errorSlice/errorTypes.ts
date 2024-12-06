import { ReactNode } from "react";

export interface IError {
    message: string;
    code?: string;
}

export interface IErrorState {
    errorQueue: Error[];
    currentError: Error | null;
}

export interface IErrorModalProps {
    isOpen: boolean;
    message: string;
    onClose: () => void;
}

export interface IErrorProviderProps {
    children: ReactNode;
}