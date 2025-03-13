'use client'

import {
  type MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'
import Link from 'next/link'

import { MdMasks, MdOutlineSportsHandball } from 'react-icons/md'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import { CiFlag1, CiShoppingBasket } from 'react-icons/ci'
import { PiConfetti, PiLightning, PiMoney, PiStar, PiUserCircleDuotone, PiCrown } from 'react-icons/pi'
import { BriefcaseIcon } from './icons/Briefcase'

interface Resource {
  href: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  pattern: Omit<
    React.ComponentPropsWithoutRef<typeof GridPattern>,
    'width' | 'height' | 'x'
  >
}

const resources: Array<Resource> = [
  {
    href: '/orders-api',
    name: 'Api de Pedidos (Orders API)',
    description:
      'Aprenda sobre o modelo de pedidos e como criar, recuperar, atualizar, excluir e listar pedidos.',
    icon: CiShoppingBasket,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/register-user',
    name: 'Api de Cadastro de Usuário',
    description:
      'Um endpoint simples para validar e simular o cadastro de usuários em sua aplicação.',
    icon: PiUserCircleDuotone,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/reviews-api',
    name: 'Api de Reviews',
    description:
      'A API de avaliações simula uma lista de avaliações de produtos em uma plataforma.',
    icon: PiStar,
    pattern: {
      y: 12,
      squares: [[1, 0], [0, 1]],
    },
  },
  {
    href: '/jobs-api',
    name: 'Api de Vagas (Jobs API)',
    description:
      'Uma API com uma listatem hipotética de vagas e com possibilidade de criar, listar e apagar vagas.',
    icon: BriefcaseIcon,
    pattern: {
      y: 12,
      squares: [[1, 0], [0, 1]],
    },
  },
  {
    href: '/olympic-games',
    name: 'Api dos Jogos Olímpicos',
    description: 'Dados dos Jogos Olímpicos de Paris 2024',
    icon: PiLightning,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/olympic-games-english',
    name: 'Olympics 2025 API (English)',
    description:
      'Full data for events, venues, countries and games for Olympics 2024',
    icon: PiLightning,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/atletas-brasileiros',
    name: 'Atletas Brasileiros',
    description:
      'Base de dados (SQL) de atletas olímpicos e paralímpicos brasileiros',
    icon: MdOutlineSportsHandball,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/gastos-senadores',
    name: 'Gastos dos Senadores',
    description:
      'API com os gastos dos senadores do Brasil, com dados abertos e atualizados - incluindo partidos, estados e mais',
    icon: PiMoney,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/bandeiras-dos-estados',
    name: 'Bandeiras dos Estados do Brasil',
    description:
      'API com as bandeiras dos estados do Brasil em quatro formatos diferentes',
    icon: CiFlag1,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/bloquinhos-2025',
    name: 'Bloquinhos de Carnaval 2025',
    description: 'API com a programação dos Bloquinhos de Carnaval 2025 em 10 cidades',
    icon: PiConfetti,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/legado-feminino',
    name: 'API do legado feminino',
    description: 'Base de dados composta por 100 mulheres que marcaram a história',
    icon: PiCrown,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    }
  }
]

function ResourceIcon({ icon: Icon }: { icon: Resource['icon'] }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/30 dark:group-hover:bg-blue-300/10 dark:group-hover:ring-blue-400">
      <Icon className="h-5 w-5 fill-zinc-700/40 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/40 dark:stroke-zinc-400 dark:group-hover:fill-blue-300/50 dark:group-hover:stroke-blue-400" />
    </div>
  )
}

function ResourcePattern({
  mouseX,
  mouseY,
  ...gridProps
}: Resource['pattern'] & {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function Resource({ resource }: { resource: Resource }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <ResourceIcon icon={resource.icon} />
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.description}
        </p>
      </div>
    </div>
  )
}

export function Resources() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="resources">
        APIs do Codante
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {resources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
