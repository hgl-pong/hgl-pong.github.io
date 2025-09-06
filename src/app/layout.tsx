import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HGL博客 - DirectX与PhysX游戏引擎开发',
  description: '专注DirectX 11图形编程、PhysX物理引擎和C++游戏引擎开发技术分享，记录底层引擎开发心得',
  keywords: '游戏引擎, DirectX 11, PhysX, C++, HLSL, 图形编程, 物理引擎, 游戏开发',
  authors: [{ name: 'HGL' }],
  metadataBase: new URL('https://hgl-pong.github.io'),
  openGraph: {
    title: 'HGL博客 - DirectX与PhysX游戏引擎开发',
    description: '专注DirectX 11图形编程、PhysX物理引擎和C++游戏引擎开发技术分享，记录底层引擎开发心得',
    type: 'website',
    url: 'https://hgl-pong.github.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}