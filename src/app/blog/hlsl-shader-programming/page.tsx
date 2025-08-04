import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CodeBlock from '@/components/CodeBlock'
import { Calendar, Clock, Tag, ArrowLeft, User } from 'lucide-react'
import Link from 'next/link'

export default function HLSLShaderProgrammingPage() {
  return (
    <>
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
              <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                HLSL
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              HLSL着色器编程技巧
            </h1>

            {/* Meta Info */}
            <div className="flex items-center space-x-6 text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>HGL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>2024年1月5日</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>8分钟阅读</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex items-center space-x-2">
              <Tag size={18} className="text-gray-400" />
              <div className="flex space-x-2">
                {['HLSL', '着色器', '光照'].map((tag) => (
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="prose max-w-none">
                <h2>HLSL着色器编程基础</h2>
                <p>
                  HLSL（High Level Shading Language）是微软为DirectX开发的着色器语言。
                  它允许开发者编写运行在GPU上的程序，实现各种视觉效果。本文将分享一些实用的HLSL编程技巧。
                </p>

                <h3>基础光照模型</h3>
                <p>让我们从经典的Phong光照模型开始：</p>

                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`// Phong光照模型
struct LightData {
    float3 position;
    float3 color;
    float3 ambient;
    float intensity;
};

struct MaterialData {
    float3 diffuse;
    float3 specular;
    float shininess;
};

float3 CalculatePhongLighting(float3 worldPos, float3 normal, float3 viewDir,
                             LightData light, MaterialData material) {
    // 环境光
    float3 ambient = light.ambient * material.diffuse;
    
    // 漫反射
    float3 lightDir = normalize(light.position - worldPos);
    float NdotL = max(0.0, dot(normal, lightDir));
    float3 diffuse = light.color * material.diffuse * NdotL * light.intensity;
    
    // 镜面反射
    float3 reflectDir = reflect(-lightDir, normal);
    float RdotV = max(0.0, dot(reflectDir, viewDir));
    float spec = pow(RdotV, material.shininess);
    float3 specular = light.color * material.specular * spec * light.intensity;
    
    return ambient + diffuse + specular;
}`}</code></pre>

                <h3>PBR材质系统</h3>
                <p>现代游戏更多使用基于物理的渲染（PBR）：</p>

                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`// PBR材质结构
struct PBRMaterial {
    float3 albedo;      // 基础颜色
    float metallic;     // 金属度
    float roughness;    // 粗糙度
    float3 normal;      // 法线
    float ao;           // 环境遮蔽
};

// 菲涅尔反射
float3 FresnelSchlick(float cosTheta, float3 F0) {
    return F0 + (1.0 - F0) * pow(1.0 - cosTheta, 5.0);
}

// 法线分布函数 (GGX/Trowbridge-Reitz)
float DistributionGGX(float3 N, float3 H, float roughness) {
    float a = roughness * roughness;
    float a2 = a * a;
    float NdotH = max(dot(N, H), 0.0);
    float NdotH2 = NdotH * NdotH;
    
    float num = a2;
    float denom = (NdotH2 * (a2 - 1.0) + 1.0);
    denom = 3.14159265 * denom * denom;
    
    return num / denom;
}`}</code></pre>

                <h3>阴影映射技术</h3>
                <p>阴影是增强场景真实感的重要技术：</p>

                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{`// 阴影映射顶点着色器
struct ShadowVS_INPUT {
    float3 Position : POSITION;
};

struct ShadowVS_OUTPUT {
    float4 Position : SV_POSITION;
    float4 LightSpacePos : TEXCOORD0;
};

cbuffer LightViewProjection : register(b0) {
    matrix LightViewMatrix;
    matrix LightProjectionMatrix;
};

ShadowVS_OUTPUT ShadowVS(ShadowVS_INPUT input) {
    ShadowVS_OUTPUT output;
    
    float4 worldPos = mul(float4(input.Position, 1.0), WorldMatrix);
    float4 lightViewPos = mul(worldPos, LightViewMatrix);
    output.Position = mul(lightViewPos, LightProjectionMatrix);
    output.LightSpacePos = output.Position;
    
    return output;
}`}</code></pre>

                <h3>性能优化技巧</h3>
                <p>在HLSL编程中，性能优化至关重要：</p>

                <h4>1. 减少分支语句</h4>
                <p>GPU对分支语句的处理效率较低，尽量使用数学函数替代条件判断。</p>

                <h4>2. 合理使用精度</h4>
                <p>根据需要选择合适的数据精度，避免不必要的高精度计算。</p>

                <h4>3. 纹理采样优化</h4>
                <p>合理安排纹理采样顺序，利用GPU的纹理缓存。</p>

                <h3>总结</h3>
                <p>
                  HLSL着色器编程是现代游戏开发的核心技能之一。通过掌握基础的光照模型、
                  PBR材质系统和阴影技术，我们可以创造出令人印象深刻的视觉效果。
                </p>
                <p>
                  在实际开发中，还需要不断学习新的技术和优化方法，
                  以适应不断发展的游戏图形技术需求。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-8 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div>
                <Link href="/blog/directx11-rendering-pipeline" className="text-primary-600 hover:text-primary-700 transition-colors">
                  ← 上一篇：DirectX 11渲染管线深度解析
                </Link>
              </div>
              <div>
                <Link href="/blog/physx-integration-guide" className="text-primary-600 hover:text-primary-700 transition-colors">
                  下一篇：PhysX物理引擎集成实战 →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}