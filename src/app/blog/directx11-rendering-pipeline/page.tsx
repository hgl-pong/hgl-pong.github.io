import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ReadingProgress from '@/components/ReadingProgress'
import BackToTop from '@/components/BackToTop'
import TableOfContents from '@/components/TableOfContents'
import { Calendar, Clock, Tag, ArrowLeft, User } from 'lucide-react'
import Link from 'next/link'

export default function DirectX11RenderingPipelinePage() {
  const headings = [
    { id: 'overview', title: 'DirectX 11渲染管线概述', level: 2 },
    { id: 'stages', title: '渲染管线的主要阶段', level: 3 },
    { id: 'input-assembler', title: '输入装配器阶段', level: 3 },
    { id: 'vertex-shader', title: '顶点着色器阶段', level: 3 },
    { id: 'pixel-shader', title: '像素着色器阶段', level: 3 },
    { id: 'optimization', title: '性能优化技巧', level: 3 },
    { id: 'summary', title: '总结', level: 3 }
  ]

  return (
    <>
      <ReadingProgress />
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Article Header */}
        <section className="bg-white border-b border-gray-200 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="mb-8">
              <Link href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
                <ArrowLeft size={20} className="mr-2" />
                返回博客列表
              </Link>
            </div>

            {/* Category */}
            <div className="mb-4">
              <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                DirectX
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              DirectX 11渲染管线深度解析
            </h1>

            {/* Meta Info */}
            <div className="flex items-center space-x-6 text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>HGL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>2024年1月15日</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>10分钟阅读</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex items-center space-x-2">
              <Tag size={18} className="text-gray-400" />
              <div className="flex space-x-2">
                {['DirectX 11', '渲染管线', 'HLSL'].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Main Content */}
              <div className="flex-1 max-w-4xl">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                  <div className="prose max-w-none">
                    <h2 id="overview">DirectX 11渲染管线概述</h2>
                    <p>
                      DirectX 11的渲染管线是现代图形编程的核心，它定义了从3D几何数据到最终像素输出的完整流程。
                      理解渲染管线的每个阶段对于开发高性能的游戏引擎至关重要。
                    </p>

                    <h3 id="stages">渲染管线的主要阶段</h3>
                    <p>DirectX 11渲染管线包含以下主要阶段：</p>
                    <ol>
                      <li><strong>输入装配器 (Input Assembler)</strong> - 读取顶点和索引数据</li>
                      <li><strong>顶点着色器 (Vertex Shader)</strong> - 处理每个顶点</li>
                      <li><strong>曲面细分 (Tessellation)</strong> - 可选的几何细分阶段</li>
                      <li><strong>几何着色器 (Geometry Shader)</strong> - 可选的几何处理阶段</li>
                      <li><strong>光栅化 (Rasterization)</strong> - 将几何图元转换为像素</li>
                      <li><strong>像素着色器 (Pixel Shader)</strong> - 计算每个像素的颜色</li>
                      <li><strong>输出合并 (Output Merger)</strong> - 最终的像素输出和混合</li>
                    </ol>

                    <h3 id="input-assembler">输入装配器阶段</h3>
                    <p>输入装配器负责从内存中读取顶点数据，并将其组装成图元（点、线、三角形）。</p>
                    
                    <pre><code>{`// 创建顶点缓冲区
struct Vertex {
    DirectX::XMFLOAT3 position;
    DirectX::XMFLOAT3 normal;
    DirectX::XMFLOAT2 texCoord;
};

// 顶点数据
Vertex vertices[] = {
    { {-1.0f, -1.0f, 0.0f}, {0.0f, 0.0f, -1.0f}, {0.0f, 1.0f} },
    { { 1.0f, -1.0f, 0.0f}, {0.0f, 0.0f, -1.0f}, {1.0f, 1.0f} },
    { { 0.0f,  1.0f, 0.0f}, {0.0f, 0.0f, -1.0f}, {0.5f, 0.0f} }
};

// 创建缓冲区描述
D3D11_BUFFER_DESC bufferDesc = {};
bufferDesc.Usage = D3D11_USAGE_DEFAULT;
bufferDesc.ByteWidth = sizeof(vertices);
bufferDesc.BindFlags = D3D11_BIND_VERTEX_BUFFER;

// 初始化数据
D3D11_SUBRESOURCE_DATA initData = {};
initData.pSysMem = vertices;

// 创建顶点缓冲区
ID3D11Buffer* vertexBuffer;
device->CreateBuffer(&bufferDesc, &initData, &vertexBuffer);`}</code></pre>

                    <h3 id="vertex-shader">顶点着色器阶段</h3>
                    <p>顶点着色器对每个顶点执行变换操作，通常包括模型-视图-投影变换。</p>

                    <pre><code>{`// HLSL顶点着色器示例
cbuffer ConstantBuffer : register(b0) {
    matrix World;
    matrix View;
    matrix Projection;
};

struct VS_INPUT {
    float3 Position : POSITION;
    float3 Normal : NORMAL;
    float2 TexCoord : TEXCOORD0;
};

struct VS_OUTPUT {
    float4 Position : SV_POSITION;
    float3 WorldPos : POSITION;
    float3 Normal : NORMAL;
    float2 TexCoord : TEXCOORD0;
};

VS_OUTPUT VS(VS_INPUT input) {
    VS_OUTPUT output;
    
    // 世界变换
    float4 worldPos = mul(float4(input.Position, 1.0f), World);
    output.WorldPos = worldPos.xyz;
    
    // 视图变换
    float4 viewPos = mul(worldPos, View);
    
    // 投影变换
    output.Position = mul(viewPos, Projection);
    
    // 变换法线
    output.Normal = mul(input.Normal, (float3x3)World);
    
    // 传递纹理坐标
    output.TexCoord = input.TexCoord;
    
    return output;
}`}</code></pre>

                    <h3 id="pixel-shader">像素着色器阶段</h3>
                    <p>像素着色器计算每个像素的最终颜色，通常包括光照计算和纹理采样。</p>

                    <pre><code>{`// HLSL像素着色器示例
Texture2D DiffuseTexture : register(t0);
SamplerState Sampler : register(s0);

cbuffer LightBuffer : register(b1) {
    float3 LightDirection;
    float3 LightColor;
    float3 AmbientColor;
};

struct PS_INPUT {
    float4 Position : SV_POSITION;
    float3 WorldPos : POSITION;
    float3 Normal : NORMAL;
    float2 TexCoord : TEXCOORD0;
};

float4 PS(PS_INPUT input) : SV_TARGET {
    // 采样漫反射纹理
    float4 textureColor = DiffuseTexture.Sample(Sampler, input.TexCoord);
    
    // 标准化法线
    float3 normal = normalize(input.Normal);
    
    // 计算漫反射光照
    float NdotL = max(0.0f, dot(normal, -LightDirection));
    float3 diffuse = LightColor * NdotL;
    
    // 组合环境光和漫反射光
    float3 finalColor = (AmbientColor + diffuse) * textureColor.rgb;
    
    return float4(finalColor, textureColor.a);
}`}</code></pre>

                    <h3 id="optimization">性能优化技巧</h3>
                    <p>在DirectX 11渲染管线中，有几个关键的性能优化点：</p>

                    <h4>1. 减少状态切换</h4>
                    <p>频繁的状态切换会导致GPU流水线停顿，应该尽量批量处理相同状态的渲染调用。</p>

                    <h4>2. 使用常量缓冲区</h4>
                    <p>合理组织常量缓冲区的数据布局，避免频繁更新。</p>

                    <h4>3. 实例化渲染</h4>
                    <p>对于大量相似对象，使用实例化渲染可以显著提高性能。</p>

                    <h3 id="summary">总结</h3>
                    <p>
                      DirectX 11渲染管线为开发者提供了强大而灵活的图形渲染能力。通过深入理解每个阶段的工作原理，
                      我们可以编写出高效的渲染代码，创造出令人印象深刻的视觉效果。
                    </p>
                    <p>
                      在实际的游戏引擎开发中，还需要考虑更多的优化技术，如延迟渲染、阴影映射、后处理效果等。
                      这些高级技术都建立在对基础渲染管线的深入理解之上。
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Sidebar with Table of Contents */}
              <div className="hidden lg:block w-80">
                <TableOfContents headings={headings} />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div>
                <Link href="/blog/physx-integration-guide" className="text-primary-600 hover:text-primary-700 transition-colors">
                  ← 上一篇：PhysX物理引擎集成实战
                </Link>
              </div>
              <div>
                <Link href="/blog/hlsl-shader-programming" className="text-primary-600 hover:text-primary-700 transition-colors">
                  下一篇：HLSL着色器编程技巧 →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}