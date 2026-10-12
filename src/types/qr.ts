export type DotType = 'dots' | 'rounded' | 'classy' | 'classy-rounded' | 'square' | 'extra-rounded';
export type CornerSquareType = 'dot' | 'square' | 'extra-rounded';
export type CornerDotType = 'dot' | 'square';
export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
export type GradientType = 'none' | 'linear' | 'radial';
export type LogoBadgeShape = 'circle' | 'square' | 'none';
export type FrameStyle = 'none' | 'scan-me-bottom' | 'scan-me-top' | 'card-border' | 'badge-ribbon' | 'polaroid';

export type PresetId = 
  | 'violet-blue'
  | 'modern-particle'
  | 'classic-pixel'
  | 'rounded-dot'
  | 'minimal-bw'
  | 'branded-corporate'
  | 'neon-cyber';

export interface QRConfig {
  url: string;
  // Dots styling
  dotType: DotType;
  colorType: GradientType;
  primaryColor: string;
  secondaryColor: string;
  gradientAngle: number;
  backgroundColor: string;
  
  // Corners styling
  cornerSquareType: CornerSquareType;
  cornerSquareColor: string;
  cornerDotType: CornerDotType;
  cornerDotColor: string;
  
  // Logo settings
  logoUrl: string | null;
  logoFileName: string | null;
  logoSize: number; // 0.15 to 0.35 (fraction of QR size)
  logoMargin: number; // 0 to 10
  logoBadgeShape: LogoBadgeShape;
  logoBadgeColor: string;
  
  // Frame & Caption
  frameStyle: FrameStyle;
  captionText: string;
  frameColor: string;
  frameTextColor: string;
  
  // Advanced & Reliability
  errorCorrectionLevel: ErrorCorrectionLevel;
  margin: number; // QR quiet zone
  size: number; // Rendering size in px
  presetId?: PresetId;
}

export interface ScanVerificationResult {
  isChecking: boolean;
  isValid: boolean | null;
  decodedData: string | null;
  message: string;
  confidence: 'high' | 'medium' | 'low' | 'failed' | 'idle';
  testedAt?: number;
}

export interface PresetOption {
  id: PresetId;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  config: Partial<QRConfig>;
}
