import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../services/meta.service';
import { environment } from '../../../environments/environment';

/**
 * Configurable privacy policy values.
 *
 * These read from `environment.business` where available (dev / local config) and
 * fall back to the defaults below so the page always renders valid content even
 * in production builds where the business object may be replaced by a slimmer
 * environment file.
 *
 * To change any business-specific value, update `src/environments/environment.ts`
 * or the defaults here.
 */
const DEFAULT_POLICY_CONFIG = {
  businessName: 'Hairbar Unisex Salon',
  email: 'hairbarsalon@gmail.com',
  phoneDisplay: '+91 82914 92821',
  phoneHref: '+918291492821',
  whatsappDisplay: '+91 78619 35860',
  whatsappHref: '917861935860',
  address:
    'Shop No-14, Harmony, Near Sai Baba Temple, Parivar Char Rasta, Waghodiya Road, Vadodara, Gujarat 390025',
  website: 'https://hairbar.in',
  lastUpdated: 'October 2026',
} as const;

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  private metaService = inject(MetaService);

  /** Contact / business values used across the policy (configurable). */
  config = (() => {
    const biz = (environment as any)?.business;
    return {
      businessName: biz?.name || DEFAULT_POLICY_CONFIG.businessName,
      // Contact details are set explicitly here for this policy page.
      email: DEFAULT_POLICY_CONFIG.email,
      phoneDisplay: DEFAULT_POLICY_CONFIG.phoneDisplay,
      phoneHref: DEFAULT_POLICY_CONFIG.phoneHref,
      whatsappDisplay: DEFAULT_POLICY_CONFIG.whatsappDisplay,
      whatsappHref: DEFAULT_POLICY_CONFIG.whatsappHref,
      address: biz?.address?.full || DEFAULT_POLICY_CONFIG.address,
      website: biz?.website || DEFAULT_POLICY_CONFIG.website,
      lastUpdated: DEFAULT_POLICY_CONFIG.lastUpdated,
    };
  })();

  constructor() {
    this.metaService.updateSeoData({
      title: `Privacy Policy | ${this.config.businessName}`,
      description: `Learn how ${this.config.businessName} collects, uses, and protects your personal information, including how we communicate via WhatsApp / Meta.`,
    });
  }
}