import { Injectable } from '@nestjs/common';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  findAllPost(): Post[] {
    return this.posts;
  }

  createPost(createPostDto: CreatePostDto): Post {
    /*refactoring 전 소스코드
    const newPost = new Post();
    newPost.title = CreatePostDto.title;
    newPost.name = CreatePostDto.name;
    newPost.text = CreatePostDto.text;
    newPost.createDt = new Date();
    */

    /* refactoring */
    const newPost: Post = {
      id: this.posts.length + 1,
      ...createPostDto,
      createDt: new Date().toISOString(),
    };
    /*=============*/

    this.posts.push(newPost);
    return newPost;
  }

  deletePost(id: number): string {
    const initialPostsLength = this.posts.length;
    this.posts = this.posts.filter((post) => post.id !== id);

    if (this.posts.length !== initialPostsLength) {
      return `id가 ${id}인 게시글이 삭제되었습니다.`;
    }

    return '삭제할 게시글이 없습니다.';
  }
}
