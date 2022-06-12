import Blog from 'components/Blog';
import Footer from 'components/Footer';
import Home from 'components/Home';
import Milestones from 'components/Milestones';
import Portfolio from 'components/Portfolio';
import ScrollToTop from 'components/ScrollToTop';
import Services from 'components/Services';
import React from 'react';
import { motion } from "framer-motion";
import Video from './components/Video';
import Contact from './components/Contact';

function App() {
  return <motion.div initial="hidden" animate="show">
    <ScrollToTop />
    <Home />
    <Services />
    <Portfolio />
    <Milestones />
    <Blog />
    <Video />
    <Contact />
    <Footer />
  </motion.div>;
}

export default App;
