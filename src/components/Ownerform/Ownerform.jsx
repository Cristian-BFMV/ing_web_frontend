import React from 'react';

const OwnerForm = ({ register, errors }) => {
  return (
    <React.Fragment>
      <label className="form-label" htmlFor="name">
        Nombres
      </label>
      <input
        className={`form-input ${errors.name && 'form-input-invalid'}`}
        type="text"
        id="name"
        {...register('name', { required: true })}
      />
      <p className="form-input-error-message">{errors.name && 'Este campo es requerido'}</p>
      <label className="form-label" htmlFor="lastname">
        Apellidos
      </label>
      <input
        className={`form-input ${errors.lastname && 'form-input-invalid'}`}
        type="text"
        id="lastname"
        {...register('lastname', { required: true })}
      />
      <p className="form-input-error-message">{errors.lastname && 'Este campo es requerido'}</p>
      <label className="form-label" htmlFor="email">
        Correo
      </label>
      <input
        className={`form-input ${errors.email && 'form-input-invalid'}`}
        type="text"
        id="email"
        {...register('email', { required: true })}
      />
      <p className="form-input-error-message">{errors.email && 'Este campo es requerido'}</p>
      <label className="form-label" htmlFor="document">
        Número de identidad
      </label>
      <input
        className={`form-input ${errors.document && 'form-input-invalid'}`}
        type="text"
        id="document"
        {...register('document', { required: true })}
      />
      <p className="form-input-error-message">{errors.address && 'Este campo es requerido'}</p>
      <label className="form-label" htmlFor="address">
        Dirección
      </label>
      <input
        className={`form-input ${errors.address && 'form-input-invalid'}`}
        type="text"
        id="address"
        {...register('address', { required: true })}
      />
      <p className="form-input-error-message">{errors.address && 'Este campo es requerido'}</p>
      <label className="form-label" htmlFor="phonenumber">
        Número telefonico
      </label>
      <input
        className={`form-input ${errors.phonenumber && 'form-input-invalid'}`}
        type="text"
        id="phonenumber"
        {...register('phonenumber', { required: true })}
      />
      <p className="form-input-error-message">{errors.created_by && 'Este campo es requerido'}</p>
      <label className="form-label" htmlFor="created_by">
        Registrado por
      </label>
      <input
        className={`form-input ${errors.created_by && 'form-input-invalid'}`}
        type="text"
        id="created_by"
        {...register('created_by', { required: true })}
      />
      <p className="form-input-error-message">{errors.created_by && 'Este campo es requerido'}</p>
    </React.Fragment>
  );
};

export default OwnerForm;
