// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vfkjzxvussxdfkdwvckr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvbnpkb3VudWpiemd2a2Fuem5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY0ODIyNTIsImV4cCI6MjA4MjA1ODI1Mn0.Z0-56x2BVGaApXtnd6mOLvbTUt5Fxn23zg2DQo3nWTQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  city: string;
  phone: string;
  subscription_plan?: string;
  description?: string;
  created_at?: string;
}
