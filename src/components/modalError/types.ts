import { ReactNode } from "react";

export interface IErrorModalProps {
    isOpen: boolean;
    message: string;
    onClose: () => void;
}

export interface IErrorProviderProps {
    children: ReactNode;
}