import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, Tag, ArrowLeft, User } from 'lucide-react'
import Link from 'next/link'

export default function PhysXIntegrationGuidePage() {
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
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                PhysX
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              PhysX物理引擎集成实战
            </h1>

            {/* Meta Info */}
            <div className="flex items-center space-x-6 text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>HGL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>2024年1月10日</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>12分钟阅读</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex items-center space-x-2">
              <Tag size={18} className="text-gray-400" />
              <div className="flex space-x-2">
                {['PhysX', '物理引擎', '碰撞检测'].map((tag) => (
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
                <h2>PhysX物理引擎简介</h2>
                <p>
                  PhysX是NVIDIA开发的实时物理引擎，广泛应用于游戏开发中。它提供了刚体动力学、
                  软体模拟、流体模拟、布料模拟等丰富的物理效果。本文将详细介绍如何在自研游戏引擎中集成PhysX。
                </p>

                <h3>环境配置</h3>
                <p>首先需要下载并配置PhysX SDK：</p>
                <ol>
                  <li>从NVIDIA官网下载PhysX SDK</li>
                  <li>解压到项目目录</li>
                  <li>配置Visual Studio项目设置</li>
                </ol>

                <pre><code>{`// 项目配置示例
// 包含目录
$(PhysXSDK)/Include
$(PhysXSDK)/Include/common
$(PhysXSDK)/Include/geometry
$(PhysXSDK)/Include/foundation

// 库目录
$(PhysXSDK)/Lib/$(Platform)/$(Configuration)

// 链接库
PhysX_64.lib
PhysXCommon_64.lib
PhysXFoundation_64.lib
PhysXExtensions_64.lib`}</code></pre>

                <h3>PhysX初始化</h3>
                <p>创建PhysX的基础组件：</p>

                <pre><code>{`#include <PxPhysicsAPI.h>

class PhysicsEngine {
private:
    physx::PxDefaultAllocator m_allocator;
    physx::PxDefaultErrorCallback m_errorCallback;
    physx::PxFoundation* m_foundation;
    physx::PxPhysics* m_physics;
    physx::PxDefaultCpuDispatcher* m_dispatcher;
    physx::PxScene* m_scene;
    physx::PxMaterial* m_material;

public:
    bool Initialize() {
        // 创建Foundation
        m_foundation = PxCreateFoundation(PX_PHYSICS_VERSION, 
                                        m_allocator, m_errorCallback);
        if (!m_foundation) {
            return false;
        }

        // 创建Physics对象
        m_physics = PxCreatePhysics(PX_PHYSICS_VERSION, *m_foundation, 
                                   physx::PxTolerancesScale(), true);
        if (!m_physics) {
            return false;
        }

        // 创建场景描述
        physx::PxSceneDesc sceneDesc(m_physics->getTolerancesScale());
        sceneDesc.gravity = physx::PxVec3(0.0f, -9.81f, 0.0f);
        
        m_dispatcher = physx::PxDefaultCpuDispatcherCreate(2);
        sceneDesc.cpuDispatcher = m_dispatcher;
        sceneDesc.filterShader = physx::PxDefaultSimulationFilterShader;

        // 创建场景
        m_scene = m_physics->createScene(sceneDesc);
        if (!m_scene) {
            return false;
        }

        // 创建默认材质
        m_material = m_physics->createMaterial(0.5f, 0.5f, 0.6f);

        return true;
    }

    void Cleanup() {
        if (m_scene) {
            m_scene->release();
            m_scene = nullptr;
        }
        if (m_dispatcher) {
            m_dispatcher->release();
            m_dispatcher = nullptr;
        }
        if (m_physics) {
            m_physics->release();
            m_physics = nullptr;
        }
        if (m_foundation) {
            m_foundation->release();
            m_foundation = nullptr;
        }
    }
};`}</code></pre>

                <h3>创建刚体</h3>
                <p>PhysX中的刚体分为静态刚体和动态刚体：</p>

                <pre><code>{`// 创建静态刚体（地面）
physx::PxRigidStatic* CreateStaticBox(const physx::PxVec3& position, 
                                      const physx::PxVec3& dimensions) {
    physx::PxTransform transform(position);
    physx::PxRigidStatic* staticActor = m_physics->createRigidStatic(transform);
    
    physx::PxShape* shape = physx::PxRigidActorExt::createExclusiveShape(
        *staticActor, 
        physx::PxBoxGeometry(dimensions), 
        *m_material
    );
    
    m_scene->addActor(*staticActor);
    return staticActor;
}

// 创建动态刚体（可移动物体）
physx::PxRigidDynamic* CreateDynamicBox(const physx::PxVec3& position, 
                                       const physx::PxVec3& dimensions, 
                                       float density = 1.0f) {
    physx::PxTransform transform(position);
    physx::PxRigidDynamic* dynamicActor = m_physics->createRigidDynamic(transform);
    
    physx::PxShape* shape = physx::PxRigidActorExt::createExclusiveShape(
        *dynamicActor, 
        physx::PxBoxGeometry(dimensions), 
        *m_material
    );
    
    // 设置质量属性
    physx::PxRigidBodyExt::updateMassAndInertia(*dynamicActor, density);
    
    m_scene->addActor(*dynamicActor);
    return dynamicActor;
}

// 创建球体
physx::PxRigidDynamic* CreateDynamicSphere(const physx::PxVec3& position, 
                                          float radius, 
                                          float density = 1.0f) {
    physx::PxTransform transform(position);
    physx::PxRigidDynamic* dynamicActor = m_physics->createRigidDynamic(transform);
    
    physx::PxShape* shape = physx::PxRigidActorExt::createExclusiveShape(
        *dynamicActor, 
        physx::PxSphereGeometry(radius), 
        *m_material
    );
    
    physx::PxRigidBodyExt::updateMassAndInertia(*dynamicActor, density);
    
    m_scene->addActor(*dynamicActor);
    return dynamicActor;
}`}</code></pre>

                <h3>物理模拟更新</h3>
                <p>在游戏主循环中更新物理模拟：</p>

                <pre><code>{`class PhysicsEngine {
private:
    float m_accumulator = 0.0f;
    float m_stepSize = 1.0f / 60.0f;  // 60 FPS

public:
    void Update(float deltaTime) {
        m_accumulator += deltaTime;
        
        // 固定时间步长更新
        while (m_accumulator >= m_stepSize) {
            m_scene->simulate(m_stepSize);
            m_scene->fetchResults(true);
            m_accumulator -= m_stepSize;
        }
    }
    
    // 获取刚体变换矩阵
    DirectX::XMMATRIX GetActorTransform(physx::PxRigidActor* actor) {
        physx::PxTransform transform = actor->getGlobalPose();
        
        // 转换为DirectX矩阵
        DirectX::XMVECTOR position = DirectX::XMVectorSet(
            transform.p.x, transform.p.y, transform.p.z, 1.0f);
        DirectX::XMVECTOR rotation = DirectX::XMVectorSet(
            transform.q.x, transform.q.y, transform.q.z, transform.q.w);
        
        DirectX::XMMATRIX translationMatrix = DirectX::XMMatrixTranslationFromVector(position);
        DirectX::XMMATRIX rotationMatrix = DirectX::XMMatrixRotationQuaternion(rotation);
        
        return rotationMatrix * translationMatrix;
    }
};`}</code></pre>

                <h3>碰撞检测</h3>
                <p>PhysX提供了强大的碰撞检测功能：</p>

                <pre><code>{`// 碰撞回调类
class CollisionCallback : public physx::PxSimulationEventCallback {
public:
    void onConstraintBreak(physx::PxConstraintInfo* constraints, physx::PxU32 count) override {}
    void onWake(physx::PxActor** actors, physx::PxU32 count) override {}
    void onSleep(physx::PxActor** actors, physx::PxU32 count) override {}
    void onTrigger(physx::PxTriggerPair* pairs, physx::PxU32 count) override {}
    void onAdvance(const physx::PxRigidBody*const* bodyBuffer, const physx::PxTransform* poseBuffer, const physx::PxU32 count) override {}
    
    void onContact(const physx::PxContactPairHeader& pairHeader, 
                   const physx::PxContactPair* pairs, 
                   physx::PxU32 nbPairs) override {
        for (physx::PxU32 i = 0; i < nbPairs; i++) {
            const physx::PxContactPair& cp = pairs[i];
            
            if (cp.events & physx::PxPairFlag::eNOTIFY_TOUCH_FOUND) {
                // 碰撞开始
                OnCollisionEnter(pairHeader.actors[0], pairHeader.actors[1]);
            }
            
            if (cp.events & physx::PxPairFlag::eNOTIFY_TOUCH_LOST) {
                // 碰撞结束
                OnCollisionExit(pairHeader.actors[0], pairHeader.actors[1]);
            }
        }
    }
    
private:
    void OnCollisionEnter(physx::PxRigidActor* actor1, physx::PxRigidActor* actor2) {
        // 处理碰撞开始事件
        std::cout << "Collision Enter!" << std::endl;
    }
    
    void OnCollisionExit(physx::PxRigidActor* actor1, physx::PxRigidActor* actor2) {
        // 处理碰撞结束事件
        std::cout << "Collision Exit!" << std::endl;
    }
};

// 在场景创建时设置回调
CollisionCallback* collisionCallback = new CollisionCallback();
m_scene->setSimulationEventCallback(collisionCallback);`}</code></pre>

                <h3>射线检测</h3>
                <p>射线检测在游戏中非常有用，比如鼠标拾取、武器射击等：</p>

                <pre><code>{`// 射线检测
bool Raycast(const physx::PxVec3& origin, 
             const physx::PxVec3& direction, 
             float maxDistance,
             physx::PxRaycastHit& hit) {
    physx::PxRaycastBuffer hitBuffer;
    
    bool hasHit = m_scene->raycast(origin, direction, maxDistance, hitBuffer);
    
    if (hasHit) {
        hit = hitBuffer.block;
        return true;
    }
    
    return false;
}

// 使用示例
physx::PxVec3 rayOrigin(0, 10, 0);
physx::PxVec3 rayDirection(0, -1, 0);  // 向下
physx::PxRaycastHit hit;

if (Raycast(rayOrigin, rayDirection, 20.0f, hit)) {
    std::cout << "Hit position: " << hit.position.x << ", " 
              << hit.position.y << ", " << hit.position.z << std::endl;
    std::cout << "Hit distance: " << hit.distance << std::endl;
}`}</code></pre>

                <h3>性能优化建议</h3>
                <p>在使用PhysX时，需要注意以下性能优化点：</p>

                <h4>1. 合理设置物理更新频率</h4>
                <p>物理模拟不需要与渲染频率相同，通常60Hz就足够了。</p>

                <h4>2. 使用简化的碰撞形状</h4>
                <p>尽量使用基本几何形状（盒子、球体、胶囊）而不是复杂的网格。</p>

                <h4>3. 合理管理活跃对象</h4>
                <p>让不需要模拟的对象进入睡眠状态，减少计算负担。</p>

                <pre><code>{`// 设置睡眠阈值
dynamicActor->setSleepThreshold(0.5f);
dynamicActor->setStabilizationThreshold(0.1f);

// 手动让对象睡眠
dynamicActor->putToSleep();

// 唤醒对象
dynamicActor->wakeUp();`}</code></pre>

                <h3>与渲染系统的集成</h3>
                <p>物理引擎需要与渲染系统紧密配合：</p>

                <pre><code>{`class GameObject {
private:
    physx::PxRigidActor* m_physicsActor;
    // 渲染相关数据
    Mesh* m_mesh;
    Material* m_material;
    
public:
    void Update() {
        if (m_physicsActor) {
            // 从物理引擎获取变换矩阵
            DirectX::XMMATRIX worldMatrix = GetPhysicsTransform();
            
            // 更新渲染变换
            UpdateRenderTransform(worldMatrix);
        }
    }
    
    void Render(ID3D11DeviceContext* context) {
        // 使用更新后的变换矩阵进行渲染
        // ...
    }
};`}</code></pre>

                <h3>总结</h3>
                <p>
                  PhysX为游戏开发提供了强大的物理模拟能力。通过合理的集成和优化，
                  可以为游戏带来逼真的物理效果。在实际项目中，还需要考虑多线程、
                  内存管理、调试工具等更多方面的问题。
                </p>
                <p>
                  掌握PhysX的使用不仅能提升游戏的真实感，也是现代游戏引擎开发的必备技能。
                  建议在学习过程中多做实验，理解各种参数对物理效果的影响。
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
                <Link href="/blog/hlsl-shader-programming" className="text-primary-600 hover:text-primary-700 transition-colors">
                  ← 上一篇：HLSL着色器编程技巧
                </Link>
              </div>
              <div>
                <Link href="/blog/directx11-rendering-pipeline" className="text-primary-600 hover:text-primary-700 transition-colors">
                  下一篇：DirectX 11渲染管线深度解析 →
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