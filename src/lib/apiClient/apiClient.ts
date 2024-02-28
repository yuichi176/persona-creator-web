export const apiClient = {
  async get<T>(
    url: string,
    responseTypeValidator: (responseData: object) => T,
    options?: RequestInit,
  ): Promise<ApiResponse<T>> {
    return request(url, responseTypeValidator, options)
  },

  async post<T>(
    url: string,
    responseTypeValidator: (responseData: object) => T,
    body: object,
    options?: RequestInit,
  ): Promise<ApiResponse<T>> {
    return request(url, responseTypeValidator, {
      method: 'POST',
      ...(body === null ? {} : { body: JSON.stringify(body) }),
      ...options,
    })
  },
}

const request = async <T>(
  url: string,
  responseTypeValidator: (responseData: object) => T,
  options?: RequestInit,
): Promise<ApiResponse<T>> => {
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
        return {
          error: {
            reason: 'RequestNotReachedServer',
            message: `Request did not reach the server. Status code: ${res.status} `,
            status: res.status,
            url: res.url,
          },
          data: undefined,
        }
      } else {
        return {
          error: {
            reason: errorResponse.error.reason,
            message: `Request failed with status: ${res.status} `,
            status: res.status,
            url: res.url,
          },
          data: undefined,
        }
      }
    }
    const data = await res.json()
    return validateResponseData(data, responseTypeValidator)
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: {
          reason: 'UnexpectedError',
          message: error.message,
        },
        data: undefined,
      }
    } else {
      throw error
    }
  }
}

const validateResponseData = <T>(data: object, validator: (data: object) => T): ApiResponse<T> => {
  try {
    const validatedData = validator(data)
    return {
      error: undefined,
      data: validatedData,
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: {
          reason: 'ValidationError',
          message: error.message,
        },
        data: undefined,
      }
    } else {
      throw error
    }
  }
}

export type ApiResponse<T> =
  | {
      error: ApiError
      data: undefined
    }
  | {
      error: undefined
      data: T
    }

type ErrorResponse = {
  error: {
    reason: string
  }
}

type ApiError = {
  reason: string
  message: string
  status?: number
  url?: string
}
