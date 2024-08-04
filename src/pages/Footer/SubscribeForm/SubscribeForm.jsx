import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';

import {
  FooterForm,
  Form,
  InputWrapper,
  Input,
  SubscribeButton,
  IconLetter,
  SubscribeTitle,
  SubscribeText,
  ErrorMessage,
} from './SubscribeForm.styled';

const emailSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: joiResolver(emailSchema),
    defaultValues: {
      email,
    },
  });

  const onSubmitHandler = async data => {
    try {
      console.log('Submitted data:', data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <FooterForm>
      <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
      <SubscribeText>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </SubscribeText>

      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <InputWrapper htmlFor="email">
          <IconLetter />

          <Input
            id="email"
            placeholder="Enter your email address"
            autoComplete="off"
            {...register('email', {
              value: email,
              onChange: e => handleChange(e),
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputWrapper>
        <SubscribeButton>Subscribe</SubscribeButton>
      </Form>
    </FooterForm>
  );
};
