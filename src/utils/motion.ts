export const StaggerContainer = (staggerChildren: number, delayChildren: number) => {
  return {
    hidden: {
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren:delayChildren || 0 
        }
      }
    }
  }
}