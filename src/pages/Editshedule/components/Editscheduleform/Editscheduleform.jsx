import React from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../../../components/Form/Form';
import { updateScheduleService } from '../../../../services/Schedule.service';
import { AuthContext } from '../../../../context/Auth.context';

const EditScheduleForm = ({ scheduleId, showModalSuccess, showModalError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { token } = React.useContext(AuthContext);

  const onSubmit = async formData => {
    try {
      await updateScheduleService(formData, scheduleId, token);
      showModalSuccess();
    } catch (error) {
      showModalError(error.message);
    }
  };

  return (
    <Form title="Actualizar Mascota" onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting} buttonText="Actualizar">
      <label className="form-label" htmlFor="status">
        Estado del servicio
      </label>
      <select {...register('status')} className="form-input" id="status">
        <option value="Activo">Activo</option>
        <option value="Completado">Completado</option>
        <option value="Cancelado">Cancelado</option>
      </select>
      <label className="form-label" htmlFor="news">
        Novedades
      </label>
      <input
        className={`form-input ${errors.news && 'form-input-invalid'}`}
        type="text"
        id="news"
        {...register('news', { required: true })}
      />
      <p className="form-input-error-message">{errors.news && 'Este campo es requerido'}</p>
    </Form>
  );
};

export default EditScheduleForm;
