import sun from '../../../../assets/sun.svg';
import './Petservices.css';

const PetServices = () => {
  return (
    <div className="pet-services-container">
      <div className="pet-services-header">
        <h2 className="pet-services-header-title">Nuestros Servicios</h2>
        <p className="pet-services-header-description">El mejor lugar para tu mascota</p>
      </div>
      <section className="services-icons">
        <article className="service-card">
          <div className="service-card-header">
            <img src={sun} alt="Sun Icon" className="service-card-icon" />
          </div>
          <div className="service-card-body">
            <h2 className="service-card-title">Día de Sol</h2>
            <p className="service-card-description">
              Un día de mucha diversión para que tu perro socialice, juegue y realice mucho ejercicio en compañía de sus
              amigos
            </p>
          </div>
        </article>
        <article className="service-card">
          <div className="service-card-header">
            <img src={sun} alt="Sun Icon" className="service-card-icon" />
          </div>
          <div className="service-card-body">
            <h2 className="service-card-title">Guarderia de Mascotas</h2>
            <p className="service-card-description">
              Contamos con los mejores adiestradores caninos de Medellín, Guardería Canina 24 horas. Todos nuestros servicios
              apoyado por expertos en etología. Una experiencia única para tu mascota!
            </p>
          </div>
        </article>
        <article className="service-card">
          <div className="service-card-header">
            <img src={sun} alt="Sun Icon" className="service-card-icon" />
          </div>
          <div className="service-card-body">
            <h2 className="service-card-title">Colegio de Mascotas</h2>
            <p className="service-card-description">
              Espacio privilegiado y de fácil acceso, rodeado de bosques nativos, ríos y quebradas. ¡Un lugar ideal para el
              bienestar y esparcimiento de nuestros mejores amigos!
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default PetServices;
