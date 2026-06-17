import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BlogPost {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="group" data-aos="fade-up">
      <div class="relative overflow-hidden mb-5">
        <div class="aspect-[16/10] overflow-hidden">
          <img
            [src]="post().image"
            [alt]="post().title"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div class="absolute top-4 left-4">
          <span class="bg-primary text-white text-xs font-sans uppercase tracking-[0.15em] px-3 py-1">{{ post().category }}</span>
        </div>
      </div>
      <div class="px-1">
        <span class="text-xs text-dark/50 font-sans">{{ post().date }}</span>
        <h3 class="font-serif text-lg text-dark mt-2 mb-3 group-hover:text-primary transition-colors">{{ post().title }}</h3>
        <p class="text-dark/60 text-sm leading-relaxed mb-4">{{ post().excerpt }}</p>
        <a [routerLink]="'/blog/' + post().slug" class="inline-flex items-center gap-2 text-primary text-sm font-sans uppercase tracking-[0.15em] group/link">
          Read More
          <svg class="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  `,
})
export class BlogCardComponent {
  post = input.required<BlogPost>();
}