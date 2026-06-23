"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  nom: yup.string().min(5, "Le nom doit avoir min 5 caractères").required(),
  telephone: yup.string().matches(/^\d{8}$/, "Le téléphone doit contenir 8 chiffres").required(),
  password: yup.string().min(6, "Le mot de passe doit avoir min 6 caractères").required(),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Les mots de passe doivent être identiques')
    .required(),
  acceptConditions: yup.boolean().oneOf([true], "Vous devez accepter les conditions").required(),
});

export default function InscriptionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col gap-4">
      <input {...register("nom")} placeholder="Nom" className="border p-2" />
      <p className="text-red-500">{errors.nom?.message}</p>

      <input {...register("telephone")} placeholder="Téléphone" className="border p-2" />
      <p className="text-red-500">{errors.telephone?.message}</p>

      <input type="password" {...register("password")} placeholder="Mot de passe" className="border p-2" />
      <p className="text-red-500">{errors.password?.message}</p>

      <input type="password" {...register("confirmPassword")} placeholder="Confirmer mot de passe" className="border p-2" />
      <p className="text-red-500">{errors.confirmPassword?.message}</p>

      <label>
        <input type="checkbox" {...register("acceptConditions")} /> Accepter les conditions
      </label>
      <p className="text-red-500">{errors.acceptConditions?.message}</p>

      <button type="submit" className="btn-primary">S'inscrire</button>
    </form>
  );
}