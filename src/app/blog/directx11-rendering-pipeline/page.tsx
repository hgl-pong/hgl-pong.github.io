import ArticleLayout from '@/components/ArticleLayout'
import CodeBlock from '@/components/CodeBlock'

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
    <ArticleLayout
      title="DirectX 11渲染管线深度解析"
      date="2024年1月15日"
      readTime="10分钟阅读"
      category="DirectX"
      tags={['DirectX 11', '渲染管线', 'HLSL']}
      headings={headings}
      prevArticle={{ title: 'PhysX物理引擎集成实战', href: '/blog/physx-integration-guide' }}
      nextArticle={{ title: 'HLSL着色器编程技巧', href: '/blog/hlsl-shader-programming' }}
    >
      <div className="prose max-w-none">
        <h2 id="overview">DirectX 11渲染管线概述</h2>
        <p>
          DirectX 11的渲染管线是现代图形编程的核心，它定义了从3D几何数据到最终像素输出的完整流程。
          理解渲染管线的每个阶段对于开发高性能的游戏引擎至关重要。
        </p>

        <h3 id="stages">渲染管线的主要阶段</h3>
        <p>DirectX 11渲染管线包含以下主要阶段：</p>
        <ul>
          <li><strong>输入装配器 (Input Assembler)</strong> - 处理顶点数据和索引</li>
          <li><strong>顶点着色器 (Vertex Shader)</strong> - 变换顶点位置和属性</li>
          <li><strong>曲面细分着色器 (Tessellation Shaders)</strong> - 可选的几何细分</li>
          <li><strong>几何着色器 (Geometry Shader)</strong> - 可选的几何处理</li>
          <li><strong>光栅化器 (Rasterizer)</strong> - 将几何图形转换为像素</li>
          <li><strong>像素着色器 (Pixel Shader)</strong> - 计算最终像素颜色</li>
          <li><strong>输出合并器 (Output Merger)</strong> - 处理深度测试和混合</li>
        </ul>

        <h3 id="input-assembler">输入装配器阶段</h3>
        <p>
          输入装配器负责从内存中读取顶点数据，并将其组装成图元（如三角形、线段等）。
          这个阶段的配置直接影响渲染性能。
        </p>

        <CodeBlock
          language="cpp"
          code={`// 设置顶点缓冲区
UINT stride = sizeof(Vertex);
UINT offset = 0;
deviceContext->IASetVertexBuffers(0, 1, &vertexBuffer, &stride, &offset);

// 设置索引缓冲区
deviceContext->IASetIndexBuffer(indexBuffer, DXGI_FORMAT_R32_UINT, 0);

// 设置图元拓扑
deviceContext->IASetPrimitiveTopology(D3D11_PRIMITIVE_TOPOLOGY_TRIANGLELIST);`}
        />

        <h3 id="vertex-shader">顶点着色器阶段</h3>
        <p>
          顶点着色器是可编程管线阶段，负责变换顶点位置、计算光照和纹理坐标。
          每个顶点都会执行一次顶点着色器程序。
        </p>

        <CodeBlock
          language="hlsl"
          code={`// 顶点着色器示例
cbuffer MatrixBuffer : register(b0)
{
    matrix worldMatrix;
    matrix viewMatrix;
    matrix projectionMatrix;
};

struct VertexInput
{
    float4 position : POSITION;
    float3 normal : NORMAL;
    float2 texCoord : TEXCOORD0;
};

struct VertexOutput
{
    float4 position : SV_POSITION;
    float3 worldPos : POSITION;
    float3 normal : NORMAL;
    float2 texCoord : TEXCOORD0;
};

VertexOutput main(VertexInput input)
{
    VertexOutput output;
    
    // 变换顶点位置
    float4 worldPos = mul(input.position, worldMatrix);
    float4 viewPos = mul(worldPos, viewMatrix);
    output.position = mul(viewPos, projectionMatrix);
    
    // 传递世界坐标和法线
    output.worldPos = worldPos.xyz;
    output.normal = mul(input.normal, (float3x3)worldMatrix);
    output.texCoord = input.texCoord;
    
    return output;
}`}
        />

        <h3 id="pixel-shader">像素着色器阶段</h3>
        <p>
          像素着色器计算每个像素的最终颜色。这是实现各种视觉效果的关键阶段，
          包括光照、纹理采样、材质计算等。
        </p>

        <CodeBlock
          language="hlsl"
          code={`// 像素着色器示例
Texture2D diffuseTexture : register(t0);
SamplerState textureSampler : register(s0);

cbuffer LightBuffer : register(b0)
{
    float3 lightDirection;
    float lightIntensity;
    float4 lightColor;
};

struct PixelInput
{
    float4 position : SV_POSITION;
    float3 worldPos : POSITION;
    float3 normal : NORMAL;
    float2 texCoord : TEXCOORD0;
};

float4 main(PixelInput input) : SV_TARGET
{
    // 采样漫反射纹理
    float4 textureColor = diffuseTexture.Sample(textureSampler, input.texCoord);
    
    // 计算光照
    float3 normalizedNormal = normalize(input.normal);
    float lightFactor = max(dot(normalizedNormal, -lightDirection), 0.0f);
    
    // 计算最终颜色
    float4 finalColor = textureColor * lightColor * lightFactor * lightIntensity;
    finalColor.a = textureColor.a;
    
    return finalColor;
}`}
        />

        <h3 id="optimization">性能优化技巧</h3>
        <p>优化DirectX 11渲染性能的关键技巧：</p>
        <ul>
          <li><strong>批处理</strong> - 减少Draw Call数量</li>
          <li><strong>实例化渲染</strong> - 高效渲染大量相似对象</li>
          <li><strong>纹理图集</strong> - 减少纹理切换开销</li>
          <li><strong>LOD系统</strong> - 根据距离调整细节级别</li>
          <li><strong>视锥剔除</strong> - 避免渲染不可见对象</li>
        </ul>

        <h3 id="summary">总结</h3>
        <p>
          DirectX 11渲染管线为现代游戏开发提供了强大而灵活的图形渲染能力。
          深入理解每个阶段的工作原理和优化方法，是开发高性能游戏引擎的基础。
          通过合理的设计和优化，可以充分发挥现代GPU的计算能力。
        </p>
      </div>
    </ArticleLayout>
  )
}
