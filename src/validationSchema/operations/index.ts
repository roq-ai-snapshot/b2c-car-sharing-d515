import * as yup from 'yup';

export const operationValidationSchema = yup.object().shape({
  action: yup.string().required(),
  status: yup.string().required(),
  dashboard_id: yup.string().nullable().required(),
});
