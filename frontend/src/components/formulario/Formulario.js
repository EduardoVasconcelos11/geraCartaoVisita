import React from "react";
import { useForm } from "react-hook-form";
import './index.css';

const Formulario = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Função de envio do formulário
  const onSubmit = (data) => {
    console.log(data)
    // Passar os dados capturados para o handler do formulário do componente pai
    props.clickForm(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Campo de Nome */}
        <div className="form-group">
          <label className="name">Nome*</label>
          <input
            type="text"
            id="name"
            placeholder="nome@email.com"
            {...register('name', { required: "Nome é obrigatório" })}
          />
          {errors.name && <span className="error-message">{errors.name.message}</span>}
        </div>

        {/* Campos de Telefone e Email */}
        <div className="form-row">
          <div className="input-half">
            <label className="phone">Telefone*</label>
            <input
              type="tel"
              id="phone"
              placeholder="(00) 0 0000-0000"
              {...register('phone', { required: "Telefone é obrigatório" })}
            />
            {errors.phone && <span className="error-message">{errors.phone.message}</span>}
          </div>
          <div className="input-half">
            <label className="email">E-mail*</label>
            <input
              type="email"
              id="email"
              placeholder="nome@email.com"
              {...register('email', { required: "Email é obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })}
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>
        </div>

        {/* Checkbox de Concordância */}
        <div className="form-agreement">
          <label className="agreement">
            Ao preencher o formulário, concordo em receber comunicações de acordo com meus interesses. <br />
            Ao informar meus dados, eu concordo com a <a href="/politica">Política de privacidade</a>.
          </label>
        </div>

        {/* Observação abaixo do checkbox */}
        <small>
          Você pode alterar suas permissões de comunicação a qualquer tempo.
        </small>

        {/* Botão de envio */}
        <button className="download-btnn" type="submit">GERAR CARTÃO GRÁTIS</button>
      </form>
    </>
  );
};

export default Formulario;
