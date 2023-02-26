import Image from 'next/image';

const web3Image = () => (
  <Image
    src="/assets/images/web3.jpg" // Route of the image file
    height={240} // Desired size with correct aspect ratio
    width={360} // Desired size with correct aspect ratio
    alt="web3"
  />
);
