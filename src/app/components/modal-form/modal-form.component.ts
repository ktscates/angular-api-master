import { CommonModule } from '@angular/common'
import { Component, Input, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Post } from '../../model/model'

@Component({
  selector: 'app-modal-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-form.component.html',
  styleUrl: './modal-form.component.css',
})
export class ModalFormComponent {
  @Input() isModalOpen = false
  @Input() isEditMode = false
  @Input() post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  }
  @Output() closeModal = new EventEmitter<void>()
  @Output() savePost = new EventEmitter<Post>()

  close(): void {
    this.closeModal.emit()
  }

  submit(): void {
    this.savePost.emit(this.post)
  }
}
