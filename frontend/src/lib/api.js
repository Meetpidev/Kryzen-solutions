import axios from "axios";

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://kryzen-solutions.onrender.com";

export const API_REQUEST_TIMEOUT_MS = 20000;

export function buildApiUrl(path) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
}

export function postApi(path, data, config = {}) {
  const requestConfig = {
    timeout: API_REQUEST_TIMEOUT_MS,
    ...config,
  };

  if (typeof FormData !== "undefined" && data instanceof FormData) {
    if (requestConfig.headers) {
      const normalizedHeaders = { ...requestConfig.headers };
      delete normalizedHeaders["Content-Type"];
      delete normalizedHeaders["content-type"];
      requestConfig.headers = normalizedHeaders;
    }
  }

  return axios.post(buildApiUrl(path), data, requestConfig);
}

export function getApiErrorMessage(error, fallbackMessage) {
  return (
    error?.response?.data?.error ||
    error?.response?.data?.details ||
    error?.response?.data?.message ||
    error?.message ||
    fallbackMessage
  );
}
