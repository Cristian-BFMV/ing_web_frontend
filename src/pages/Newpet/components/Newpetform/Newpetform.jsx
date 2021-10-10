import React from 'react';

const NewPetForm = ({ register, errors, fields, owners, addField, removeField }) => {
  return (
    <React.Fragment>
      <label className="form-label" htmlFor="name">
        Nombre
      </label>
      <input
        className={`form-input ${errors.name && 'form-input-invalid'}`}
        type="text"
        id="name"
        {...register('name', { required: true })}
      />
      <p className="form-input-error-message">{errors.name && 'Este campo es requerido'}</p>
      <label className="form-label" htmlFor="breed">
        Raza
      </label>
      <input
        className={`form-input ${errors.breed && 'form-input-invalid'}`}
        type="text"
        id="breed"
        {...register('breed', { required: true })}
      />
      <p className="form-input-error-message">{errors.breed && 'Este campo es requerido'}</p>
      <label className="form-label" htmlFor="size">
        Tamaño
      </label>
      <select {...register('size')} className="form-input" id="size">
        <option value="Pequeño">Pequeño</option>
        <option value="Mediano">Mediano</option>
        <option value="Grande">Grande</option>
      </select>
      <label className="form-label" htmlFor="age">
        Edad
      </label>
      <input
        className={`form-input ${errors.age && 'form-input-invalid'}`}
        type="text"
        id="age"
        {...register('age', { required: true })}
      />
      <p className="form-input-error-message">{errors.age && 'Este campo es requerido'}</p>
      <label className="form-label" htmlFor="vaccinePlan">
        Plan de vacunación
      </label>
      <input
        className={`form-input ${errors.vaccinePlan && 'form-input-invalid'}`}
        type="text"
        id="vaccinePlan"
        {...register('vaccinePlan', { required: true })}
      />
      <p className="form-input-error-message">{errors.vaccinePlan && 'Este campo es requerido'}</p>
      <label className="form-label" htmlFor="attendance">
        Cuidados
      </label>
      <input
        className={`form-input ${errors.attendance && 'form-input-invalid'}`}
        type="text"
        id="attendance"
        {...register('attendance', { required: true })}
      />
      <p className="form-input-error-message">{errors.attendance && 'Este campo es requerido'}</p>
      <label className="form-label" htmlFor="owner">
        Propietario
      </label>
      {fields.map((field, index) => (
        <select key={field.id} {...register(`owners.${index}._id`)} className="form-input" id="owner">
          {owners.map(owner => (
            <option key={owner._id} value={owner._id}>
              {owner.name}
            </option>
          ))}
        </select>
      ))}
      {/* <div className="positions-actions-container">
        {fields.length > 1 && (
          <div className="position-icon" onClick={removeField}>
            <img src="https://img.icons8.com/material-outlined/24/000000/filled-trash.png" alt="" />
          </div>
        )}
        {fields.length < owners.length && (
          <div className="position-icon" onClick={addField}>
            <img src="https://img.icons8.com/material/24/000000/plus-2-math--v1.png" alt="" />
          </div>
        )}
      </div> */}
    </React.Fragment>
  );
};

export default NewPetForm;
