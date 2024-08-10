'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

const phrase =
  'Passionate Front-End Developer skilled in crafting visually stunning and user-centric websites. Expertise in modern frameworks and responsive design to create seamless and engaging user experiences.';

export function Description() {
  return (
    <article className='container relative'>
      <Wrapper>
        <div className='basis-full lg:basis-9/12'>
          <Title>
            <ParallaxReveal paragraph={phrase} />
          </Title>
        </div>

        <div className='basis-7/12 lg:basis-3/12'>
          <ParallaxFade>
            <Balancer as='p' className='mt-2 text-base lg:text-lg'>
              The combination of my passion for design, code & interaction
              positions me in a unique place in the web design world.
            </Balancer>
          </ParallaxFade>
        </div>

        <motion.div
          whileInView={{ y: '-15%' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className='absolute right-0 top-3/4 lg:top-full lg:me-10'>
            <Link href='/about' passHref>
              <MagneticButton variant='ghost' size='xl'>
                About me
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </Wrapper>
    </article>
  );
}
