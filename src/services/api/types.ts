export interface FormData {
  [key: string]: string | boolean | number;
}

export interface ApiResponse {
  success: boolean;
  error?: string;
}