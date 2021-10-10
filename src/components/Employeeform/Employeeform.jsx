import React from 'react';

const EmployeeForm = ({ register, errors }) => {
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
      <label className="form-label" htmlFor="last_name">
        Apellidos
      </label>
      <input
        className={`form-input ${errors.last_name && 'form-input-invalid'}`}
        type="text"
        id="last_name"
        {...register('last_name', { required: true })}
      />
      <p className="form-input-error-message">{errors.last_name && 'Este campo es requerido'}</p>
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
      <label className="form-label" htmlFor="email">
        Número de identidad
      </label>
      <input
        className={`form-input ${errors.document && 'form-input-invalid'}`}
        type="text"
        id="document"
        {...register('document', { required: true })}
      />
      <p className="form-input-error-message">{errors.document && 'Este campo es requerido'}</p>
      <label className="form-label" htmlFor="rol">
        Rol
      </label>
      <select {...register('role')} className="form-input" id="rol">
        <option value="Admin">Admin</option>
        <option value="Profesor">Profesor</option>
        <option value="Recursos Humanos">Recursos Humanos</option>
      </select>
    </React.Fragment>
  );
};

export default EmployeeForm;
