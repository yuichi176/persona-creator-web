import { ZodError } from 'zod'

export const apiClient = {
  async get<T>(
    url: string,
    responseParser: (response: Response) => T | Promise<T>,
    options?: RequestInit,
  ): Promise<HttpResponse<T>> {
    return request(url, responseParser, options)
  },

  async post<T>(
    url: string,
    responseParser: (response: Response) => T | Promise<T>,
    body: object,
    options?: RequestInit,
  ): Promise<HttpResponse<T>> {
    return request(url, responseParser, {
      method: 'POST',
      ...(body === null ? {} : { body: JSON.stringify(body) }),
      ...options,
    })
  },
}

const request = async <T>(
  url: string,
  responseParser: (response: Response) => T | Promise<T>,
  options?: RequestInit,
): Promise<HttpResponse<T>> => {
  const mergedOptions = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  }

  try {
    const res = await fetch(url, mergedOptions)
    if (!res.ok) {
      const errorResponse = (await res.json()) as ErrorResponse | undefined
      if (errorResponse === undefined) {
        throw new ApiError(
          {
            error: {
              reason: 'RequestNotReachedServer',
              message: `Request did not reach the server. Status code: ${res.status} `,
            },
          },
          res.status,
          res.url,
        )
      } else {
        throw new ApiError(errorResponse, res.status, res.url)
      }
    }
    const data = await responseParser(res)
    return { error: undefined, data: data }
  } catch (error) {
    if (error instanceof ApiError) {
      return { error: error, data: undefined }
    } else if (error instanceof ZodError) {
      return {
        error: new ApiError({
          error: {
            reason: 'ValidationError',
            message: error.message,
          },
        }),
        data: undefined,
      }
    } else {
      return {
        error: new ApiError({
          error: {
            reason: 'UnexpectedError',
            message: `An unexpected error occurred: ${error}`,
          },
        }),
        data: undefined,
      }
    }
  }
}

export type HttpResponse<T> =
  | {
      error: Error
      data: undefined
    }
  | {
      error: undefined
      data: T
    }

type ErrorResponse = {
  error: {
    reason: string
    message: string
  }
}

class ApiError extends Error {
  status?: number
  url?: string
  errorResponse: ErrorResponse
  constructor(errorResponse: ErrorResponse, status?: number, url?: string) {
    super('ApiError')
    this.status = status
    this.url = url
    this.errorResponse = errorResponse
  }
}
