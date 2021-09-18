import sun from '../../../../assets/sun.svg';
import './Petservices.css';

const PetServices = () => {
  return (
    <div className="pet-services-container">
      <div className="pet-services-header">
        <h2 className="pet-services-header-title">Nuestros Servicios</h2>
        <p className="pet-services-header-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, quas.
        </p>
      </div>
      <section className="services-icons">
        <article className="service-card">
          <div className="service-card-header">
            <img src={sun} alt="Sun Icon" className="service-card-icon" />
          </div>
          <div className="service-card-body">
            <h2 className="service-card-title">Día de Sol</h2>
            <p className="service-card-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iusto dignissimos provident voluptatem in
              temporibus.
            </p>
          </div>
        </article>
        <article className="service-card">
          <div className="service-card-header">
            <img src={sun} alt="Sun Icon" className="service-card-icon" />
          </div>
          <div className="service-card-body">
            <h2 className="service-card-title">Día de Sol</h2>
            <p className="service-card-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iusto dignissimos provident voluptatem in
              temporibus.
            </p>
          </div>
        </article>
        <article className="service-card">
          <div className="service-card-header">
            <img src={sun} alt="Sun Icon" className="service-card-icon" />
          </div>
          <div className="service-card-body">
            <h2 className="service-card-title">Día de Sol</h2>
            <p className="service-card-description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, iusto dignissimos provident voluptatem in
              temporibus.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default PetServices;
