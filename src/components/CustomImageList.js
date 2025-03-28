import React, { useState } from 'react';

import { ImageList, ImageListItem, useMediaQuery,Dialog, DialogContent,  } from '@mui/material';

const itemData = [
  {
    img: '/assets/products/10.jpg',
    title: 'Image 1',
    author: 'Author 1',
    rows: 2,
    cols: 1,
  },
  {
    img: '/assets/products/11.jpg',
    title: 'Image 2',
    author: 'Author 2',
    rows: 1,
    cols: 1,
  },
  {
    img: '/assets/products/15.jpg',
    title: 'Image 3',
    author: 'Author 3',
    rows: 1,
    cols: 1,
  },
  {
    img: '/assets/products/13.jpg',
    title: 'Image 4',
    author: 'Author 4',
    rows: 1,
    cols: 1,
  },
  {
    img: '/assets/products/14.jpg',
    title: 'Image 1',
    author: 'Author 1',
    rows: 2,
    cols: 2,
  },
  {
    img: '/assets/products/10.jpg',
    title: 'Image 2',
    author: 'Author 2',
    rows: 1,
    cols: 1,
  },
  {
    img: '/assets/products/11.jpg',
    title: 'Image 3',
    author: 'Author 3',
    rows: 1,
    cols: 1,
  },
  {
    img: '/assets/products/15.jpg',
    title: 'Image 4',
    author: 'Author 4',
    rows: 1,
    cols: 1,
  },
  // Add more items as needed
];

function CustomImageList() {
  // Define breakpoints for extra small (xs), small (sm), medium (md), and large (lg) screens
  const isXsScreen = useMediaQuery('(max-width:600px)'); // Extra small
  const isSmScreen = useMediaQuery('(min-width:600px) and (max-width:960px)'); // Small
  const isMdScreen = useMediaQuery('(min-width:960px) and (max-width:1280px)'); // Medium
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  let cols = 4; // Default for large screens (>=1280px)
  if (isXsScreen) cols = 2;
  else if (isSmScreen) cols = 3;
  else if (isMdScreen) cols = 4;

  const rowHeight = `calc(100vw / ${cols})`;

  const handleClickOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };
  return (
    <>
    <ImageList
  sx={{ width: '100%', height: 'auto' }}
  variant="quilted"
  cols={cols}
  rowHeight="auto"
  gap={10}
>
  {itemData.map((item) => (
    <ImageListItem
      key={item.img}
      onClick={() => handleClickOpen(item.img)}
      rows={item.rows}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 2, // rounded corners, optional
        '&:hover': {
          boxShadow: '2px 4px 10px rgba(0, 0, 0, 1)', // dark shadow
          // dark border
        },
        '& img': {
          transition: 'transform 0.3s ease', // smooth zoom transition
          transform: 'scale(1)', // initial scale
          '&:hover': {
            transform: 'scale(1.1)', // zoom effect
          },
        },
      }}
    >
      <img
        src={`${item.img}?w=248&fit=crop&auto=format`}
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </ImageListItem>
  ))}
</ImageList>


<Dialog open={open} onClose={handleClose} maxWidth="md">
  <DialogContent>
    {selectedImage && (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={selectedImage}
          alt="Selected"
          style={{ width: '50%', height: 'auto', marginRight: '16px' }}
        />
        <h2 style={{ textAlign: 'left' }}>Product Name</h2>
      </div>
    )}
  </DialogContent>
</Dialog>


    </>
  );
}

export default CustomImageList;
