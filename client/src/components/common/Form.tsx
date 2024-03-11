import React, { memo, useCallback, useMemo, useState } from 'react';
import { IInput, IUserOrder } from '../../types/types';
import FormTemplate from '../templates/FormTemplate';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/actions/orderSlicer';
import { RootState } from '../../store/store';

const orderFormFields: IInput[] = [
  { id: 'userName', label: 'User name', type: 'text', placeholder: 'Input your name', value: '' },
  { id: 'userEmail', label: 'Email', type: 'email', placeholder: 'Input your email', value: '' },
  {
    id: 'userPhone',
    label: 'User phone number',
    type: 'tel',
    placeholder: 'Input your phone number',
    value: '',
  },
  {
    id: 'userAddress',
    label: 'Address',
    type: 'text',
    placeholder: 'Input your address',
    value: '',
  },
];

interface IFormProps {}
const Form: React.FC<IFormProps> = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.order);

  const [errorFields, setErrorField] = useState('');
  const [changedFields, setChangedFields] = useState<string[]>([]);

  const setData = useCallback(
    (id: string, value: string) => {
      setChangedFields([...changedFields.filter((item) => item !== id)]);
      dispatch(
        setUser({
          key: id,
          value,
        })
      );
    },
    [changedFields, dispatch]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent) => {
      const elements = Array.from(document.forms[0]);
      elements.forEach((element) => {
        const { id, value } = element as HTMLInputElement;
        if (!!value) setData(id, value);
      });
    },
    [setData]
  );

  const handleChange = useCallback(
    (e: React.FormEvent) => {
      const { id, value, type } = e.target as HTMLInputElement;
      if (type !== 'number') setData(id, value);
    },
    [setData]
  );

  const addErrorField = useCallback(
    (fieldId: string, isError: boolean) => {
      const errors = errorFields.replace(`${fieldId},`, '');
      if (!isError) {
        setErrorField(errors);
        return;
      } else {
        setErrorField(`${errors},${fieldId},`);
      }
    },
    [errorFields]
  );

  const correctOrderFormFields = useMemo(
    () =>
      orderFormFields.map((field) => ({
        ...field,
        value: user[field.id as keyof IUserOrder],
      })),
    [user]
  );

  return (
    <FormTemplate
      id="orderUserForm"
      fields={correctOrderFormFields}
      handleBlur={handleBlur}
      handleChange={handleChange}
      addErrorField={addErrorField}
    />
  );
};

export default memo(Form);
