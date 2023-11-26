'use client';

import axios from "axios";
import { useCallback, useState } from "react";
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import { FcGoogle } from "react-icons/fc"

import Modal from "./modal";
import Heading from "../heading";
import Input from "../inputs/input";
import { toast } from "react-hot-toast";
import Button from "../button";
import { AiFillGithub } from "react-icons/ai";


const RegisterModal= () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/register', data)
    .then(() => {
      registerModal.onClose();
    })
    .catch((error) => {
      toast.error("Что-то пошло не так")
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Добро пожаловать в AirBnb"
        subtitle="Создать аккаунт"
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr/>
      <Button
        outline
        label="С помощью Google"
        icon={FcGoogle}
        onClick={()=>{}}
      />
      <Button
        outline
        label="С помощью Github"
        icon={AiFillGithub}
        onClick={()=>{}}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div>
            Уже есть аккаунт?
          </div>
          <div 
            onClick={registerModal.onClose}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Войти
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Регистрация"
      actionLabel="Продолжить"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default RegisterModal;