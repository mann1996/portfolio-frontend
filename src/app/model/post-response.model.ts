import { UserResponseModel } from './user-response.model';

export class PostResponseModel {
  id: number = 0;
  title: string;
  thumbnail: string;
  isPublic: boolean = true;
  content: string;
  createdBy: UserResponseModel;
  likes: number = 0;
  views: number = 0;
  createdAt: any;
  updatedAt: any;
}
