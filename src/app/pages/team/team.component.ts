import { Component } from '@angular/core';
import { TeamCardComponent, TeamMember } from '../../components/team-card/team-card.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [TeamCardComponent, CtaBannerComponent],
  template: `
    <section class="relative pt-32 pb-20 bg-dark overflow-hidden">
      <div class="absolute inset-0 opacity-20" style="background: linear-gradient(135deg, #C8A96A 0%, transparent 50%, #C8A96A 100%);"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <p class="font-sans text-sm text-primary uppercase tracking-[0.25em] mb-4" data-aos="fade-up">Our Team</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-heading text-white font-bold" data-aos="fade-up" data-aos-delay="100">Meet Our Experts</h1>
          <div class="w-16 h-0.5 bg-primary mt-6 mb-6" data-aos="fade-up" data-aos-delay="200"></div>
          <p class="text-white/70 text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">Talented professionals dedicated to making you look and feel your best.</p>
        </div>
      </div>
    </section>
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (member of teamMembers; track member.name) {
            <app-team-card [member]="member" />
          }
        </div>
      </div>
    </section>
    <app-cta-banner />
  `,
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    { image: '/assets/images/team/team-1.webp', name: 'Isabella Rossi', role: 'Master Stylist & Creative Director', bio: '15+ years of expertise in precision cutting and creative coloring.', socials: [{ icon: 'f', url: '#' }, { icon: 'i', url: '#' }] },
    { image: '/assets/images/team/team-2.webp', name: 'James Mitchell', role: 'Senior Colorist', bio: 'Specializing in balayage, ombre, and color correction.', socials: [{ icon: 'f', url: '#' }, { icon: 'i', url: '#' }] },
    { image: '/assets/images/team/team-3.webp', name: 'Sophie Laurent', role: 'Bridal & Editorial Stylist', bio: 'Paris-trained stylist with editorial and bridal expertise.', socials: [{ icon: 'f', url: '#' }, { icon: 'i', url: '#' }] },
    { image: '/assets/images/team/team-4.webp', name: 'David Park', role: 'Master Barber', bio: 'Expert in classic and contemporary men\'s grooming.', socials: [{ icon: 'f', url: '#' }, { icon: 'i', url: '#' }] },
    { image: '/assets/images/team/team-5.webp', name: 'Maria Garcia', role: 'Senior Stylist', bio: 'Specializing in textured hair and curly cuts.', socials: [{ icon: 'f', url: '#' }, { icon: 'i', url: '#' }] },
    { image: '/assets/images/team/team-6.webp', name: 'Alex Thompson', role: 'Color Specialist', bio: 'Expert in fashion colors and creative techniques.', socials: [{ icon: 'f', url: '#' }, { icon: 'i', url: '#' }] },
    { image: '/assets/images/team/team-7.webp', name: 'Olivia Chen', role: 'Esthetician', bio: 'Specializing in skincare and facial treatments.', socials: [{ icon: 'f', url: '#' }, { icon: 'i', url: '#' }] },
    { image: '/assets/images/team/team-8.webp', name: 'Ryan Brooks', role: 'Nail Artist', bio: 'Creative nail designs and premium manicures.', socials: [{ icon: 'f', url: '#' }, { icon: 'i', url: '#' }] },
  ];
}