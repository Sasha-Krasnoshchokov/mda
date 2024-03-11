import React, { memo, useCallback, useState } from 'react';
import { ID, IInput } from '../../types/types';

export interface IInputProps {
  field: IInput;
  getInputtedValue?: (data: { productId: ID; value: string }) => void;
  addErrorField?: (fieldId: string, isError: boolean) => void;
}

export const FormInput: React.FC<IInputProps> = ({
  field,
  addErrorField = () => {},
  getInputtedValue = () => {},
}) => {
  const { id, type, label, value, defaultValue, placeholder } = field;
  const [currentValue, setCurrentValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (type === 'number') {
        if (parseInt(value) < 0) return;
        const currentValue = `${parseInt(value.replace('.', '') || '0')}`;
        setCurrentValue(currentValue);
        getInputtedValue({ productId: id, value: currentValue });
      } else {
        setCurrentValue(value);
      }
    },
    [type, id, getInputtedValue]
  );
  const handleBlur = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsError(!e.target.value);
      addErrorField(`${id}`, !e.target.value);
    },
    [addErrorField, id]
  );
  return (
    <label
      htmlFor={`${id}`}
      className="form-label"
    >
      {label}
      <input
        required
        type={type}
        id={`${id}`}
        name={`${id}`}
        tabIndex={id === 'userName' ? 1 : 2}
        className="form-input"
        defaultValue={defaultValue}
        value={currentValue || value}
        placeholder={placeholder}
        data-error={isError}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </label>
  );
};

interface IFormProps {
  id: string;
  fields: IInput[];
  handleChange?: (e: React.FormEvent) => void;
  handleBlur?: (e: React.FocusEvent) => void;
  addErrorField?: (fieldId: string, isError: boolean) => void;
  getInputtedValue?: (data: { productId: ID; value: string }) => void;
}
const FormTemplate: React.FC<IFormProps> = ({
  id,
  fields,
  handleChange = () => {},
  handleBlur = () => {},
  addErrorField = () => {},
}) => (
  <form
    action=""
    id={id}
    className="form"
    onChange={handleChange}
    onBlur={handleBlur}
  >
    {fields.map((field) => (
      <React.Fragment key={field.id}>
        <FormInput
          field={field}
          addErrorField={addErrorField}
        />
      </React.Fragment>
    ))}
  </form>
);

export default memo(FormTemplate);
