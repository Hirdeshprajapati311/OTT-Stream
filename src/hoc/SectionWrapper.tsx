import { motion } from "framer-motion"
import { StaggerContainer } from "../utils/motion"


const SectionWrapper =<P extends object> (Component:React.ComponentType<P>) => {
  const HOC = (props:P) => (
    <motion.div variants={StaggerContainer(0.2, 0.1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="md:pl-20" >
        <Component {...props} />
     

    </motion.div>
  );
  return HOC;
}

export default SectionWrapper