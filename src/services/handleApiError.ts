import axios from 'axios';
import type { ApiError } from '@/types/api';

export const handleApiError = (error: unknown): ApiError => {
  if (axios.isAxiosError(error)) {
    return {
      message: error.response?.data?.message || 'Something went wrong',
      status: error.response?.status,
    };
  }

  return {
    message: 'An unexpected error occurred',
  };
};