import React from "react";

export const FormCell = ({ children, width = "part" }) => {
  return <div className="form__cell">{children}</div>;
};

export const FormGroupHeading = ({ children }) => {
  return (
    <div className="form__heading form__cell">
      <h3>{children}</h3>
    </div>
  );
};

export const Input = ({ value, label, type = "text", placeholder = "" }) => {
  const [interaction, setInteraction] = React.useState({
    dirty: false,
    touched: false,
  });

  function handleInteraction() {
    setInteraction();
  }

  return (
    <FormCell>
      <label className="input">
        <div className="form__label">{label}</div>
        <input
          className="input__field"
          type={type}
          value={value}
          placeholder={placeholder}
        />
      </label>
    </FormCell>
  );
};

export const RadioInput = ({
  name,
  type = "radio",
  choices,
  valueKey,
  labelKey,
  checkedKey,
}) => {
  return (
    <FormCell>
      <div className="radio">
        <div className="form__label">{name}</div>
        <div className="radio__group">
          {choices.map((choice) => {
            return (
              <label className="radio__container" key={choice[labelKey]}>
                <input
                  className="radio__input"
                  type={type}
                  value={choice[valueKey]}
                  name={name}
                  defaultChecked={choice[checkedKey]}
                  // disabled={choice.disabled}
                />
                <span className="radio__label">{choice[labelKey]}</span>
              </label>
            );
          })}
        </div>
      </div>
    </FormCell>
  );
};

export const RangeInput = ({ name, heading, min = 1, max = 100, step = 1 }) => {
  const [value, setValue] = React.useState(max / 2);

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <FormCell>
      <label className="range">
        <div className="form__label range__label">{heading}</div>
        <div className="range__slider">
          <input
            className="range__input"
            type="range"
            name={name}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
          />
          <input
            type="number"
            className="range__number"
            value={value}
            onChange={handleChange}
            min={min}
            max={max}
          />
        </div>
      </label>
    </FormCell>
  );
};

export const FieldSet = ({ children }) => {
  return <div className="form__row">{children}</div>;
};

export const FormGroup = ({ size = "full", children }) => {
  return <div className={`form__group form__group--${size}`}>{children}</div>;
};

export const FormFooter = ({ children }) => {
  return <div className={`form__footer form__cell`}>{children}</div>;
};
