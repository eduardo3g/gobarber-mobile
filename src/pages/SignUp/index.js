import React, { useRef } from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next" // Adiciona botão "Next"
            onSubmitEditing={() => emailRef.current.focus()} // Ao pressionar o botão, aplicar focus no campo de email
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            returnKeyType="next" // Adiciona botão "Next"
            onSubmitEditing={() => passwordRef.current.focus()} // Ao pressionar o botão, aplicar focus no campo de senha
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send" // Como é o último input a ser preenchido (senha), adicionar botão de submit no teclado
            onSubmitEditing={handleSubmit} // disparar função de submit do formulário de SignIn
          />

          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho login</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
