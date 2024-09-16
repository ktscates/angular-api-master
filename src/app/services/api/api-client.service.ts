import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, catchError, retry, throwError } from 'rxjs'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { Post, Comment } from '../../model/model'

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  private API_URL = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) {}

  getPosts(page: number, limit: number): Observable<HttpResponse<Post[]>> {
    return this.http
      .get<Post[]>(`${this.API_URL}/posts?_page=${page}&_limit=${limit}`, {
        observe: 'response',
      })
      .pipe(retry(3), catchError(this.handleError))
  }

  getPost(id: number): Observable<Post> {
    return this.http
      .get<Post>(`${this.API_URL}/posts/${id}`)
      .pipe(catchError(this.handleError))
  }

  createPost(postData: Post): Observable<Post> {
    return this.http
      .post<Post>(`${this.API_URL}/posts`, postData)
      .pipe(catchError(this.handleError))
  }

  updatePost(id: number, postData: Post): Observable<Post> {
    return this.http
      .put<Post>(`${this.API_URL}/posts/${id}`, postData)
      .pipe(catchError(this.handleError))
  }

  deletePost(id: number): Observable<Post> {
    return this.http
      .delete<Post>(`${this.API_URL}/posts/${id}`)
      .pipe(catchError(this.handleError))
  }

  getCommentsForPost(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.API_URL}/comments?postId=${postId}`)
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!'
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    return throwError(errorMessage)
  }
}
