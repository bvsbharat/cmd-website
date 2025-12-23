import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  isNew?: boolean;
}

export interface DemoState {
  input: string;
  output: string;
  isProcessing: boolean;
  error: string | null;
}
