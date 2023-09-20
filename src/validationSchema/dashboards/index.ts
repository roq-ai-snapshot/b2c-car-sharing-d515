import * as yup from 'yup';

export const dashboardValidationSchema = yup.object().shape({
  type: yup.string().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
