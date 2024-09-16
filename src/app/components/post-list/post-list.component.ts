import { Component, OnInit } from '@angular/core'
import { ApiClientService } from '../../services/api-client.service'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'
import { ModalFormComponent } from '../modal-form/modal-form.component'
import { PaginationComponent } from '../pagination/pagination.component'
import { Post } from '../../model/model'

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, ModalFormComponent, PaginationComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  posts: Post[] | null = null
  isModalOpen = false
  isEditMode = false
  selectedPost = { userId: 0, id: 0, title: '', body: '' }
  currentPage = 1
  totalPages = 10
  pageSize = 10

  constructor(
    private apiClient: ApiClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPosts()
  }

  loadPosts(): void {
    this.apiClient.getPosts(this.currentPage, this.pageSize).subscribe(
      response => {
        const totalPosts = response.headers.get('X-Total-Count')
        if (totalPosts) {
          this.calculateTotalPages(+totalPosts)
        }
        this.posts = response.body
      },
      error => {
        console.error('Failed to load posts:', error)
      }
    )
  }

  calculateTotalPages(totalPosts: number): void {
    this.totalPages = Math.ceil(totalPosts / this.pageSize)
  }

  changePage(page: number): void {
    this.currentPage = page
    this.loadPosts()
  }

  openAddModal(): void {
    this.isEditMode = false
    this.selectedPost = { userId: 0, id: 0, title: '', body: '' }
    this.isModalOpen = true
  }

  openEditModal(post: Post): void {
    this.isEditMode = true
    this.selectedPost = { ...post }
    this.isModalOpen = true
  }

  closeModal(): void {
    this.isModalOpen = false
  }

  handlePostSubmit(post: Post): void {
    if (this.isEditMode) {
      // Update existing post
      this.apiClient.updatePost(post.id, post).subscribe(
        () => {
          const index = this.posts!.findIndex(p => p.id === post.id)
          if (index > -1) {
            this.posts![index] = { ...post }
          }
          this.closeModal()
        },
        error => console.error('Failed to update post:', error)
      )
    } else {
      this.apiClient.createPost(post).subscribe(
        (newPost: Post) => {
          this.posts!.unshift(newPost)
          this.closeModal()
        },
        error => console.error('Failed to create post:', error)
      )
    }
  }

  deletePost(postId: number): void {
    this.apiClient.deletePost(postId).subscribe(
      () => {
        this.posts = this.posts!.filter(post => post.id !== postId)
      },
      error => {
        console.error('Failed to delete post:', error)
      }
    )
  }

  viewPostDetail(postId: number): void {
    // Optionally pass the post details directly if available
    const post = this.posts!.find(p => p.id === postId)
    if (post) {
      this.router.navigate(['/post', postId], { state: { post } })
    }
  }
}
