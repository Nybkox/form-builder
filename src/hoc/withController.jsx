import { Controller, useFormContext } from 'react-hook-form';

const withController =
  (Component) =>
  ({ name, rules, ...rest }) => {
    const { control } = useFormContext();

    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange, onBlur, name: _name, ref }, fieldState: { error } }) => (
          <Component ref={ref} name={_name} value={value} setValue={onChange} onBlur={onBlur} error={error} {...rest} />
        )}
      />
    );
  };

export default withController;
