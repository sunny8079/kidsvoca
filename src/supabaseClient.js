import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Supabase 자격 증명이 설정되지 않았을 때 앱이 뻗지 않도록 분기 처리
export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

if (!supabase) {
  console.warn("Supabase 환경 변수가 제공되지 않았습니다. 현재 오프라인 로컬 목데이터로 동작 중입니다.");
}
