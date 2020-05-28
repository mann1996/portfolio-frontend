import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostRequestModel } from '../model/post-request.model';
import { Observable } from 'rxjs';
import { PostResponseModel } from '../model/post-response.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private hostUrl: string = 'http://localhost:8080/posts/';
  constructor(private http: HttpClient) {}

  savePost(post: PostRequestModel, id: number) {
    return this.http.post(this.hostUrl + 'save?id=' + id, post);
  }

  findPost(id: number): Observable<PostResponseModel> {
    return this.http.get<PostResponseModel>(this.hostUrl + id);
  }

  findPublicPostsByUser(userId: String): Observable<PostResponseModel[]> {
    return this.http.get<PostResponseModel[]>(
      this.hostUrl + 'user/' + userId + '/public'
    );
  }
}
