export interface modelDeleteResponseType {
  status: 'success' | 'fail';
  message: 'model deleted' | 'model not found';
  data: null;
}
