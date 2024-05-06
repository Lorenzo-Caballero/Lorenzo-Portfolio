import { useEffect } from 'react';

const ParticleComponent = ({ data }) => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    particlesJS('particles-js', data);
  }, []);

  return <div id="particles-js" className="particles"></div>;
};

export default ParticleComponent;
