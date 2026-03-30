import React from "react";

import PropTypes from "prop-types";

/**Кнопка */
export const Button = (data) => {
  return (
    <React.Fragment>
      <button
        ref={data.btnRef}
        data-id={data.id}
        className={data.className + "__btn"}
        onClick={data.onClick ? () => data.onClick(data.id) : null}
      >
        {data.text ? data.text : data.name}
      </button>
    </React.Fragment>
  );
};

Button.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    btnRef: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }),
};

/**Поле ввода в форме поиска */
export const Input = React.forwardRef((data, ref) => {
  return (
    <React.Fragment>
      <div className="input-wrapper">
        <input
          ref={ref}
          className={data.className + "__input"}
          type={data.type}
          name={data.name}
          min={data.min}
          max={data.max}
          defaultValue={data.value}
          onChange={data.onChange}
        />
        <label className="label" name={data.label}>
          {data.label}
        </label>
      </div>
    </React.Fragment>
  );
});

/**Текстовая ссылка */

export const Link = (props) => {
  if (!props) {
    return null;
  }

  const classes = props.className + "-link";
  let result = React.createElement(
    props.tag,
    { className: props.className + "-text" },
    props.text
  );

  return (
    <>
      <a className={classes} href={props.url} target="blanc">
        {result}
      </a>
    </>
  );
};

Link.propTypes = {
  props: PropTypes.object.isRequired,
};