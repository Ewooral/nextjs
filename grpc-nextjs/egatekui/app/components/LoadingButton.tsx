import React, { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

const LoadingDot = {
    display: "block",
    width: "1.5rem",
    height: "1.5rem",
    backgroundColor: "#2563eb",
    borderRadius: "50%"
  };
  
  const LoadingContainer = {
    width: "10rem",
    height: "5rem",
    display: "flex",
    justifyContent: "space-around"
  };
  
  const ContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2
      }
    },
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const DotVariants = {
    initial: {
      y: "0%"
    },
    animate: {
      y: "100%"
    }
  };
  
  const DotTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut"
  };
  
export default function LoadingButton(): JSX.Element {
    return (
      <div
        style={{
          paddingTop: "5rem",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <motion.div
          style={LoadingContainer}
          variants={ContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
          />
          <motion.span
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
          />
          <motion.span
            style={LoadingDot}
            variants={DotVariants}
            transition={DotTransition}
          />
        </motion.div>
      </div>
    );
  }


//   import React, { ButtonHTMLAttributes } from 'react';
//   import { motion } from 'framer-motion';
  
//   interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//     isLoading: boolean;
//   }
  
//   const LoadingButton: React.FC<LoadingButtonProps> = ({ isLoading, children, ...props }) => {
//     const variants = {
//       notLoading: { scale: 1 },
//       loading: { scale: [1, 1.05, 1], transition: { duration: 0.5, repeat: Infinity } },
//     };
  
//     return (
//       <motion.button
//         {...props}
//         variants={variants}
//         animate={isLoading ? 'loading' : 'notLoading'}
//       >
//         {children}
//       </motion.button>
//     );
//   };
  
//   export default LoadingButton;