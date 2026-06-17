import { Component, input } from '@angular/core';

export interface TeamMember {
  image: string;
  name: string;
  role: string;
  bio: string;
  socials: { icon: string; url: string }[];
}

@Component({
  selector: 'app-team-card',
  standalone: true,
  template: `
    <div class="group" data-aos="fade-up">
      <div class="relative overflow-hidden mb-4">
        <div class="aspect-[3/4] overflow-hidden">
          <img
            [src]="member().image"
            [alt]="member().name"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div class="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div class="flex gap-3">
            @for (social of member().socials; track social.icon) {
              <a [href]="social.url" class="w-10 h-10 bg-primary flex items-center justify-center text-white hover:bg-primary-600 transition-colors">
                <span class="text-lg">{{ social.icon }}</span>
              </a>
            }
          </div>
        </div>
      </div>
      <h3 class="font-serif text-lg text-dark">{{ member().name }}</h3>
      <p class="text-primary text-sm font-sans uppercase tracking-[0.15em] mt-1">{{ member().role }}</p>
      <p class="text-dark/60 text-sm mt-2 leading-relaxed">{{ member().bio }}</p>
    </div>
  `,
})
export class TeamCardComponent {
  member = input.required<TeamMember>();
}