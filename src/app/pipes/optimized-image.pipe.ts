import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optimizedImage',
  standalone: true,
})
export class OptimizedImagePipe implements PipeTransform {
  /**
   * Transforms image path to use optimized format (WebP/AVIF) if supported
   * @param imagePath Original image path (e.g., '/assets/images/photo.jpg')
   * @param options Optional parameters for image optimization
   * @returns Optimized image path or fallback to original
   */
  transform(imagePath: string, options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'original';
  }): string {
    // Check if browser supports WebP (modern approach)
    const supportsWebP = this.checkWebPSupport();
    
    // Extract file extension and base path
    const extensionMatch = imagePath.match(/\.(jpg|jpeg|png|gif|svg|webp|avif)$/i);
    if (!extensionMatch) {
      return imagePath; // Return original if no extension found
    }
    
    const extension = extensionMatch[1].toLowerCase();
    const basePath = imagePath.replace(`.${extension}`, '');
    
    // If original is already WebP/AVIF, return as-is
    if (extension === 'webp' || extension === 'avif') {
      return imagePath;
    }
    
    // Use WebP if supported and requested format is not specified
    const preferredFormat = options?.format || (supportsWebP ? 'webp' : 'original');
    
    if (preferredFormat === 'original') {
      return imagePath;
    }
    
    // Construct optimized image path
    let optimizedPath = `${basePath}.${preferredFormat}`;
    
    // Add quality/size parameters if provided (for hypothetical image CDN)
    if (options?.width || options?.height || options?.quality) {
      const params = [];
      if (options.width) params.push(`w=${options.width}`);
      if (options.height) params.push(`h=${options.height}`);
      if (options.quality) params.push(`q=${options.quality}`);
      
      if (params.length > 0) {
        optimizedPath += `?${params.join('&')}`;
      }
    }
    
    return optimizedPath;
  }
  
  /**
   * Check if browser supports WebP format
   * Note: This is a simplified check. In production, use feature detection.
   */
  private checkWebPSupport(): boolean {
    // For SSR/static generation, assume modern browsers support WebP
    if (typeof window === 'undefined') {
      return true; // Assume support for prerendering
    }
    
    // Simple feature detection for WebP
    const canvas = document.createElement('canvas');
    if (canvas.getContext && canvas.getContext('2d')) {
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    
    return false;
  }
  
  /**
   * Generate srcset attribute for responsive images
   */
  generateSrcSet(basePath: string, sizes: number[], format?: 'webp' | 'avif' | 'original'): string {
    const supportsWebP = this.checkWebPSupport();
    const preferredFormat = format || (supportsWebP ? 'webp' : 'original');
    
    return sizes
      .map(size => {
        const imagePath = preferredFormat === 'original' 
          ? `${basePath}-${size}.jpg`
          : `${basePath}-${size}.${preferredFormat}`;
        return `${imagePath} ${size}w`;
      })
      .join(', ');
  }
}