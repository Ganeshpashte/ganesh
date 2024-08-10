import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const App = () => {
  // Initialize Cloudinary with your cloud name
  const cld = new Cloudinary({ cloud: { cloudName: 'ddjkx5n44' } });
  
  // Transform the image: optimize delivery and auto-crop to square aspect ratio
  const img = cld
    .image('cld-sample-5')
    .format('auto')          // Automatically set the format to the best format for the user
    .quality('auto')         // Automatically set the quality to the best level
    .resize(auto().gravity(autoGravity()).width(500).height(500)); // Resize the image with auto gravity

  // Render the transformed image
  return <AdvancedImage cldImg={img} />;
};

export default App;
