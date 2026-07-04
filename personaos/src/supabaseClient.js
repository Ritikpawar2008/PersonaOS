import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hozbakuzgizssenpipqo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvemJha3V6Z2l6c3NlbnBpcHFvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzE4NzYwNSwiZXhwIjoyMDk4NzYzNjA1fQ.6Cgy0K6ziATmTy_RhIRM0cpxGeYwt1FBfpFtzh7C_kM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);