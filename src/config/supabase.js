import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://snntnumkqxaskblgkvlu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNubnRudW1rcXhhc2tibGdrdmx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0NDg4MDQsImV4cCI6MjA0MDAyNDgwNH0.1rhDdHpkde1WMSF9OHtBNwHPoyZhZX48wH3p13svFkM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
