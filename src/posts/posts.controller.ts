import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostEntity } from './entities/post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAllPost(): PostEntity[] {
    return this.postsService.findAllPost();
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto): PostEntity {
    return this.postsService.createPost(createPostDto);
  }

  @Delete(':id')
  deletePost(@Param('id') id: number): string {
    return this.postsService.deletePost(+id);
  }
}
