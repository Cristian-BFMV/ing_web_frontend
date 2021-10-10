import React from 'react';
import { Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PetForm = ({ register, control, errors, pets }) => {
  return (
    <React.Fragment>
      <label className="form-label" htmlFor="service">
        Servicio
      </label>
      <select {...register('serviceName')} className="form-input" id="service">
        <option value="Día de sol">Día de sol</option>
        <option value="Guarderia">Guarderia</option>
        <option value="Colegio">Colegio</option>
      </select>
      <label className="form-label" htmlFor="pet">
        Mascota
      </label>
      <select {...register('idPet')} className="form-input" id="pet">
        {pets.map(pet => (
          <option key={pet._id} value={pet._id}>
            {pet.name}
          </option>
        ))}
      </select>
      <label className="form-label" htmlFor="cost">
        Costo
      </label>
      <input
        className={`form-input ${errors.cost && 'form-input-invalid'}`}
        type="text"
        id="cost"
        {...register('cost', { required: true })}
      />
      <p className="form-input-error-message">{errors.cost && 'Este campo es requerido'}</p>
      <label className="form-label" htmlFor="startDate">
        Fecha de Inicio
      </label>
      <Controller
        name="startDate"
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker selected={value} onChange={onChange} showTimeSelect id="startDate" className="form-input" />
        )}
      />
      <label className="form-label" htmlFor="finishDate">
        Fecha Final
      </label>
      <Controller
        name="finishDate"
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker selected={value} onChange={onChange} showTimeSelect id="finishDate" className="form-input" />
        )}
      />
    </React.Fragment>
  );
};

export default PetForm;
