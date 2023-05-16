export interface IPageResponse<T> {
  content: T[];
  totalPages: number;
  size: number;
  number: number;
  totalElements: number;
  pageable: {
    pageNumber: number;
  };
}
