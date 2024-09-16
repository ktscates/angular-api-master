import { Component, OnInit } from '@angular/core'
import { ApiClientService } from '../../services/api/api-client.service'
import { ActivatedRoute } from '@angular/router'
import { CommonModule } from '@angular/common'
import { Comment, Post } from '../../model/model'

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent implements OnInit {
  post: Post | null = null
  comments: Comment[] | null = null

  constructor(
    private apiClient: ApiClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!
    this.apiClient.getPost(id).subscribe(data => {
      this.post = data
      this.loadComments(id)
    })
  }

  loadComments(postId: number): void {
    this.apiClient.getCommentsForPost(postId).subscribe(comments => {
      this.comments = comments
    })
  }
}
