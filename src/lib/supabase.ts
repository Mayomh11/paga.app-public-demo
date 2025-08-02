// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check your .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export interface Database {
  public: {
    Tables: {
      usernames: {
        Row: {
          id: string;
          username: string;
          wallet_address: string;
          display_name: string | null;
          avatar_url: string | null;
          is_verified: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          username: string;
          wallet_address: string;
          display_name?: string | null;
          avatar_url?: string | null;
          is_verified?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string;
          wallet_address?: string;
          display_name?: string | null;
          avatar_url?: string | null;
          is_verified?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      transactions: {
        Row: {
          id: string;
          from_address: string;
          to_address: string;
          from_username: string | null;
          to_username: string | null;
          amount: number;
          signature: string;
          status: 'pending' | 'confirmed' | 'failed';
          created_at: string;
        };
        Insert: {
          id?: string;
          from_address: string;
          to_address: string;
          from_username?: string | null;
          to_username?: string | null;
          amount: number;
          signature: string;
          status?: 'pending' | 'confirmed' | 'failed';
          created_at?: string;
        };
        Update: {
          id?: string;
          from_address?: string;
          to_address?: string;
          from_username?: string | null;
          to_username?: string | null;
          amount?: number;
          signature?: string;
          status?: 'pending' | 'confirmed' | 'failed';
          created_at?: string;
        };
      };
      beta_waitlist: {
        Row: {
          id: string;
          email: string;
          source: 'demo' | 'landing' | 'referral';
          user_agent: string | null;
          ip_address: string | null;
          referrer: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          source?: 'demo' | 'landing' | 'referral';
          user_agent?: string | null;
          ip_address?: string | null;
          referrer?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          source?: 'demo' | 'landing' | 'referral';
          user_agent?: string | null;
          ip_address?: string | null;
          referrer?: string | null;
          created_at?: string;
        };
      };
    };
  };
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];
export type TablesInsert<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert'];
export type TablesUpdate<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update'];

// Beta Waitlist Functions
export const addToBetaWaitlist = async (email: string) => {
  try {
    const { data, error } = await supabase
      .from('beta_waitlist')
      .insert({
        email: email.toLowerCase().trim(),
        source: 'demo',
        user_agent: navigator.userAgent,
        referrer: document.referrer || null
      })
      .select();

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        throw new Error('This email is already on the waitlist!');
      }
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error adding to beta waitlist:', error);
    throw error;
  }
};

export const getBetaWaitlistCount = async () => {
  try {
    const { count, error } = await supabase
      .from('beta_waitlist')
      .select('*', { count: 'exact', head: true });

    if (error) throw error;
    return count || 0;
  } catch (error) {
    console.error('Error getting waitlist count:', error);
    return 0;
  }
};