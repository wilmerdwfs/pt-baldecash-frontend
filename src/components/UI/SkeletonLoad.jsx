import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const SkeletonLoad = () => {
  return (
    <Box>
      <Skeleton  height={118} />
      <Skeleton  height={118} animation="wave" />
      <Skeleton  height={118} animation={false} />
    </Box>
  )
}

export default SkeletonLoad