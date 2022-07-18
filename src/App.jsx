import { useState } from 'react'
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion'

import Header from './Components/Header'
import Loader from './Components/Loader'
import Banner from './Components/Banner'

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div className="hidden md:block">
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {
              loading ?
                <motion.div key="loader">
                  <Loader setLoading={setLoading}/>

                </motion.div>
              :
              <motion.div>
                <Header />
                <Banner />
              </motion.div>
            }

          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
      <div className="md:hidden bg-neutral-100 flex items-center justify-center w-[100vw] h-[100vh]">
        <h2 className="text-3xl font-bold text-center">
          This site works better on desktop.

        </h2>
      </div>
    </>

  );
}


export default App
