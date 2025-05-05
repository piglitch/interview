import { useEffect } from 'react'
import { useAppStore } from '../store/app.store'
import { supabase } from '../supabase/supabase'

export default function AuthInit({ children }: { children: React.ReactNode }) {
  const setSession = useAppStore((state) => state.setSession)

  useEffect(() => {
    // Get current session on app load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session?.user ?? null)
    })

    // Listen to auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session?.user ?? null)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [setSession])

  return children
}
