'use client'

import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadSlim } from 'tsparticles-slim'
import type { Container, Engine, MoveDirection, OutMode } from 'tsparticles-engine'

interface ParticleBackgroundProps {
  className?: string
  theme?: 'cyberpunk' | 'matrix' | 'neon'
}

export default function ParticleBackground({
  className = '',
  theme = 'cyberpunk'
}: ParticleBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // console.log(container)
  }, [])

  const getParticleConfig = () => {
    const baseConfig = {
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: theme === 'cyberpunk' ? '#ffffff' : theme === 'matrix' ? '#00ff00' : '#ffffff',
        },
        links: {
          color: theme === 'cyberpunk' ? '#ffffff' : theme === 'matrix' ? '#00ff00' : '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: "none" as MoveDirection,
          enable: true,
          outModes: {
            default: "bounce" as OutMode,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.3,
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.05,
            sync: false,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
          random: true,
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.1,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }

    // Theme-specific modifications
    if (theme === 'matrix') {
      return {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          shape: {
            type: 'char',
            character: {
              value: ['0', '1', 'ア', 'イ', 'ウ', 'エ', 'オ'],
              font: 'Verdana',
              style: '',
              weight: '400',
              fill: true,
            },
          },
          move: {
            ...baseConfig.particles.move,
            direction: "bottom" as MoveDirection,
            speed: 3,
          },
          links: {
            ...baseConfig.particles.links,
            enable: false,
          },
        },
      }
    }

    if (theme === 'neon') {
      return {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          color: {
            value: ['#ffffff', '#f0f0f0', '#e0e0e0'],
          },
          links: {
            ...baseConfig.particles.links,
            color: '#ffffff',
            opacity: 0.05,
          },
          move: {
            ...baseConfig.particles.move,
            speed: 0.5,
          },
          opacity: {
            ...baseConfig.particles.opacity,
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.1,
              sync: false,
            },
          },
        },
      }
    }

    return baseConfig
  }

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 opacity-60 light:opacity-20 ${className}`}>
      <Particles
        id={`particles-${theme}`}
        init={particlesInit}
        loaded={particlesLoaded}
        options={getParticleConfig()}
        className="w-full h-full"
      />
    </div>
  )
}
