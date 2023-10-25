import RingLoader from 'react-spinners/RingLoader';

const override = {
  display: 'block',
  margin: '0 auto',
};

const Loader = () => {
  return <RingLoader color="#800" speedMultiplier={2} cssOverride={override} />;
};

export default Loader;
