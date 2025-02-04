export interface ErrorInfo extends Error {
     status?: number;
     statusText?: string;
}