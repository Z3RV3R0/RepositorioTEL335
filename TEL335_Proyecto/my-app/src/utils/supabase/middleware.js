import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function adminAuthMiddleware(request) {
    // Creamos una respuesta inicial
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                get(name) {
                    return request.cookies.get(name)?.value
                },
                set(name, value, options) {
                    request.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                },
                remove(name, options) {
                    request.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                },
            },
        }
    )

    try {
        // Obtener el usuario autenticado
        const { user } = await supabase.auth.api.getUserByCookie(request)

        // Verificar si el usuario está autenticado
        if (!user) {
            // Si el usuario no está autenticado, redirigir al login
            return NextResponse.redirect('/login')
        }
    } catch (error) {
        // Manejar cualquier error que pueda ocurrir durante la autenticación
        console.error('Error de autenticación:', error.message)
        return NextResponse.error(error)
    }

    // Devolver la respuesta original
    return response
}