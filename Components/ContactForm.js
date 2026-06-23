"use client"; // ضروري جداً لأن الـ Form تتفاعل مع المستخدم
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// قواعد التحقق المطلوبة في السؤال
const schema = yup.object().shape({
  nom: yup.string().min(4, "Le nom doit contenir au moins 4 caractères").required(),
  email: yup.string().email("Email invalide").required("L'email est requis"),
  message: yup.string().max(30, "Le message ne doit pas dépasser 30 caractères").required(),
});

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Message envoyé avec succès !");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-6">
      <input {...register("nom")} placeholder="Nom" className="border p-2" />
      <p className="text-red-500 text-sm">{errors.nom?.message}</p>

      <input {...register("email")} placeholder="Email" className="border p-2" />
      <p className="text-red-500 text-sm">{errors.email?.message}</p>

      <textarea {...register("message")} placeholder="Message" className="border p-2" />
      <p className="text-red-500 text-sm">{errors.message?.message}</p>

      <button type="submit" className="bg-primary text-white p-2 rounded">Envoyer</button>
    </form>
  );
}