/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Layout from './components/Layout';
import { Hero, About } from './components/HeroAbout';
import { Experience, Projects } from './components/ExperienceProjects';
import { Skills, SystemDesign, Contact } from './components/SkillsSystemContact';

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <SystemDesign />
      <Contact />
    </Layout>
  );
}
