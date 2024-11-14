export interface songDeleteResponseType {
  status: 'success' | 'fail';
  message: 'song deleted' | 'song not found';
  data: null;
}
