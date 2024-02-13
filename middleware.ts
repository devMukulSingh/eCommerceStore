import { NextRequest, NextResponse } from 'next/server'

export function middleware(
  req: NextRequest,
  { params }: { params: { storeId: string } }
) {
  const { storeId } = params
  if (storeId) {
    return NextResponse.redirect(new URL(`/${storeId}`, req.nextUrl))
  }
}
export const config = {
  matcher: [
    '/'
  ]
}
