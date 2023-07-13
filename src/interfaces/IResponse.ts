export interface IResponse<T> {
  success?: boolean
  message?: string
  error?: any
  data?: T
}

export interface IResponseList<T> {
  success?: boolean
  message?: string
  error?: any
  data?: {
    body: T[]
    totalPages?: number
    currentPage?: number
    itemPerPage?: number
    totalItems?: number
    fromItem?: number
    toItem?: number
    itemId?: string
    itemName?: string
    itemImage?: string
  }
}
