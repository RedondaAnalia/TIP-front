import { environment } from '../environments/environment';

const apiEndpoint: String = environment.apiEndpoint;
const apiPhotoEndpoint: String = environment.apiPhotoEndpoint;
export const URL_SERVICIOS = apiEndpoint;
export const URL_PHOTO_SERVICE =  apiPhotoEndpoint;

export const VALID_PHOTO_EXTENSIONS = ['jpeg', 'png'];
export const MAX_PHOTO_SIZE = 1024 * 1024 * 5 ;
