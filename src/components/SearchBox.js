import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Form, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBox = props => {
  const { formLabel, placeholder, value, onChange, onSubmit } = props
  //
  const refTextbox = useRef(null)
  //
  return (
    <Form as="div" id="search-box">
      <Form.Group controlId="boxSearch">
        <Form.Label>{formLabel}</Form.Label>
        <InputGroup>
          <Form.Control
            ref={refTextbox}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
            onKeyPress={e => {
              if (e.key === 'Enter') onSubmit(e.target.value)
            }}
            autoComplete="off"
          />
          <FontAwesomeIcon
            className="cursor"
            icon="search"
            onClick={() => onSubmit(refTextbox.current.value)}
          />
        </InputGroup>
      </Form.Group>
    </Form>
  )
}

SearchBox.propTypes = {
  formLabel: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

export default SearchBox
